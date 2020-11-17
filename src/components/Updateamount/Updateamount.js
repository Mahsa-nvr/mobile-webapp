import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import  { API } from './../../Services/Config.js';
import { checkStorageId } from './../../share/Utility';

import './Updateamount.css';

//component 
import BodyModal from './BodyModal';

const UpdateAmount = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [total, setTotal] = useState('')


  useEffect(() => {   
    checkStorageId()
    let userId = checkStorageId()   
           
    axios.get(`${API}expenditures/consumer`,{
        params: {
          user_id : userId,
          
      }
      }).then(res => {
        //  console.log(res.data.data, 'header')
         setTotal(res.data.data)
         
      }).catch(err =>
         console.log('updateamount' , err))
    
   
}, [setTotal])

  const toggle = () => setModal(!modal);

  const next = () => {
      return (
          <div> <BodyModal /></div>
      )
    }

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
  
  return (
      
  <div>
    <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle} close={closeBtn}> به روز رسانی هزینه</ModalHeader>
      <ModalBody className="bd_main">
        <BodyModal />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        <Button color="danger" onClick={next}>next</Button>
      </ModalFooter>
    </Modal>
  </div>
);
}

export default UpdateAmount;