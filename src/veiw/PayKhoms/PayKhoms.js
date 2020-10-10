import React from 'react';
import axios from 'axios';
import { API } from './../../Services/Config';
import { ListGroup, ListGroupItem ,Button} from 'reactstrap';

import Header from './../../components/Header/Header';
import MainTable from './../../components/MainTable/MainTable';

import './PayKhoms.css';
import daramad from './../../assets/icons/daramad.png'

class PayKhomse extends React.Component {

  constructor(props){
    super();
    this.state= {
      mustAmountPay: ''
    }
  }

  

    componentDidMount(){
 
            axios.get(`${API}paykhoms/index`,{
              params: {
                user_id : 1
            }
            }).then(res => {
              this.setState({
                mustAmountPay : res.data.religion.religion
              })
            }).catch(err =>
               console.log('income page' , err))
    }


    btnPay = async() => {

      var bodyFormData = new FormData();
      bodyFormData.append('amount', this.state.mustAmountPay);
      bodyFormData.append('user_id', 1 );

      try{
        await axios({
          method: 'POST',
          url: `${API}paykhoms/create`,
          headers:{
            'Content-Type':'multipart/form-data'
         },
         data: bodyFormData,
        }).then(res => console.log('send pay amount in paykhoms page', res))
      }
      catch(err) {console.log('errrrr in pay page', err)}
    }


    render(){
      // console.log('khoms that you must pay', this.state.mustAmountPay)
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
                     <div className="before_pay">شما باید مبلغ  <span>{this.state.mustAmountPay}</span> ریال را پرداخت کنید  </div>
                     <div className="btn_pay"><Button onClick={this.btnPay} color="success" style={{ backgroundColor:"#00b894",width: "60%" , fontSize:"12px"}}>پرداخت </Button></div>
                 </div>

           </div>
        )
    }
}

export default PayKhomse;