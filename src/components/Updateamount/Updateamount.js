import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
import axios from 'axios';
import  { API } from './../../Services/Config.js';
import { checkStorageId } from './../../share/Utility';

import NumberFormat from 'react-number-format';

import './Updateamount.css';

//component 
// import BodyModal from './BodyModal';

const UpdateAmount = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal , setModal] = useState(false);
  const [total , setTotal] = useState('');
  const [first , setFirst] = useState();
  const [count , setCount] = useState(1);
  const [price , setPrice] = useState('');
  const [addid , setAddid] = useState('');
  const [emptyprice , setEmptyprice] = useState(false);
  const [checkUser , setCheckUser] = useState('');
 



  useEffect(() => {  
//recive get data and set first of that in state
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
         console.log( 'updateamount in useeffect in get method' , err))
}, [setTotal] )

  const toggle = () => setModal(!modal);


  const add = async () => {
    const value = price;
    const amount = value.replace(/,/g, "");
   
    let i=[...total]
    i.map((el, index) => {
     //  console.log(el.name, index)
      if(index === count){
        setFirst(el.name)
        setAddid(el.id)
      }else {
        console.log('kkkkkkkkkk')
      }
    })
    setCount(count + 1)
    checkStorageId()
    let userId = checkStorageId() 

    var bodyFormData = new FormData();
     
      bodyFormData.append('amount_now', amount);
      bodyFormData.append('id', addid );
      bodyFormData.append('userID', userId );
      bodyFormData.append('status', 2 );
      
     
      try {
        await axios({
        method: 'post',     //put
        url: `${API}expenditures/consumer_update`,
        headers:{
           'Content-Type':'multipart/form-data'
        },
        data: bodyFormData,
        }
        ).then(res => 
            console.log(res)
           );
        }
        catch(err){
          console.log('errrr')
        }
     
        await axios.get(`${API}expenditures/consumer`, {
          params: {
              user_id : userId,
          }
        }
        ).then(res => {
          let totaldata = [...res.data.data]
          console.log(totaldata.length, 'aaaaa')
          if(totaldata.length === 0) {
            setModal(false) 
            setFirst('')    
          } 
        }).catch(err => {
        console.log(err)
        })
      
    setPrice('')
  
  }

  const end = async () => {
    


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
    
      try {
        await axios({
        method: 'post',     //put
        url: `${API}expenditures/consumer_update`,
        headers:{
           'Content-Type':'multipart/form-data'
        },
        data: bodyFormData,
        }
        ).then(res => 
            console.log(res));
        }
        catch(err){
          console.log('errrr')
        }

        await axios.get(`${API}expenditures/consumer`, {
          params: {
              user_id : userId,
          }
        }
        ).then(res => {
          let totaldata = [...res.data.data]
          console.log(totaldata.length, 'aaaaa')
          if(totaldata.length === 0) {
            setModal(false)
          }
          
        }).catch(err => {
        console.log(err)
        })

  }

  const next = () => {

    checkStorageId()
    let userId = checkStorageId() 

    setCount(count + 1)

   let i=[...total]
   
   i.map((el, index) => {
    //  console.log(el.name, index)
     if(index === count) {
       console.log( index ,count,el.name,'is ok')
      //  let test = [...i]
      // let test2=  test.shift()
      // console.log(test, test2, 'lllkkk')
     setFirst(el.name)
    
     } else {
       console.log(count,'count in if else')
       console.log(index,'index in if else')
      
     } 
     if(checkUser){
       setModal(false)
     }
   }) 
   let arr = i.slice(1)
   console.log(arr,'arr')

 }



const handleOnchange = e => {
  setPrice(e.target.value)
}




  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
  
  

 
  

  return (
      
  <div>
    <Button color="danger" onClick={toggle} style={{fontSize:"10px", marginTop:"5px"}}>به روز رسانی هزینه های مصرفی</Button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle} close={closeBtn}> به روز رسانی هزینه</ModalHeader>
      <ModalBody className="bd_main">
        {/* <BodyModal firstData={first} getData={handleGetAmount} test={test}/> */}
     

        <div>
             <Row>
               <div style={{float:"right", display:"block", marginBottom: "5px"}}> <span>نام : {first} </span> </div>
            </Row>
            <Row><span style={{float:"right", marginTop: "5px"}}>قیمت :</span>
         
            <NumberFormat
                className="input_number_fomat"
                name="price"
                value={price}
                onChange={(e) => handleOnchange.call(this, e)}
                displayType="input" 
                thousandSeparator={true}
                allowEmptyFormatting 
                  />
           </Row>

   
       </div>
     
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