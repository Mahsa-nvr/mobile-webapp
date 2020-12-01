import React from 'react';
import {  ListGroupItem, Button , Row, Col, Form, FormGroup, Label} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from 'axios';
import {API} from './../../Services/Config';
import { HandleChange , handlePriceChange } from './../../share/Utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faCoffee, faBars , faBiking , faTshirt, faHeart } from '@fortawesome/free-solid-svg-icons';
import NumberFormat from 'react-number-format';

//faHome ejare
//faBiking tafrih
//faTshirt pooshak
//salamat faHeart
import './SpendList.css';

//components
import DropDownInput from './../DropDown/DropDownInput';
import MainDate from './../mainDatePicker/MainDate';

import { checkStorageId } from './../../share/Utility';

class SpendList extends React.Component {

    constructor(props){
        super();
        this.state = {
            inputName: "",
            inputAmount: "",
            inputDate: "" ,
            totalSpend: [],
            inputDropDown:'',
            sumAmount: 0,
            show: false,
            emptyDrop: true,
            showAmountdiv: false,
            emptyPrice: false
        }
    }

    componentDidMount(){


      checkStorageId()
        let userId = checkStorageId()  

      const { onGetData } = this.props;
        axios.get(`${API}expenditures/index`, {
            params: {
                user_id : userId        
            }
           }
          ).then(res => {
          this.setState({
            totalSpend :[...res.data.data],
            sumAmount: res.data.sum
        })
        onGetData(this.state.sumAmount);
        
          }).catch(err => {
            console.log(err)
          })
    }

    btnClick = () => {
        this.setState({ 
          show : !this.state.show,
          showAmountdiv : false,
          inputName: "",
          inputAmount: "",
          emptyPrice: false
        });
    }

    handleGetData = data => {
      console.log('get data from dropdown to spend page', data)
         this.setState({inputDropDown:data})   
    }

    handleGetFormatDate = formatDate => {
      this.setState({inputDate:formatDate})
    }

    send = async(props) => {

      checkStorageId()
      let userId = checkStorageId()  


      const value = this.state.inputAmount   
      const price = value.replace(/,/g, "");

      const { onGetData } = this.props;

     if(this.state.inputAmount && this.state.inputName
       && this.state.inputDate && this.props.catId ) {

        

      var bodyFormData = new FormData();
      bodyFormData.append('amount', price);
      bodyFormData.append('name', this.state.inputName);
      bodyFormData.append('incomeCategoryID', this.state.inputDropDown.value);
      bodyFormData.append('date', this.state.inputDate );
      bodyFormData.append('expendituresCategoryID', this.props.catId);
      bodyFormData.append('userID', userId );

      try {
        await axios({
        method: 'post',     //put
        url: `${API}expenditures/create`,
        headers:{
           'Content-Type':'multipart/form-data'
        },
        data: bodyFormData,
        }
        ).then(res => {
            console.log(res.data.type)
            if(res.data.type == 1){
              this.setState({show : true, showAmountdiv: true})
            }else {
              this.setState({show: false})
            }
        });
        }
        catch(err){
          console.log('errrr')
        }

     

       await axios.get(`${API}expenditures/index`, {
          params: {
              user_id : userId        
          }
         }
        ).then(res => {
        this.setState({
          totalSpend :[...res.data.data],
          sumAmount: res.data.sum,
          emptyDrop: true,
          // show : false
      })
      onGetData(this.state.sumAmount);
        }).catch(err => {
          console.log(err)
        })

      }else {
        this.setState({
          emptyDrop : false, 
          emptyPrice: true
        })
      }

     
    }

    handleAmountChange = (e) => {
      const {name, value } = e.target;
      this.setState({
          [name] : value,
          emptyPrice : false
      })
    }

    render() {
      let iconList;
      switch (this.props.mainTitle) {

        case 'اجاره' : 
        iconList = <FontAwesomeIcon icon={faHome} />
          break;

        case 'خوراک': 
        iconList = <FontAwesomeIcon icon={faCoffee} />
          break;

        case 'پوشاک':
        iconList = <FontAwesomeIcon icon={faTshirt} />
          break;

        case 'سلامت':
        iconList = <FontAwesomeIcon icon={faHeart} />
          break;

        case 'تفریح': 
        iconList = <FontAwesomeIcon icon={faBiking} />
          break;

        case 'سایر':
        iconList = <FontAwesomeIcon icon={faBars} />
          break;
          default:
            iconList = null
      }
     


        return (
            <div>
           
                  <ListGroupItem className="spend_list_group header">
                      <div className="asset_list_img">{iconList}</div>
                      
                      {this.props.mainTitle}
                      
                      <div className="base_list_btn">
                        <Button onClick={this.btnClick} className="list_btn">+</Button>
                      </div>

                 </ListGroupItem>

                 {this.state.show ? 
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
                             
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                           <Form>
                             <FormGroup className="form_base_part">
                               <Label for="">تاریخ</Label>
                               <div >
                                  <MainDate onGetDate={this.handleGetFormatDate}/>
                             
                               </div>
                               {/* <Input type="text" 
                                      bsSize="sm" 
                                      width="50px"
                                      name="inputDate" 
                                      value={this.state.inputDate} 
                                      onChange={(e) => HandleChange.call(this, e)}  
                                      /> */}
                             </FormGroup>
                           </Form>
                      </Col>
                      <Col>
                         <div className="title_input_spend">منبع دارایی </div> 
                          <div className="drop">
                            <DropDownInput onGetData={this.handleGetData} emptyDrop={this.state.emptyDrop} /></div>                      
                        </Col>
                  </Row> 
                  <Row>
                        {this.state.showAmountdiv ? <div className="payment_account">موجودی حساب شما کافی نیست</div> : null }
                        <Button className="send_btn_spend"  color="primary" onClick={this.send}> ارسال</Button>
                  </Row>
                
              </div>
                 
                 : null }

                 {this.state.totalSpend.map(li => {
                     if(parseInt(li.category_id) === this.props.catId) 
                     return <ListGroupItem  key={li.id} className="spend_list_part">
                         {li.name}
                         <span className="asset_list_part_amount">
                         <NumberFormat value={li.amount} displayType={'text'} thousandSeparator={true}  renderText={value => <div>{value} ریال</div>} />
                           </span>
                         </ListGroupItem>
                 }  )}

{/* {this.state.totalSpend.map(li => {
                     if(parseInt(li.category_id) === this.props.catId) {

                     return <(ListGroupItem  key={li.id} className="spend_list_part">
                         {li.name}
                         <span className="asset_list_part_amount">{li.amount}</span>
                         </>)
                     }else{return(<React.Fragment></React.Fragment>)}
                 }  )}} */}
        

            </div>
        )
    }
}

export default SpendList;