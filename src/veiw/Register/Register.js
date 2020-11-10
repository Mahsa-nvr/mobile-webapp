import React from 'react';
import './Register.css';
import { Button } from 'reactstrap';
import NumberFormat from 'react-number-format';
import axios from 'axios';
import  { API } from './../../Services/Config.js';


import daryan from './../../assets/img/daryan.png';
import { withRouter } from "react-router-dom";

class Register extends React.Component {

    constructor(props){
        super();
        this.state={
            inputPhone:'',
            empty: false,
            show: false
        }
    }

    handleChange=(event) => {
        const {name, value } = event.target;
        this.setState({
            [name] : value,
            empty: false
        })
        }

    taeed= (props) => {
        if(this.state.inputPhone) {
        const test = this.state.inputPhone
        var arr=test.split('');
        var arr2= arr.includes('*')
        if (!arr2 ) {
            localStorage.setItem("inputPhone", this.state.inputPhone )
           

            var bodyFormData = new FormData();
               
            bodyFormData.append('username', this.state.inputPhone);
           
           axios({
               method: 'post',
               url: `${API}user/login`,
               headers: {
                'Content-Type':'multipart/form-data'
               },
               data: bodyFormData,
           }
           ).then(res => {
                if(res.data.data == "Username not found.")
                this.setState({
                    show:true
                })
            else{
                const{ id , username } = res.data.data
                localStorage.setItem("User_Id", id )
                localStorage.setItem("inputPhone", username )
               this.props.history.push('/Login')
               this.setState({ show: false})
            }
                
           }).then(err => console.log(err))

            // this.props.history.push('Login')
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

    register = () => {
       
        this.props.history.push('/signup')
        // axios.get(`${API}database/clean`,{
        //     params: {
        //       user_id : 1,
        //       clean: true
        //   }
        //   }).then(res => {
        //       console.log(res)
        //     console.log('empty data base', res)
        //   }).catch(err =>
        //      console.log('err to empty data base' , err))

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
                <NumberFormat className={this.state.empty?'empty_text': 'full_text'} dir="ltr" name="inputPhone" value={this.state.inputPhone} onChange={this.handleChange}  displayType="input" format="09#########" allowEmptyFormatting mask="*"/>
                </div>

                <div  className="first_btn d-flex justify-content-center ">
                    <Button onClick={this.taeed} color="success" style={{ width: "50%", backgroundColor: "#20bf6b", fontSize:"15px"}}>تایید</Button>
                </div>

                <div  className="second_btn d-flex justify-content-center ">
                    <Button onClick={this.register}  style={{ width: "50%", backgroundColor: "white", border: "1px solid #07b0c3" , color:"#07b0c3", fontSize:"12px"}}> ثبت نام</Button>
                </div>
  
            </div>
        )
    }
}

export default withRouter(Register);