import React from 'react';
import  { API } from './../../Services/Config.js';
import profile from './../../assets/icons/profile2.png'
import { ListGroup, ListGroupItem , FormGroup, Row, Col, Button} from 'reactstrap';
import { AvForm, AvField, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { HandleChange } from './../../share/Utility';
import { checkStorageId } from './../../share/Utility';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import NumberFormat from 'react-number-format';


import './Mainprofile.css';

//components
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
// import MainDate from './../../components/mainDatePicker/MainDate';
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
            show: true,
            emptyKhoms:false,
            selectedOption:''
        }
    }


  

      handleModalData = modalData => {
         this.setState({
            inputSource: modalData
         })
      }

      onValueChange = (event) => {
        this.setState({
          selectedOption: event.target.value
        });
      }

      click = () => {
      //  console.log(this.state.selectedOption, 'select radio')
      if(!this.state.inputYear) {
        this.setState({
          emptyKhoms: true
        })
      }
       let day;
       switch(this.state.selectedOption){
        case 'inputYear': 
         day = 365
         break;

        case 'inputMonth':
         day = 30
          break;
          
          default:
           return null;
      }
       

        checkStorageId()
        let userId = checkStorageId()  
        if(this.state.inputName 
          && this.state.inputFamily
          && this.state.inputSource
          && this.state.inputYear
          && day) {
            
            var bodyFormData = new FormData();
            
            bodyFormData.append('name', this.state.inputName);
            bodyFormData.append('last_name', this.state.inputFamily);
            bodyFormData.append('leadership_legalID', this.state.inputSource.value );
            bodyFormData.append('user_id', userId );
            // bodyFormData.append('last_clearing_mounth', this.state.inputMonth );
            bodyFormData.append('date_khoms', this.state.inputYear );
            bodyFormData.append('clearing_paykhoms', day );


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
              
          }else{
            console.log('empty khoms')
            this.setState({
              emptyKhoms: true
            })
          }

        if(!this.state.inputSource) {
          this.setState({
            show: false,
            emptyKhoms: true
          })
        }
        }

        handleKhomsChange = (e) => {
          const {name, value } = e.target;
          this.setState({
              [name] : value,
              emptyKhoms : false
          })
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
                                   <div>
                                   <div className={this.state.emptyKhoms ? "empty_label_price" : "label_price"}> روز و ماه تسویه خمسی</div>
                                   <NumberFormat 
                                   className={this.state.emptyKhoms ? "input_number_format_emptyamount" : "input_number_format_amount"}
                                   format="##/##" 
                                   placeholder="10/31" 
                                   mask="_"
                                   name="inputYear"
                                   value={this.state.inputYear}
                                   onChange={(e) => this.handleKhomsChange.call(this, e)}
                                   />
                                   <span className={this.state.emptyKhoms ? "state_emptyKhoms" : "state_khoms"}>روز و ماه تسویه خمسی را وارد کنید</span>
                                   </div>
                                  {/* <FormGroup className="form_base_part">
                                    <AvForm  onChange={(e) => HandleChange.call(this, e)} >
                                      <AvField 
                                       placeholder="10/31"
                                       name="inputYear"
                                       label="روز تسویه خمسی" 
                                       type="number" 
                                       value={this.state.inputYear}                                         
                                       errorMessage="روز و ماه تسویه خمسی را وارد کنید" 
                                       validate={{
                                                  required: {value: true,errorMessage:"روز و ماه تسویه خمسی را وارد کنید" },
                                                  pattern: {value: '^([1-9]|[12][0-9]|3[01])$', errorMessage:"روز تسویه خمسی باید عددی بین 1 تا 31 باشد"}, 
                                                }} />
                                    </AvForm>
                                  </FormGroup> */}
                                   
                              </Col>
                              <Col>
                                
                          
                                  {/* <FormGroup className="form_base_part">
                                    <AvForm onChange={(e) => HandleChange.call(this, e)}>
                                    
                                     
                                      <AvField 
                                       name="inputMonth"
                                       label="روز" 
                                       type="number" 
                                       value={this.state.inputMonth}                                            
                                       errorMessage="روز را وارد کنید" 
                                       validate={{
                                                  number: true,
                                                  required: {value: true, errorMessage:" روز را وارد کنید"},
                                                  pattern: {value: '^[۱۲۳۴۵۶۷۸۹۰0-9]+$'},                                                
                                                }} /> 


                                  </AvForm> 
                                 </FormGroup>        */}
                                 </Col>

                                
                                 </Row>
                                 <Row>
                                 <AvForm onChange={(e) => HandleChange.call(this, e)}>
                                  <AvRadioGroup inline name="radioExample2"  >
                                  <span className="title_partt"> پرداخت : </span>
                                   <AvRadio 
                                    label="سال" 
                                    value="inputYear"
                                    checked={this.state.selectedOption === "inputYear"}
                                    onChange={this.onValueChange} 
                                    />
                                   <AvRadio 
                                   label="ماه" 
                                   value="inputMonth"
                                   checked={this.state.selectedOption === "inputMonth"}
                                   onChange={this.onValueChange} 
                                   />
          
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