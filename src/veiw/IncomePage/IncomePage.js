import React from 'react';
import axios from 'axios';
import './IncomePage.css';
import daramad from './../../assets/icons/daramad.png'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { API } from './../../Services/Config';

//components
import Header from './../../components/Header/Header';
import ListItem from './../../components/ListItem/ListItem';


class IncomePage extends React.Component {
render() {
  console.log(API)
    return (
        <div className="income_page">
            <Header />
              <div className="income_list">
               <ListGroup className="income_list_group">
                 <ListGroupItem className="income_list_group_item title"><img src={daramad} height={40} alt=""/><span className="title_list">درآمد</span></ListGroupItem>
                 <ListGroupItem className="income_list_group_item"><span className="title_whole">درآمد کل:</span><span className="title_amount">5000 ریال</span></ListGroupItem>
               
                 <ListItem />
                
              </ListGroup>
              </div>
            </div>
    )
}
}

export default IncomePage;