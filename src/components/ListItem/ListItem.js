/* eslint-disable array-callback-return */
import React from 'react';
import axios from 'axios';
import { HandleChange , handlePriceChange } from './../../share/Utility';
import {  ListGroupItem, Button , Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

// import {Animated} from "react-animated-css";

import bankAccount from './../../assets/icons/secondIcons/bankAccount.png'
import {API} from './../../Services/Config';
//css
import './ListItem.css';

//components
// import MainDatePicker from './../../share/MainDatePicker';

class ListItem extends React.Component {

    constructor(props) {
        super(props);    
        this.state = {
          inputName: "",
          inputAmount: "",
          inputDate: 2222-56-23,
          isVisible : false,
          show: false,
          totalIncome: [],
          totalAmount: '',
          testarr : [1,2,3,4]

        };
       
      }

     componentDidMount() {
          axios.get(`${API}income/index`, {
            params: {
                user_id : 1,
                type: 1
            }
          }
      ).then(res => {
          this.setState({ 
            totalIncome : [...res.data.data]
        })
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
        console.log(this.state.inputDate)
     
      
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

        })
        
        }).catch(err => {
        console.log(err)
        })
      }

     
      

    render() { 
        return (      
            <div>                      
                  <ListGroupItem className="income_list_group_item header">                     
                        <img src={bankAccount} alt=""/> {this.props.mainTitle}
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
                                  
                                     <FormGroup className="form_base_part">
                                       <AvForm onChange={(e) => handlePriceChange.call(this, e)}>
                                       
                                         <AvField 
                                          name="inputAmount"
                                          label="قیمت" 
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
                        
                      
                {this.state.totalIncome.map(li => { 
                        if(li.category_name === this.props.mainTitle )            
                      return <ListGroupItem key={li.id} className="income_list_part">
                        {li.name}
                        <span className="income_list_part_amount">{li.amount}</span>
                        </ListGroupItem>                   
                    })}
 
            </div> 
        )
    }
}

export default ListItem;