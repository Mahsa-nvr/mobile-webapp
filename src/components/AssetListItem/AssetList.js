import React from 'react';
import axios from 'axios';
import './AssetList.css'
import {API} from './../../Services/Config';
import { HandleChange , handlePriceChange } from './../../share/Utility';
import {  ListGroupItem, Button , Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
// import {InputList} from './../../share/InputList'


//import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import home from './../../assets/icons/secondIcons/home.png';
import car from './../../assets/icons/secondIcons/car.png';
import credit from './../../assets/icons/secondIcons/credit.png';

class AssetList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalAsset: [],
            show: false,
            inputName: '',
            inputAmount:'',
            inputDate: 2222-56-23
        }
    }

    componentDidMount() {
        axios.get(`${API}income/index`, {
            params: {
                user_id : 1,
                type: 2
            }
           }
          ).then(res => {
          this.setState({ 
            totalAsset : [...res.data.data]
          })
          }).catch(err => {
            console.log(err)
          })
    }

    btnClick = () => {
        this.setState({ 
          show : !this.state.show
        });
    }
//post api in asset page and recive update get method immediatly
    send = async (props) => {

      var bodyFormData = new FormData();
      bodyFormData.append('amount', this.state.inputAmount);
      bodyFormData.append('name', this.state.inputName);
      bodyFormData.append('categoryID', this.props.catId);
      bodyFormData.append('date', this.state.inputDate );
      bodyFormData.append('userID', 1 );

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
            console.log(res));
        }
        catch(err){
          console.log('errrr')
        }

        await axios.get(`${API}income/index`, {
          params: {
              user_id : 1,
              type: 2
          }
        }
        ).then(res => {
          this.setState({ 
            totalAsset : [...res.data.data],

        })
        
        }).catch(err => {
        console.log(err)
        })

        this.setState({
          show: false,
          inputName: '',
          inputAmount:'',
        })

    }


    

    render() {
     let iconn = null;
     switch (this.props.catId) {

       case 3:
         iconn = home;
         break;

       case 4:
        iconn = car;
        break;

      case 5:
        iconn = <div></div>
        break;

      case 6:
        iconn = credit;
        break;

        default:
          iconn = null;
          break;
     }


        return(
          
            <div>
             
            <ListGroupItem className="asset_list_group header">
              { this.props.catId === 5 ?
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
                                       label="نام" 
                                       type="text" 
                                       value={this.state.inputName}                                         
                                       errorMessage="نام را وارد کنید" 
                                       validate={{
                                                  required: {value: true},
                                                  pattern: {value: '^[A-Za-z0-9پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّs]+$'}, 
                                                }} />
                                    </AvForm>
                                  </FormGroup>
                                   
                              </Col>
                              <Col>
                                
                              {this.props.catId === 6 ? 
                                  <FormGroup className="form_base_part">
                                    <AvForm onChange={(e) => handlePriceChange.call(this, e)}>
                                    
                                     
                                      <AvField 
                                       name="inputAmount"
                                       label="شماره حساب" 
                                       type="text" 
                                       value={this.state.inputAmount}                                            
                                       errorMessage="شماره حساب را وارد کنید" 
                                       validate={{
                                                  number: true,
                                                  required: {value: true, errorMessage:"شماره حساب را وارد کنید"},
                                                  pattern: {value: '^[0-9]+$'},                                                
                                                }} /> 
                                              
                              
                                    </AvForm>                                   
                                       </FormGroup> : 
                                       <FormGroup className="form_base_part">
                                       <AvForm onChange={(e) => handlePriceChange.call(this, e)}>
                                       
                                        
                                         <AvField 
                                          name="inputAmount"
                                          label="قیمت " 
                                          type="text" 
                                          value={this.state.inputAmount}                                            
                                          errorMessage="قیمت را وارد کنید" 
                                          validate={{
                                                     number: true,
                                                     required: {value: true, errorMessage:"قیمت را وارد کنید"},
                                                     pattern: {value: '^[0-9]+$'},                                                
                                                   }} /> 
                                                 
                                 
                                       </AvForm>                                   
                                          </FormGroup>
                                       
                                       
                                       }
                                       
                                      
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                     <Form>
                                       <FormGroup className="form_base_part">
                                         <Label for="">تاریخ</Label>
                                         <div className="date_picker">
                                            
                                       
                                         </div>
                                         <Input type="date" 
                                                bsSize="sm" 
                                                name="inputDate" 
                                                value={this.state.inputDate} 
                                                onChange={(e) => HandleChange.call(this, e)}  
                                                />
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
                        if(li.category_name === this.props.mainTitle )            
                      return <ListGroupItem key={li.id} className="asset_list_part">
                        {li.name}
                         {li.category_name === 'حساب بانکی' ?
                        <span className="asset_list_part_amount">  {li.amount} <div className="credit_icon"><img src={iconn} alt=""/></div> </span>
                        : 
                        <span className="asset_list_part_amount">{li.amount}</span>
                        }
                        </ListGroupItem>                   
                    })}
            </div>
        )
    }
}

export default AssetList;