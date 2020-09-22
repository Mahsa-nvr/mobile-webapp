import React from 'react';
import {  ListGroupItem, Button } from 'reactstrap';

import bankAccount from './../../assets/icons/secondIcons/bankAccount.png'

//css
import './ListItem.css'

class ListItem extends React.Component {
    render() {
        return (
            <div >
               
                    <ListGroupItem className="income_list_group_item header"><img src={bankAccount} alt=""/> حساب های بانکی  <div className="base_list_btn"><Button className="list_btn">+</Button></div></ListGroupItem>
                    {/* <ListGroupItem className="income_list_group_item">melk</ListGroupItem>
                    <ListGroupItem className="income_list_group_item">car</ListGroupItem>
                    <ListGroupItem className="income_list_group_item">sayer</ListGroupItem> */}
                
            </div>
        )
    }
}

export default ListItem;