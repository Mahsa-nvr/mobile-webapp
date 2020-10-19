import React from 'react';
import daryan from './../../assets/img/daryan.png';
// import center from './../../assets/img/daryan.png'
import { withRouter } from "react-router-dom";
import { Button, Input} from 'reactstrap';
import './Login.css';


class Login extends React.Component {

    constructor(props){
        super();
        this.state={
            mainInput:''
        }
    }

    componentDidMount() {
        var getLocalValue= localStorage.getItem("inputPhone")
       this.setState({
        mainInput: getLocalValue
       })
    }

    taeed = () => {
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
                   <Input defaultValue={this.state.mainInput}/>
                </div>

                <div  className="second_input d-flex justify-content-center ">
                    <Input placeholder="کد تایید"/>
                </div>

                <div  className="second_btn d-flex justify-content-center ">
                <Button onClick={this.taeed} color="success" style={{ width: "50%", backgroundColor: "#20bf6b", fontSize:"15px"}}>تایید</Button>
                </div>
  
            </div>


        )
    }
}

export default withRouter(Login);