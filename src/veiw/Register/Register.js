import React from 'react';
import './Register.css';
import baseReg from './../../assets/img/baseReg.png';
import daryan from './../../assets/img/daryan.png';

class Register extends React.Component {
    render() {
        return (
            <div className="main_Reg"> 
                <div className="register_first d-flex justify-content-center"> 
                  <div className="register_second d-flex mt-auto">
                      <img className="reg_sec_img" height={130} src={daryan} alt=""/>
                  </div> 
                </div>
              
                
            </div>
        )
    }
}

export default Register;