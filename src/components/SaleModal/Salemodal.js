import React from 'react';
import { Modal } from 'antd';
import { Row } from 'reactstrap';
import axios from 'axios';
import {API} from './../../Services/Config';
import NumberFormat from 'react-number-format';

import { HandleChange } from './../../share/Utility';

import './Salemodal.css';

import { checkStorageId } from './../../share/Utility';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

class Salemodal extends React.Component {

    state = { 
      visible: false,
      inputPrice: '',
      totalData: '',
      totalSum: ''
    };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = async e => {

    checkStorageId()
    let userId = checkStorageId()  

   const { sendData } = this.props
    this.setState({
      visible: false,
    });

    if(!this.state.inputPrice == "") {
    var bodyFormData = new FormData();
    bodyFormData.append('amount_sell', this.state.inputPrice);
    
    try {
    await axios({
      method: 'post',     //put
      url: `${API}income/sell`,
      headers:{
         'Content-Type':'multipart/form-data'
      },
      params: {
         id: this.props.mainId,
         user_id : userId
      },
      data: bodyFormData,
    }
    ).then(res => 
      console.log(res));
  }
  catch(err){
    console.log('errrr')
  }

    

  await axios.get(`${API}income/index`, {
    params: {
        user_id : userId,
        type: 2
    }
  }
  ).then(res => {
    this.setState({ 
      totalData : [...res.data.data],
      totalSum : res.data.sum
  })
  sendData(this.state.totalData,this.state.totalSum)
  }).catch(err => {
  console.log(err,'errrrr')
  })



    }

    this.setState({
      inputPrice: ''
    })
  };



  handleCancel = e => {
    // console.log(e);
    this.setState({
      visible: false,
      inputPrice: ''
    });
  };

  render() {
    return (
      <>
        <div type="primary" onClick={this.showModal}>
          <div style={{color:"red"}}><FontAwesomeIcon icon={faMedal} /></div>
        </div>
        <Modal
          closable={false}
          title="فروش"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}

          okButtonProps={{
            children: "Custom OK"
          }}
          cancelButtonProps={{
            children: "Custom cancel"
          }}
          okText="ثبت"
          cancelText="حذف"
          
        >
          <Row>
         <div style={{float:"right", display:"block", marginBottom: "5px"}}> <span>نام :</span> <span>{this.props.mainName}</span></div>
         </Row>
        <Row><span style={{float:"right", marginTop: "5px"}}>قیمت :</span>
         
            <NumberFormat
                className="input_number_fomat"
                name="inputPrice"
                value={this.state.inputPrice}
                onChange={(e) => HandleChange.call(this, e)}
                displayType="input" 
                thousandSeparator={true}
                allowEmptyFormatting 
                  />
        </Row>
        </Modal>
      </>
    );
  }
}

export default Salemodal;