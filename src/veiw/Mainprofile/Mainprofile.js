import React from 'react';
import  { API } from './../../Services/Config.js';
import profile from './../../assets/icons/profile2.png'
import { ListGroup, ListGroupItem , Input,  Form, FormGroup, Label} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { HandleChange } from './../../share/Utility';
import { checkStorageId } from './../../share/Utility';
import axios from 'axios';

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
            inputDate:''
        }
    }


    handleGetFormatDate = formatDate => {
        this.setState({inputDate:formatDate})
      }

      handleModalData = modalData => {
          console.log(modalData)
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
                        <ListGroupItem className="profile_list_group_item">
                           {/* <span className="title_partt">سال خمسی : </span> */}
                              <Form>
                                 <FormGroup >
                                   <div>
                                   <MainDate onGetDate={this.handleGetFormatDate}/>
                                  </div>
                                 </FormGroup>
                              </Form>
                        </ListGroupItem>
                       
                       
                        <ListGroupItem className="profile_list_group_item even-child">
                           <span className="title_partt"> انتخاب مرجع تقلید : </span>
                           <div><Maindrop onGetData={this.handleModalData}/></div>
                        </ListGroupItem>

                    </ListGroup>
                    </div>
                    <Footer />
            </div>

        )
    }
}

export default Mainprofile;