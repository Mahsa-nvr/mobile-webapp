import React from 'react';
import axios from 'axios';
import {API} from './../../Services/Config';
import { Table, ConfigProvider } from 'antd';

class MainTable extends React.Component {
  state={
    payData: [],
    amount: ''
  }

    componentDidMount(){
       
        axios.get(`${API}paykhoms/index`,{
          params: {
            user_id : 1
        }
        }).then(res => {
          this.setState({payData:[...res.data.data] })
        }).catch(err =>
           console.log('income page' , err))
}

  
  render() {
    const columns = [
      {
        title: 'شماره',
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

    const data = [
      {
        id: 1,
        date: 8,
        amount: 'kkkkk',
      },
     
    ];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }
const totalData = this.state.payData
totalData.map(item => {
  
})
    return (
<div>
<ConfigProvider direction="rtl">
     <Table  pagination={{ pageSize: 6 }}  columns={columns} dataSource={data}  scroll={{ y: 240 }} />
</ConfigProvider>
</div>
    )
  }
}

export default MainTable;