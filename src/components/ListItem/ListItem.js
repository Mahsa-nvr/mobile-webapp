/* eslint-disable array-callback-return */
import React from 'react';
import axios from 'axios';
import {  ListGroupItem, Button , Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';


import bankAccount from './../../assets/icons/secondIcons/bankAccount.png'
import {API} from './../../Services/Config';
//css
import './ListItem.css'

class ListItem extends React.Component {

    constructor(props) {
        super(props);    
        this.state = {
          show : false,
          listtest : ["melk","banking", "money"],
          totalIncome: []
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
            totalIncome : res.data.data  
        })
      }).catch(err => {
          console.log(err)
      })}



      btnClick = () => {
          this.setState({ show: !this.state.show });
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

                       {this.state.show ? <div className="list_base_show">
                          
                               <Row >
                                   <Col>
                                       <Form>
                                          <FormGroup className="form_base_part">
                                            <Label for="">نام</Label>
                                            <Input type="text" bsSize="sm" name="categoryName" id="categoryName"  />
                                          </FormGroup>
                                        </Form>
                                   </Col>
                                   <Col>
                                        <Form>
                                          <FormGroup className="form_base_part">
                                            <Label for="">قیمت</Label>
                                            <Input type="number" bsSize="sm" name="price" id="price"  />
                                          </FormGroup>
                                        </Form>
                                   </Col>
                               </Row>
                               <Row>
                                   <Col>
                                        <Form>
                                          <FormGroup className="form_base_part">
                                            <Label for="">تاریخ</Label>
                                            <Input type="date" bsSize="sm" name="date" id="date"  />
                                          </FormGroup>
                                        </Form>
                                   </Col>
                                   <Col><Button color="primary"> </Button></Col>
                               </Row> 
                             
                       </div>: null}

                
                    {this.state.totalIncome.map(li => {
                        if(li.category_name === this.props.mainTitle)            
                      return <ListGroupItem key={li.id} className="income_list_group_item">{li.name}</ListGroupItem>                   
                    })}

            </div>
        )
    }
}

export default ListItem;