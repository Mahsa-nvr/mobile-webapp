/* eslint-disable array-callback-return */
import React from 'react';
import axios from 'axios';
import { HandleChange , handlePriceChange } from './../../share/Utility';
import {  ListGroupItem, Button , Row, Col, Form, FormGroup, Label} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import NumberFormat from 'react-number-format';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars , faMoneyCheck , faGift } from '@fortawesome/free-solid-svg-icons';
// import {Animated} from "react-animated-css";

import {API} from './../../Services/Config';
//css
import './ListItem.css';

//components
import MainDate from './../mainDatePicker/MainDate';


class ListItem extends React.Component {

    constructor(props) {
        super(props);    
        this.state = {
          inputName: "",
          inputAmount: "",
          inputDate: "",
          isVisible : false,
          show: false,
          totalIncome: [],
          totalAmount: '',         
        };
       
      }

     componentDidMount() {
       const { onGetData } = this.props
          axios.get(`${API}income/index`, {
            params: {
                user_id : 1,
                type: 1
            }
           }
          ).then(res => {
            
          this.setState({ 
            totalIncome : [...res.data.data],
            totalAmount: res.data.sum
          })
          
          onGetData(this.state.totalAmount)
          }).catch(err => {
            console.log(err)
          })
       }



      btnClick = () => {
          this.setState({ 
            isVisible: !this.state.isVisible,
            show : !this.state.show
          });
      }

      send = async (props) => {
        const { onGetData } = this.props
     
      
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
              type: 1
          }
        }
        ).then(res => {
          this.setState({ 
          totalIncome : [...res.data.data],
          totalAmount: res.data.sum
        })
        onGetData(this.state.totalAmount)
        
        }).catch(err => {
        console.log(err)
        })

        this.setState({
          inputName: "",
          inputAmount: "",
          show: false
        })
      }

      handleGetFormatDate = formatDate => {
        this.setState({inputDate:formatDate})
      }
  
      

    render() { 
     
 
      let iconList;
      switch (this.props.mainTitle) {

        case 'حقوق' : 
        iconList = <FontAwesomeIcon icon={faMoneyCheck} />
          break;

        case 'هدیه': 
        iconList = <FontAwesomeIcon icon={faGift} />
          break;

        case 'سایر':
        iconList = <FontAwesomeIcon icon={faBars} />
          break;

          default:
            iconList = null
      }
     
        return (      
            <div>                      
                  <ListGroupItem className="asset_list_title">                     
                  <div className="asset_list_img">{iconList}</div> 
                        
                        {this.props.mainTitle}
                        <div className="base_list_btnn">
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
                                                    //  pattern: {value: '^[A-Za-z0-9پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّs]+$'}, 
                                                   }} />
                                       </AvForm>
                              
                                       {/* <NumberFormat  dir="rtl"   displayType="input"  thousandSeparator={true}/> */}
                                     </FormGroup>
                                       
                                 </Col>
                                 <Col>
                                  
                                     <FormGroup className="form_base_part">
                                       <AvForm onChange={(e) => handlePriceChange.call(this, e)}>
                                       
                                         <AvField 
                                          name="inputAmount"
                                          isNumericString={true} 
                                          label="قیمت" 
                                          type="number" 
                                          value={this.state.inputAmount}                                            
                                          errorMessage="قیمت را وارد کنید" 
                                          validate={{
                                                     number: true,
                                                     required: {value: true, errorMessage:"قیمت را وارد کنید"},
                                                    //  pattern: {value: '^[۱۲۳۴۵۶۷۸۹۰0-9]+$'},                                                
                                                   }} />
                                         
                                
                                       </AvForm>                                   
                                          </FormGroup>
                                        
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
                                         
                                          </FormGroup>
                                        </Form>
                                   </Col>
                                   <Col>
                                     <div className="form_part_send_btn">
                                     <Button className="send_btn"  color="primary" onClick={this.send}> ارسال</Button>
                                     </div>
                                     </Col>
                               </Row> 
                             
                           </div>
                     
                            : null}
                        
                      
                {this.state.totalIncome.map(li => { 
                        if(li.category_name === this.props.mainTitle )            
                      return <ListGroupItem key={li.id} className="income_list_part">
                        {li.name}
                        <span className="income_list_part_amount">
                        <NumberFormat value={li.amount} displayType={'text'} thousandSeparator={true}  renderText={value => <div>{value} ریال</div>} />
                        </span>
                        {/* <span className="income_list_part_amount">{li.amount} ریال</span> */}
                        </ListGroupItem>                   
                    })}
 
            </div> 
        )
    }
}

export default ListItem;