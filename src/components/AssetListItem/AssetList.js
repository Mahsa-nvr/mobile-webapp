import React from 'react';
import axios from 'axios';
import './AssetList.css'
import {API} from './../../Services/Config';
import { HandleChange , handlePriceChange } from './../../share/Utility';
import {  ListGroupItem, Button , Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
// import {InputList} from './../../share/InputList'


//import icon
import home from './../../assets/icons/secondIcons/home.png';
import car from './../../assets/icons/secondIcons/car.png';

class AssetList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalAsset: [],
            show: false,
            inputName: '',
            inputAmount:'',

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
          isVisible: !this.state.isVisible,
          show : !this.state.show
        });
    }


    

    render() {
       console.log(this.state.totalAsset)
      
        return(
            <div>
            <ListGroupItem className="asset_list_group header">
             <div className="asset_list_img"><img src={home} alt=""/></div>{this.props.mainTitle}
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
            

               {this.state.totalAsset.map(li => { 
                        if(li.category_name === this.props.mainTitle )            
                      return <ListGroupItem key={li.id} className="asset_list_part">
                        {li.name}
                        <span className="asset_list_part_amount">{li.amount}</span>
                        </ListGroupItem>                   
                    })}
            </div>
        )
    }
}

export default AssetList;