import React from 'react';
import axios from 'axios';
import './AssetList.css'
import {API} from './../../Services/Config';
import { HandleChange , handlePriceChange } from './../../share/Utility';
import {  ListGroupItem, Button , Row, Col, Form, FormGroup, Label} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import NumberFormat from 'react-number-format';

// import {InputList} from './../../share/InputList'
import { checkStorageId } from './../../share/Utility';

//import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import home from './../../assets/icons/secondIcons/home.png';
import car from './../../assets/icons/secondIcons/car.png';
import credit from './../../assets/icons/secondIcons/credit.png';

//components
import MainDate from './../mainDatePicker/MainDate';
import Salemodal from './../SaleModal/Salemodal';
import Bankmodal from './../Bankmodal/Bankmodal';

class AssetList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalAsset: [],
            show: false,
            inputName: '',
            inputAmount:'',
            inputDate: '',
            inputAccountNum:'',
            totalSum: 0,
            test: 0,
            emptyPrice: false
        }
    }

    componentDidMount() {

      checkStorageId()
        let userId = checkStorageId()  

      const { onGetData } = this.props
        axios.get(`${API}income/index`, {
            params: {
                user_id : userId,
                type: 2
            }
           }
          ).then(res => {  
          this.setState({ 
            totalAsset : [...res.data.data],
            totalSum: res.data.sum
          })
          onGetData(this.state.totalSum)
          }).catch(err => {
            console.log(err)
          })
    }

    btnClick = () => {
        this.setState({ 
          show : !this.state.show,
          emptyPrice: false
        });
    }
