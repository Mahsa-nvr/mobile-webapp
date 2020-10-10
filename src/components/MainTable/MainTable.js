import React from 'react';
import axios from 'axios';
import {API} from './../../Services/Config';
import { Table, ConfigProvider } from 'antd';

class MainTable extends React.Component {
  state={
    payData: [],
    amount: '',
    totalAmount: 2222
  }

    componentDidMount(){
      const { onGetData } = this.props
      
        axios.get(`${API}paykhoms/index`,{
          params: {
            user_id : 1
        }
        }).then(res => {
          this.setState({
            payData:[...res.data.data] 
          }) 
          var tt = this.state.payData.reduce(function(prev, cur){ 
            return parseInt(prev) + parseInt(cur.amount);
           }, 0)

           this.setState({
            totalAmount : tt
           })

           onGetData(this.state.totalAmount)

        }).catch(err =>
           console.log('income page' , err))

          
         
}


  render() {
   
    var ttt = this.state.payData.reduce(function(prev, cur){
      return prev + cur.amount;
   }, 0)
 
    const columns = [
      {
        title: 'ردیف',
        dataIndex: 'id',
      },
      {
        title: 'تاریخ',
        dataIndex: 'date',
      },
      {
        title: 'قیمت',
        dataIndex: 'amount',
      },
    ];

this.state.payData.map((item, index )=> {
 item.id = index+1
})




    return (
<div>
<ConfigProvider direction="rtl">
     <Table  pagination={{ pageSize: 6 }} key={this.state.payData.index} columns={columns} dataSource={this.state.payData}  scroll={{ y: 240 }} />
</ConfigProvider>
</div>
    )
  }
}

export default MainTable;