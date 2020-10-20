import React from 'react';
import axios from 'axios';
import './IncomePage.css';
import daramad from './../../assets/icons/daramad.png'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { API } from './../../Services/Config';


//components
import Header from './../../components/Header/Header';
import ListItem from './../../components/ListItem/ListItem';
import Footer from './../../components/Footer/Footer';

class IncomePage extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      incomeCat: [],
      totalAmount : ''
    }
  }

  componentDidMount() {
    axios.get(`${API}incomecategory/index`,{
      params: {
        user_id : 1,
        type: 1,
    }
    }).then(res => {
      this.setState({incomeCat:[...res.data.data] })
    }).catch(err =>
       console.log('income page' , err))


       axios.get(`${API}income/index`, {
          params: {
              user_id : 1,
              type: 1
          }
        }
        ).then(res => {
         this.setState({ 
          totalAmount : res.data.sum
         })
        }).catch(err => {
        console.log(err)
        })

     

  }
 
  
render() {
    return (
        <div className="income_page">
            <Header />
              <div className="income_list">
               <ListGroup className="income_list_group">
                 <ListGroupItem className="income_list_group_item title"><img src={daramad} height={40} alt=""/><span className="title_list">درآمد</span></ListGroupItem>
                 <ListGroupItem className="income_list_group_item"><span className="title_whole">درآمد کل:</span><span className="title_amount">{this.state.totalAmount} ریال</span></ListGroupItem>
               {this.state.incomeCat.map(el => {
                 return  <div key={el.id}><ListItem  mainTitle={el.title} catId={el.id}/></div>
               })}
              </ListGroup>
              </div>

              <Footer />
            </div>
    )
}
}

export default IncomePage;