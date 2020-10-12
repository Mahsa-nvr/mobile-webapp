import React from 'react';
import {  ListGroupItem, Button , Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from 'axios';
import {API} from './../../Services/Config';
import { HandleChange , handlePriceChange } from './../../share/Utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './SpendList.css';

//components
import DropDownInput from './../DropDown/DropDownInput';

class SpendList extends React.Component {

    constructor(props){
        super();
        this.state = {
            inputName: "",
            inputAmount: "",
            inputDate: '',
            totalSpend: [],
            show: false
        }
    }

    componentDidMount(){
        axios.get(`${API}expenditures/index`, {
            params: {
                user_id : 1         
            }
           }
          ).then(res => {
          this.setState({
            totalSpend :[...res.data]
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

    render() {
      
        return (
            <div>
           
                  <ListGroupItem className="spend_list_group header">
                      <div className="asset_list_img"><FontAwesomeIcon icon={faBars} /></div>
                      
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
                               <Input type="text" 
                                      bsSize="sm" 
                                      width="50px"
                                      name="inputDate" 
                                      value={this.state.inputDate} 
                                      onChange={(e) => HandleChange.call(this, e)}  
                                      />
                             </FormGroup>
                           </Form>
                      </Col>
                      <Col>
                         <div className="title_input_spend">نوع هزینه</div>
                          <div className="drop"><DropDownInput /></div>                      
                        </Col>
                  </Row> 
                  <Row>
                        <Button className="send_btn_spend" color="primary" onClick={this.send}> ارسال</Button>
                  </Row>
                
              </div>
                 
                 : null }

                 {this.state.totalSpend.map(li => {
                     if(parseInt(li.category_id) === this.props.catId) 
                     return <ListGroupItem  key={li.id} className="spend_list_part">
                         {li.name}
                         <span className="asset_list_part_amount">{li.amount}</span>
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