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
  const [count , setCount] = useState(1);
  const [price , setPrice] = useState('');
  const [addid , setAddid] = useState('');
  const [test , setTest] = useState('')



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
         setAddid(res.data.data[0].id)
      }).catch(err =>
         console.log('updateamount' , err))
    
   
}, [setTotal])

  const toggle = () => setModal(!modal);

  const add = () => {

    const value = price;
    const amount = value.replace(/,/g, "");
    console.log(amount, 'price in parent')

    let i=[...total]
    i.map((el, index) => {
     //  console.log(el.name, index)
      if(index === count) {
        console.log(index,count,el.name,'is ok')
        setFirst(el.name)
        setAddid(el.id)
      }else{
        console.log('noooo')
      }
    })

    console.log(addid, first, 'sssssssss')

    setCount(count + 1)

    checkStorageId()
    let userId = checkStorageId() 

    // var bodyFormData = new FormData();
     
    //   bodyFormData.append('amount_now', amount);
    //   bodyFormData.append('id', addid );
    //   bodyFormData.append('userID', userId );
    //   bodyFormData.append('status', 2 );
    
    //   axios({

    //     method: 'post',     //put
    //     url: `${API}expenditures/consumer_update`,
    //     headers:{
    //        'Content-Type':'multipart/form-data'
    //     },
    //     data: bodyFormData,
    //     }

    //    ).then(res => {
    //     console.log(res)
    //   }).catch(err => {
    //     console.log(err)
    //   })

    setTest('gg')
    

  }

  const end = () => {
    


    let i=[...total]
    i.map((el, index) => {
     //  console.log(el.name, index)
      if(index === count) {
        console.log(index,count,el.name,'is ok')
        setFirst(el.name)
        setAddid(el.id)
      }else{
        console.log('noooo')
      }
    })

    setCount(count + 1)

    checkStorageId()
    let userId = checkStorageId() 

    var bodyFormData = new FormData();
     
      bodyFormData.append('amount_now', 0 );
      bodyFormData.append('id', addid );
      bodyFormData.append('userID', userId );
      bodyFormData.append('status', 1 );
    
      axios({

        method: 'post',     //put
        url: `${API}expenditures/consumer_update`,
        headers:{
           'Content-Type':'multipart/form-data'
        },
        data: bodyFormData,
        }

       ).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })

  }

  const next = () => {
    setCount(count + 1)

   let i=[...total]
   i.map((el, index) => {
    //  console.log(el.name, index)
     if(index === count) {
       console.log(index,count,el.name,'is ok')
      return  setFirst(el.name)
     }else{
      return null
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

    const handleGetAmount = (data) => {
      setPrice(data)
    }




  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
  
  

 
  

  return (
      
  <div>
    <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle} close={closeBtn}> به روز رسانی هزینه</ModalHeader>
      <ModalBody className="bd_main">
        <BodyModal firstData={first} getData={handleGetAmount} test={test}/>
      </ModalBody>
      <ModalFooter>
        {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button> */}

        <Button color="success" onClick={add}>ثبت</Button>
        <Button color="primary" onClick={end}>اتمام کالا</Button>
        <Button color="danger" onClick={next}>بعدی</Button>
      </ModalFooter>
    </Modal>
  </div>
);
}

export default UpdateAmount;