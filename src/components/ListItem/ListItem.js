import React from 'react';
import {  ListGroupItem, Button , Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';


import bankAccount from './../../assets/icons/secondIcons/bankAccount.png'

//css
import './ListItem.css'

class ListItem extends React.Component {

    constructor(props) {
        super(props);    
        this.state = {
          show : true,
          listtest : ["melk","banking", "money"]
        };  
      }

      btnClick = () => {
          this.setState({ show: !this.state.show });
      }

    render() {
        return (

            <div >          
                    <ListGroupItem className="income_list_group_item header">
                        <img src={bankAccount} alt=""/> حساب های بانکی  
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

                    {this.state.listtest.map(li => {            
                      return   <ListGroupItem key={li} className="income_list_group_item">{li}</ListGroupItem>                   
                    })}

            </div>
        )
    }
}

export default ListItem;