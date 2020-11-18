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
  const [total, setTotal] = useState('');
  const [first, setFirst] = useState();
  const [ count , setCount] = useState(1)



  useEffect(() => {   
    checkStorageId()
    let userId = checkStorageId()   
           
    axios.get(`${API}expenditures/consumer`,{
        params: {
          user_id : userId,
          
      }
      }).then(res => {
         console.log(res.data.data, 'header')
         setTotal([...res.data.data])
         setFirst(res.data.data[0].name)
         
      }).catch(err =>
         console.log('updateamount' , err))
    
   
}, [setTotal])

  const toggle = () => setModal(!modal);

  const next = () => {
    console.log(count, 'count in parent')
    setCount(count + 1)

   let i=[...total]
   i.map((el, index) => {
    //  console.log(el.name, index)
     if(index === count) {
       console.log(index,count,el.name,'is ok')
       setFirst(el.name)
     }else{
       console.log('noooo')
     }
   })


    //  if(total.length > 1) {
    //    let i=[...total]
    //    console.log(i[1].id)
    //   for(i[1]; i<total.length; i++) {
    //     console.log(i,'i in for')
    //   }
    //   setCount(count + 1)
    //  }else {
    //    console.log('no')
    //  }
    }

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
  
  

 
  
  console.log(first,'first in hook')
  return (
      
  <div>
    <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle} close={closeBtn}> به روز رسانی هزینه</ModalHeader>
      <ModalBody className="bd_main">
        <BodyModal firstData={first} />
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