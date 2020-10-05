import React from 'react';
import axios from 'axios';
import { API } from './../../Services/Config';
import { ListGroup, ListGroupItem ,Button} from 'reactstrap';

import Header from './../../components/Header/Header';
import MainTable from './../../components/MainTable/MainTable';

import './PayKhoms.css';
import daramad from './../../assets/icons/daramad.png'

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
                 <div >
                   <ListGroup className="paykhoms_list_group">
                   <ListGroupItem className="paykhoms_list_group_item title"><img src={daramad} height={40} alt=""/><span className="title_list">وجوهات شرعی</span></ListGroupItem>
                   </ListGroup >
                     {/* <span className="title">وجوهات شرعی</span> */}
                      <MainTable />
                 </div>                
               </div>

               <div className="part_khoms">
                     <div className="after_pay">شما تاکنون مبلغ <span className="after_pay_amount">190000 </span> ریال خمس پرداخت کرده اید </div>
                     <div className="before_pay">شما باید مبلغ  <span>6000</span> ریال را پرداخت کنید  </div>
                     <div className="btn_pay"><Button color="success" style={{ backgroundColor:"#00b894",width: "60%" , fontSize:"12px"}}>پرداخت </Button></div>
                 </div>

           </div>
        )
    }
}

export default PayKhomse;