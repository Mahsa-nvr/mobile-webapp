/* eslint-disable react/react-in-jsx-scope */
import react from 'react';
import {  ListGroupItem, Button , Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { HandleChange , handlePriceChange } from './Utility';

export const InputList = (inputName , inputDate) => {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
           // eslint-disable-next-line react/jsx-no-comment-textnodes
           <div>
           // eslint-disable-next-line react/react-in-jsx-scope
           // eslint-disable-next-line react/react-in-jsx-scope
           // eslint-disable-next-line react/react-in-jsx-scope
           // eslint-disable-next-line react/react-in-jsx-scope
           <div className="list_base_show">
                          
                          <Row >
                              <Col>
                                 
                                <FormGroup className="form_base_part">
                                  <AvForm  onChange={(e) => HandleChange.call(this, e)} >
                                    <AvField 
                                     name="inputName"
                                     label="نام" 
                                     type="text" 
                                     value={inputName}                                         
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
                                              value= "123456"
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
            
            </div>
    )           
}
