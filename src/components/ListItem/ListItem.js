/* eslint-disable array-callback-return */
import React from 'react';
import axios from 'axios';
import { HandleChange , handlePriceChange } from './../../share/Utility';
import {  ListGroupItem, Button , Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';


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
          show : false,
          listtest : ["melk","banking", "money"],
          totalIncome: []
        };
      }

      UNSAFE_componentWillUpdate() {
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
      })}



      btnClick = () => {
          this.setState({ show: !this.state.show });
      }

      send = (props) => {
        console.log(this.state.inputDate)
      // if(this.state.inputName !== null && this.state.inputDate !== null && this.state.inputAmount !== null) {
      //   alert('true')
      // }else{
      //   alert('false')
      // }

      
        var bodyFormData = new FormData();
        bodyFormData.append('amount', this.state.inputAmount);
        bodyFormData.append('name', this.state.inputName);
        bodyFormData.append('categoryID', this.props.catId);
        bodyFormData.append('date', this.state.inputDate );
        bodyFormData.append('userID', 1 );
        axios({
          method: 'post',     //put
          url: `${API}income/create`,
          // headers: {'Authorization': 'Bearer'+token}, 
          headers:{
            'Content-Type':'multipart/form-data'
          },
          data: bodyFormData,
        }).then(res => console.log(res));
      
      }

     
      

    render() { 
        return ( 
            <div > 
                      
                    <ListGroupItem className="income_list_group_item header">
                      
                        <img src={bankAccount} alt=""/> {this.props.mainTitle}
                        <div className="base_list_btn">
                          <Button onClick={this.btnClick} className="list_btn">+</Button>
                        </div>
                    </ListGroupItem>

                       {this.state.show  ? <div className="list_base_show">
                          
                               <Row >
                                   <Col>
                                       <Form>
                                          <FormGroup className="form_base_part">
                                            <Label for="">نام</Label>
                                            <Input type="text"
                                                   bsSize="sm" 
                                                   name="inputName" 
                                                   value={this.state.inputName} 
                                                   onChange={(e) => HandleChange.call(this, e)} 
                                                    />
                                          </FormGroup>
                                        </Form>
                                   </Col>
                                   <Col>
                                        <Form>
                                          <FormGroup className="form_base_part">
                                            <Label for="">قیمت</Label>
                                            <Input type="text"
                                                   bsSize="sm"
                                                   name="inputAmount"
                                                   value={this.state.inputAmount} 
                                                   onChange={(e) => handlePriceChange.call(this, e)}
                                                   />
                                          </FormGroup>
                                        </Form>
                                   </Col>
                               </Row>
                               <Row>
                                   <Col>
                                        <Form>
                                          <FormGroup className="form_base_part">
                                            <Label for="">تاریخ</Label>
                                            <div className="date_picker">
                                            {/* <MainDatePicker testDate={this.props.testDate} /> */}
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
                             
                       </div>: null}

                  {this.state.totalIncome.length > 0 ? this.state.totalIncome.map(li => {
                 
                        if(li.category_name === this.props.mainTitle )            
                      return <ListGroupItem key={li.id} className="income_list_part">
                        {li.name}
                        <span className="income_list_part_amount">{li.amount}</span>
                        </ListGroupItem>                   
                    }): null}
 
            </div> 
        )
    }
}

export default ListItem;