import React from 'react';
import { Modal, Button } from 'antd';
import {Input} from 'reactstrap';
import axios from 'axios';
import {API} from './../../Services/Config';

import { HandleChange  } from './../../share/Utility';

import './Salemodal.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

class Salemodal extends React.Component {

    state = { 
      visible: false,
      inputPrice: ''
    };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(this.state.inputPrice, 'inputprice')
    // console.log(e);
    this.setState({
      visible: false,
    });
    var bodyFormData = new FormData();
    bodyFormData.append('amount_sell', this.state.inputPrice);
    // bodyFormData.append('id', this.props.mainId);
    // bodyFormData.append('user_id', 1 );

    axios({
      method: 'post',     //put
      url: `${API}income/sell`,
      headers:{
         'Content-Type':'multipart/form-data'
      },
      params: {
         id: this.props.mainId,
         user_id : 1
      },
      data: bodyFormData,
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
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
        >
          <p>نام</p>
          <Input 
          name="inputPrice"
          value={this.state.inputPrice}
          onChange={(e) => HandleChange.call(this, e)}
           />
        </Modal>
      </>
    );
  }
}

export default Salemodal;