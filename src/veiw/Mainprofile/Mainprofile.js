import React from 'react';
import  { API } from './../../Services/Config.js';
import profile from './../../assets/icons/profile2.png'
import { ListGroup, ListGroupItem , FormGroup, Row, Col, Button} from 'reactstrap';
import { AvForm, AvField, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { HandleChange } from './../../share/Utility';
import { checkStorageId } from './../../share/Utility';
import axios from 'axios';
import { withRouter } from "react-router-dom";

import './Mainprofile.css';

//components
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import MainDate from './../../components/mainDatePicker/MainDate';
import Maindrop from './../../components/Maindrop/Maindrop';

class Mainprofile extends React.Component {
    
    constructor(props){
        super();
        this.state={
            inputName:'',
            inputFamily:'',
            inputSource:'',
            inputYear:'',
            inputMonth:'',
            radioYear:'',
            radioMonth:'',
            show: true
        }
    }


  

      handleModalData = modalData => {
         this.setState({
            inputSource: modalData
         })
      }

      click = () => {

        checkStorageId()
        let userId = checkStorageId()  


     


        if(this.state.inputName 
          && this.state.inputFamily
          && this.state.inputSource) {
            
            var bodyFormData = new FormData();
            
            bodyFormData.append('name', this.state.inputName);
            bodyFormData.append('last_name', this.state.inputFamily);
            bodyFormData.append('leadership_legalID', this.state.inputSource.value );
            bodyFormData.append('user_id', userId );


            axios({
              method: 'post',     //put
              url: `${API}profile/create`,
              headers:{
                 'Content-Type':'multipart/form-data'
              },
              data: bodyFormData,
              }
              ).then(res => 
                  console.log(res)
            ).catch(err => console.log(err))

             this.props.history.push('/Defaultpage')
              
          }

        if(!this.state.inputSource) {
          this.setState({
            show: false
          })
        }
        }
   
    
    render() {
        return (
            <div className="profile_page">
            <Header />
            <div className="profile_list">
                    <ListGroup className="profile_list_group">
                        <ListGroupItem className="profile_list_group_item title">
                            <img src={profile} height={40} alt=""/><span className="title_list">اطلاعات عمومی</span>
                        </ListGroupItem>
                        <ListGroupItem className="profile_list_group_item ">
                           <span className="title_rprofile">نام : </span>
                             
                           <FormGroup >
                                    <AvForm  onChange={(e) => HandleChange.call(this, e)} >
                                      <AvField 
                                       name="inputName"
                                    //    label="شرح" 
                                       type="text" 
                                       value={this.state.inputName}                                         
                                       errorMessage="نام را وارد کنید" 
                                       validate={{
                                                  required: {value: true},
                                                  // pattern: {value: '^[A-Za-z0-9پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّs]+$'}, 
                                                }} />
                                    </AvForm>
                            </FormGroup>

                        </ListGroupItem>
                        <ListGroupItem className="profile_list_group_item even-child">
                          <span className="title_partt">نام خانوادگی : </span>

                          <FormGroup >
                                    <AvForm  onChange={(e) => HandleChange.call(this, e)} >
                                      <AvField 
                                       name="inputFamily"
                                   
                                       type="text" 
                                       value={this.state.inputFamily}                                         
                                       errorMessage="نام خانوادگی را وارد کنید" 
                                       validate={{
                                                  required: {value: true},
                                                  // pattern: {value: '^[A-Za-z0-9پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّs]+$'}, 
                                                }} />
                                    </AvForm>
                            </FormGroup>

                        </ListGroupItem>
                        <ListGroupItem className="profile_list_group_item ">
                           <span className="title_partt"> انتخاب مرجع تقلید : </span>
                           <div>
                             <Maindrop
                             empShow={this.state.show}
                            onGetData={this.handleModalData}
                            /></div>
                        </ListGroupItem>

                        <ListGroupItem className="profile_list_group_item even-child">
                        <span className="title_partt"> سال خمسی : </span>

                        <Row>
                                <Col>
                                   
                                  <FormGroup className="form_base_part">
                                    <AvForm  onChange={(e) => HandleChange.call(this, e)} >
                                      <AvField 
                                       name="inputYear"
                                       label="سال" 
                                       type="number" 
                                       value={this.state.inputYear}                                         
                                       errorMessage="سال را وارد کنید" 
                                       validate={{
                                                  required: {value: true},
                                                  // pattern: {value: '^[A-Za-z0-9پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّs]+$'}, 
                                                }} />
                                    </AvForm>
                                  </FormGroup>
                                   
                              </Col>
                              <Col>
                                
                          
                                  <FormGroup className="form_base_part">
                                    <AvForm onChange={(e) => HandleChange.call(this, e)}>
                                    
                                     
                                      <AvField 
                                       name="inputMonth"
                                       label="ماه" 
                                       type="number" 
                                       value={this.state.inputMonth}                                            
                                       errorMessage="ماه را وارد کنید" 
                                       validate={{
                                                  number: true,
                                                  required: {value: true, errorMessage:"شماره حساب را وارد کنید"},
                                                  pattern: {value: '^[۱۲۳۴۵۶۷۸۹۰0-9]+$'},                                                
                                                }} /> 


                                  </AvForm> 
                                 </FormGroup>       
                                 </Col>

                                
                                 </Row>
                                 <Row>
                                 <AvForm onChange={(e) => HandleChange.call(this, e)}>
                                  <AvRadioGroup inline name="radioExample2"  >
                                  <span className="title_partt"> پرداخت : </span>
                                   <AvRadio  label="سال" value="radioYear"  />
                                   <AvRadio label="ماه" value="radioMonth" />
          
                                  </AvRadioGroup>
                                 </AvForm>
                                 </Row>
                                   </ListGroupItem>
                                            
                       
                      

                    </ListGroup>
                    <Button color="primary" className="register_btn" onClick={this.click}>ثبت اطلاعات </Button>
                    </div>
                    <Footer />
            </div>

        )
    }
}

export default withRouter(Mainprofile);