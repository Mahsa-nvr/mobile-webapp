import React from 'react';
import { Modal, Button } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEject } from '@fortawesome/free-solid-svg-icons';

class Salemodal extends React.Component {
    state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
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
          <div style={{color:"red"}}><FontAwesomeIcon icon={faEject} /></div>
        </div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}

export default Salemodal;