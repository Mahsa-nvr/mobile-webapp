import React from 'react';
import axios from 'axios';
import { API } from './../../Services/Config';
import { ListGroup, ListGroupItem ,Button} from 'reactstrap';
import NumberFormat from 'react-number-format';
import { withRouter } from "react-router-dom";

import { checkStorageId } from './../../share/Utility';

import Header from './../../components/Header/Header';
import MainTable from './../../components/MainTable/MainTable';
import Footer from './../../components/Footer/Footer';
import Loading from './../../components/Loading/Loading';

import './PayKhoms.css';
import daramad from './../../assets/icons/daramad.png'

class PayKhomse extends React.Component {

  constructor(props){
    super();
    this.state= {
      mustAmountPay: '',
      payAmount:'',
      flag: true
    }
  }

  

    componentDidMount(){

      checkStorageId()
        let userId = checkStorageId()  
        if(userId == null) {
            return  window.location.href = '/';
        }else {
            this.setState({ flag:false})
        }
 
            axios.get(`${API}paykhoms/index`,{
              params: {
                user_id : userId
            }
            }).then(res => {
              this.setState({
                mustAmountPay : res.data.religion.religion
              })
            }).catch(err =>
               console.log('income page' , err))
    }


    handleGetData = data => {
     this.setState({ payAmount:data})
    }

    btnPay = async() => {

      checkStorageId()
      let userId = checkStorageId()  

      const timeMs = Math.round(new Date() / 1000);
      var roundAmount = Math.ceil(this.state.mustAmountPay);
      console.log(timeMs);

      var bodyFormData = new FormData();
      bodyFormData.append('amount', roundAmount);
      bodyFormData.append('date', timeMs);
      bodyFormData.append('user_id', userId );

      try{
        await axios({
          method: 'POST',
          url: `${API}paykhoms/create`,
          headers:{
            'Content-Type':'multipart/form-data'
         },
         data: bodyFormData,
        }).then(res =>   
           window.location.href ='https://www.leader.ir/fa/monies'
           )
      }
      catch(err) {console.log('errrrr in pay page', err) }
    }


    render(){
      // console.log('khoms that you must pay', this.state.mustAmountPay)
        return (
           <div className="paykhoms_page">
               <Header />
               { this.state.flag ? <Loading/> : 
            
               <div className="main_khoms">
                 <div >
                   <ListGroup className="paykhoms_list_group">
                   <ListGroupItem className="paykhoms_list_group_item title"><img src={daramad} height={40} alt=""/><span className="title_list">وجوهات شرعی</span></ListGroupItem>
                   </ListGroup >
                     {/* <span className="title">وجوهات شرعی</span> */}
                      <MainTable  onGetData={this.handleGetData}/>
                 </div>                
               </div>
    }
    {!this.state.flag ?
               <div className="part_khoms">
                     <div className="after_pay">شما تاکنون مبلغ <span className="after_pay_amount">
                     <NumberFormat value={this.state.payAmount} displayType={'text'} thousandSeparator={true}  renderText={value => <div style={{display:"inline-block"}}>{value}</div>} />
                       </span> ریال خمس پرداخت کرده اید </div>
                     <div className="before_pay">شما باید مبلغ  <span>
                     <NumberFormat value={this.state.mustAmountPay} displayType={'text'} thousandSeparator={true}  renderText={value => <div style={{display:"inline-block"}}>{value}</div>} />
                       </span> ریال را پرداخت کنید  </div>
                     <div className="btn_pay"><Button  onClick={this.btnPay} color="success" style={{ backgroundColor:"#00b894",width: "60%" , fontSize:"12px"}}>پرداخت </Button></div>
               
                
                 </div>
              : null}
                 
              <Footer />
           </div>
        )
    }
}

export default withRouter(PayKhomse);