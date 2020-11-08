import React from 'react';




import axios from 'axios';
import  { API } from './../../Services/Config.js';
import './../Register/Register.css';
import { Button } from 'reactstrap';
import NumberFormat from 'react-number-format';


import daryan from './../../assets/img/daryan.png';
import center from './../../assets/img/center.png'
import { withRouter } from "react-router-dom";


class Signout extends React.Component {
    constructor() {
        super()
        this.state={
            empty: true
        }
    }
   render() {
       return (
           <div>
               <div className="main_Reg"> 
                <div className="register_first d-flex justify-content-center"> 
               
                 
                  <div className="register_second d-flex mt-auto">
                      
                      <img className="reg_sec_img" height={130} src={daryan} alt=""/>
                  </div> 
                </div>

               
                <div className="first_input d-flex justify-content-center ">                   
                <NumberFormat className={this.state.empty?'empty_text': 'full_text'} dir="ltr" name="inputPhone" value={this.state.inputPhone} onChange={this.handleChange}  displayType="input" format="09#########" allowEmptyFormatting mask="*"/>
                </div>

                <div  className="first_btn d-flex justify-content-center ">
                    <Button  color="success" style={{ width: "50%", backgroundColor: "#20bf6b", fontSize:"15px"}}>تایید</Button>
                </div>

                <div  className="second_btn d-flex justify-content-center ">
                    <Button   style={{ width: "50%", backgroundColor: "white", border: "1px solid #07b0c3" , color:"#07b0c3", fontSize:"12px"}}> ثبت نام</Button>
                </div>
  
            </div>
           </div>
       )
   }
}

export default Signout;