//post api in asset page and recive update get method immediatly
    send = async (props) => {
  console.log('yesss')
      checkStorageId()
      let userId = checkStorageId() 

      const value = this.state.inputAmount   
      const price = value.replace(/,/g, "");
    
      if(price || this.state.inputAccountNum) {
      const { onGetData } = this.props

      var bodyFormData = new FormData();
      bodyFormData.append('description', this.state.inputAccountNum);
      bodyFormData.append('amount', price);
      bodyFormData.append('name', this.state.inputName);
      bodyFormData.append('categoryID', this.props.catId);
      bodyFormData.append('date', this.state.inputDate );
      bodyFormData.append('userID', userId );

      try {
        await axios({
        method: 'post',     //put
        url: `${API}income/create`,
        headers:{
           'Content-Type':'multipart/form-data'
        },
        data: bodyFormData,
        }
        ).then(res => 
            console.log(res , 'post is ok'));
        }
        catch(err){
          console.log('errrr')
        }

        await axios.get(`${API}income/index`, {
          params: {
              user_id : userId,
              type: 2
          }
        }
        ).then(res => {        
          this.setState({ 
            totalAsset : [...res.data.data],
            totalSum : res.data.sum
        })
        onGetData(this.state.totalSum)
        }).catch(err => {
        console.log(err)
        })

        this.setState({
          show: false,
          inputName: '',
          inputAmount:'',
          inputAccountNum:''
        })
      }else{
        this.setState({
          emptyPrice : true
        })
      }
    }


    handleGetFormatDate = formatDate => {
      this.setState({inputDate:formatDate})
    }

    handleSendData = (data1, data2) => {
      const { onGetData } = this.props
       console.log(data1, 'data1 in handle send')
     this.setState({
      totalAsset:[...data1],
      totalSum: data2,
     
     })
   
     console.log(this.state.totalAsset[0].amount,'state in total')
     onGetData(this.state.totalSum)
  
    }

    handleAmountChange = (e) => {
      const {name, value } = e.target;
      this.setState({
          [name] : value,
          emptyPrice : false
      })
    }


    

    render() {
     let iconn = null;
     switch (this.props.catId) {

       case 4:
         iconn = home;
         break;

       case 5:
        iconn = car;
        break;

      case 6:
        iconn = <div></div>
        break;

      case 7:
        iconn = credit;
        break;

        default:
          iconn = null;
          break;
     }


        return(
          
            <div>
             
            <ListGroupItem className="asset_list_group header">
              { this.props.catId === 6 ?
                <div className="asset_list_img"><FontAwesomeIcon icon={faBars} /></div>
             :  <div className="asset_list_img"><img src={iconn} alt=""/></div>
             }
             {this.props.mainTitle}
                <div className="base_list_btn">
                     <Button onClick={this.btnClick} className="list_btn">+</Button>
                </div>
            </ListGroupItem>

            {this.state.show  ?
                     
                     <div className="list_base_show">
                       
                            <Row >
                                <Col>
                                   
                                  <FormGroup className="form_base_part">
                                    <AvForm  onChange={(e) => HandleChange.call(this, e)} >
                                      <AvField 
                                       name="inputName"
                                       label="شرح" 
                                       type="text" 
                                       value={this.state.inputName}                                         
                                       errorMessage="شرح را وارد کنید" 
                                       validate={{
                                                  required: {value: true},
                                                  // pattern: {value: '^[A-Za-z0-9پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّs]+$'}, 
                                                }} />
                                    </AvForm>
                                  </FormGroup>
                                   
                              </Col>
                              <Col>
                                
                              {this.props.catId === 7 ? 
                                  <FormGroup className="form_base_part">
                                    <AvForm onChange={(e) => HandleChange.call(this, e)}>
                                    
                                     
                                      <AvField 
                                       name="inputAccountNum"
                                       label="شماره حساب" 
                                       type="text" 
                                       value={this.state.inputAccountNum}                                            
                                       errorMessage="شماره حساب را وارد کنید" 
                                       validate={{
                                                  number: true,
                                                  required: {value: true, errorMessage:"شماره حساب را وارد کنید"},
                                                  pattern: {value: '^[۱۲۳۴۵۶۷۸۹۰0-9]+$'},                                                
                                                }} /> 
                                              
                              
                                    </AvForm>                                   
                                       </FormGroup> : 

                                    
                                      <div>
                                       <div className={this.state.emptyPrice ? "empty_label_price" : "label_price"}> قیمت (ریال)</div>
                                      <NumberFormat
                                         required
                                         className={this.state.emptyPrice ? "input_number_format_emptyamount" : "input_number_format_amount"}
                                         name="inputAmount"
                                         value={this.state.inputAmount}
                                         onChange={(e) => this.handleAmountChange.call(this, e)}
                                         displayType="input" 
                                         thousandSeparator={true}
                                         allowEmptyFormatting 
                                      />
                                       <span className={this.state.emptyPrice ? "state_emptyAmount" : "state_amount"}>قیمت را وارد کنید</span>
                                       </div>
                                       }
                                       
                                      
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                     <Form>
                                       <FormGroup className="form_base_part">
                                         <Label for="">تاریخ</Label>
                                         <div>
                                            
                                           <MainDate onGetDate={this.handleGetFormatDate}/>
                                         </div>
                                         {/* <Input type="date" 
                                                bsSize="sm" 
                                                name="inputDate" 
                                                value={this.state.inputDate} 
                                                onChange={(e) => HandleChange.call(this, e)}  
                                                /> */}
                                       </FormGroup>
                                     </Form>
                                </Col>
                                <Col>
                                  <div className="form_part_send_btn">
                                  <Button className="send_btn" color="primary" onClick={this.send}> ارسال</Button>
                                  </div>
                                  </Col>
                            </Row> 
                          
                        </div>
                  
                         : null}
            

               {this.state.totalAsset.map( li => { 
                 console.log(li,'li in asset')
                        if(li.category_name === this.props.mainTitle )            
                      return <ListGroupItem key={li.id} className="asset_list_part">
                        {li.name}
                         {li.category_name === 'حساب بانکی' ?
                       
                          
                        <span className="asset_list_part_amount">
                          {/* <div style={{display: 'inline-block'}}><Bankmodal /></div> */}
                            {li.description} <div className="credit_icon"><img src={iconn} alt=""/></div>
                        <span className="sale_modal">
                            <div>موجودی: 
                            <NumberFormat value={li.amount} displayType={'text'} thousandSeparator={true}  renderText={value => <div className="sale_modal">{value} ریال </div>}/>
                            </div>
                        </span>
                        
                         </span>                       
                        : 
                        <span className="asset_list_part_amount">
                          <NumberFormat value={li.amount} displayType={'text'} thousandSeparator={true}  renderText={value => <div>{value} ریال  
                          <span className="sale_modal">
                            <Salemodal
                              mainId={li.id}
                              mainName={li.name}
                              sendData={this.handleSendData}
                            /></span>
                          </div>} />
                           
                        </span>
                        
                        }
                        
                        </ListGroupItem>                   
                    })}
            </div>
        )
    }
}

export default AssetList;