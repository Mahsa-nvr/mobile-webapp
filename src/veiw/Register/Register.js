import React from 'react';
import './Register.css';
import {Input , Button} from 'reactstrap';
import NumberFormat from 'react-number-format';

// import baseReg from './../../assets/img/baseReg.png';
import daryan from './../../assets/img/daryan.png';
import center from './../../assets/img/daryan.png'
import { withRouter } from "react-router-dom";

class Register extends React.Component {

    constructor(props){
        super();
        this.state={
            inputPhone:''
        }
    }

    handleChange=(event) => {
        const inputPhone = event.target.value
        inputPhone.split()
        this.setState({ test:inputPhone})
        }

    taeed= (props) => {
       
        this.props.history.push('Defaultpage')
   
    }


    render() {

        return (
            <div className="main_Reg"> 
                <div className="register_first d-flex justify-content-center"> 
               
                  <div className="register_second d-flex mt-auto">
                      <img className="reg_sec_img" height={130} src={daryan} alt=""/>
                  </div> 
                </div>

                <div className="first_input d-flex justify-content-center ">
                <NumberFormat  dir="ltr" value={this.state.test} onChange={this.handleChange} style={{borderRadius:'5%',borderColor:"grey"}} displayType="input" format="09#########" allowEmptyFormatting mask="*"/>
                </div>

                <div  className="first_btn d-flex justify-content-center ">
                    <Button onClick={this.taeed} color="success" style={{ width: "50%", backgroundColor: "#20bf6b", fontSize:"15px"}}>تایید</Button>
                </div>

                <div  className="second_btn d-flex justify-content-center ">
                    <Button onClick={this.taeed}  style={{ width: "50%", backgroundColor: "white", border: "1px solid #07b0c3" , color:"#07b0c3", fontSize:"12px"}}>تخلیه اطلاعات</Button>
                </div>
  
            </div>
        )
    }
}

export default withRouter(Register);