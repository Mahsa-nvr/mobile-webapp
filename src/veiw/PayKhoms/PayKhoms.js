import React from 'react';
import axios from 'axios';
import { API } from './../../Services/Config';
import Header from './../../components/Header/Header';
import MainTable from './../../components/MainTable/MainTable';
import { Button } from 'reactstrap';
import './PayKhoms.css';


class PayKhomse extends React.Component {

  

    componentDidMount(){
       
            axios.get(`${API}paykhoms/index`,{
              params: {
                user_id : 1
            }
            }).then(res => {
            //   this.setState({payData:[...res.data.data] })
            }).catch(err =>
               console.log('income page' , err))
    }

    render(){
        return (
           <div className="paykhoms_page">
               <Header />
               <div className="main_khoms">
                 <div className="main_khoms_title">
                     <span className="title">وجوهات شرعی</span>
                      <MainTable />
                 </div>                
               </div>

               <div className="part_khoms">
                     <div className="after_pay">شما تاکنون مبلغ <span className="after_pay_amount">190000 </span> ریال خمس پرداخت کردید </div>
                     <div className="before_pay">شما باید مبلغ  <span>6000</span> ریال را پرداخت کنید  </div>
                     <div className="btn_pay"><Button color="success" style={{ backgroundColor:"#00b894",width: "60%" , fontSize:"12px"}}>پرداخت </Button></div>
                 </div>

           </div>
        )
    }
}

export default PayKhomse;