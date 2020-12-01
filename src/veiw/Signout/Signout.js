import React from 'react';
import axios from 'axios';
import  { API } from './../../Services/Config.js';
import './../Register/Register.css';
import { Button } from 'reactstrap';
import NumberFormat from 'react-number-format';


import daryan from './../../assets/img/daryan.png';
import { withRouter } from "react-router-dom";


class Signout extends React.Component {
    constructor() {
        super()
        this.state={
            empty: false,
            phoneSignout: '',
            show: false
        }
    }
    handleChange=(event) => {
        const {name, value } = event.target;
        this.setState({
            [name] : value,
            empty: false,
            show: false
        })
        }


    signout = () => {
     

        if(this.state.phoneSignout) {
            const test = this.state.phoneSignout
            var arr=test.split('');
            var arr2= arr.includes('*')
            if (!arr2 ) {
                
                var bodyFormData = new FormData();
               
                bodyFormData.append('username', this.state.phoneSignout);
               
               axios({
                   method: 'post',
                   url: `${API}user/signup`,
                   headers: {
                    'Content-Type':'multipart/form-data'
                   },
                   data: bodyFormData,
               }
               ).then(res => {
                if(res.data.status !== false) {
                
                 const{ id , username } = res.data.data
                 localStorage.setItem("User_Id", id )
                 localStorage.setItem("inputPhone", username )
                 this.props.history.push('/register/profile')
                }else{
                   this.setState({
                       show: true
                   })
                }
               }).then(err => console.log(err))

                 }else{
                    this.setState({
                    empty: true
                  })
                 }
    
               }else {
                 this.setState({
                  empty: true
                 })
        }
    }

   render() {
       console.log(this.state.show)
       return (
           <div>
               <div className="main_Reg"> 
                <div className="register_first d-flex justify-content-center"> 
               
                 
                  <div className="register_second d-flex mt-auto">
                      
                      <img className="reg_sec_img" height={130} src={daryan} alt=""/>
                  </div> 
                </div>

               
                <div className="first_input d-flex justify-content-center ">                   
                <div className={this.state.show ? "hilo" : "hilo2"}> شماره وارد شده تکراری است </div>
                
                <NumberFormat
                 className={this.state.empty?'empty_text': 'full_text'} 
                 dir="ltr" 
                 name="phoneSignout" 
                 value={this.state.phoneSignout}
                 onChange={this.handleChange}  
                 displayType="input" 
                 format="09#########" 
                 allowEmptyFormatting mask="*"/>
                </div>

                <div  className="first_btn d-flex justify-content-center ">
                    <Button onClick={this.signout} color="primary" style={{ width: "50%", fontSize:"15px"}}>ثبت</Button>
                </div>

              
            </div>
           </div>
       )
   }
}

export default withRouter(Signout);