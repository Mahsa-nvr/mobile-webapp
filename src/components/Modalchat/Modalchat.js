import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';



const ModalChat = (props) => {
    const {
      buttonLabel,
      className, 
      getData
    } = props;
  
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
    const [inputValue, setInputValue] = useState('')
  
    const toggle = () => setModal(!modal)
    const changeUnmountOnClose = e => {
        let value = e.target.value;
        setUnmountOnClose(JSON.parse(value));
    }

    const handleChange= e => {
        let value = e.target.value
        setInputValue(value)
    }

    const add = () => {
       getData(inputValue)
       setModal(false)
       setInputValue('')
    }
  
    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <FormGroup>
                    {/* <Label for="unmountOnClose">UnmountOnClose value</Label>{' '} */}
                    {/* <Input type="select" name="unmountOnClose" id="unmountOnClose" onChange={changeUnmountOnClose}>
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </Input> */}
                </FormGroup>
                {' '}
                <Button color="danger" onClick={toggle}>ثبت پرسش جدید</Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} className={className} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>ثبت پرسش جدید </ModalHeader>
                <ModalBody>
                    <Input  type="textarea" value={inputValue} onChange={handleChange} rows={5} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={add}>ثبت</Button>{' '}
                    <Button color="secondary" onClick={toggle}>حذف</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalChat;