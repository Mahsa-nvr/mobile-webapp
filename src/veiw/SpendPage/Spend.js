import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import hazine from './../../assets/icons/hazine.png';
import axios from 'axios';
import { API } from './../../Services/Config';
import NumberFormat from 'react-number-format';

import './Spend.css';

//components 
import Header from './../../components/Header/Header';
import SpendList from './../../components/SpendListItem/SpendList';
import Footer from './../../components/Footer/Footer';


class Spend extends React.Component {

    constructor(props){
        super();
        this.state = {
            spendCat: [],
            sum: 0
        }
    }

    componentDidMount() {
        axios.get(`${API}expenditurescategory/index`, {
            params: {
                user_id : 1         
            }
           }
          ).then(res => {
        // console.log('header', res.data.data)
        this.setState({
            spendCat: [...res.data.data]
        })
        
          }).catch(err => {
            console.log(err)
          })
    }

    handleGetData = (data) => {
      this.setState({
          sum: data
      })
    }


    render(){
        return (
            <div>
            <div className="spend_page"> 
                <Header />
                  <div className="spend_list">
                      <ListGroup className="spend_list_group">
                          <ListGroupItem className="spend_list_group_item title"><img src={hazine} height={40} alt=""/><span className="title_list">هزینه</span></ListGroupItem>
                          <ListGroupItem className="spend_list_group_item"><span className="title_whole">هزینه کل:</span><span className="title_amount">
                            <NumberFormat value={this.state.sum} displayType={'text'} thousandSeparator={true}  renderText={value => <div>{value} ریال</div>} />                     
                            </span></ListGroupItem>
                          {this.state.spendCat.map(item => {
                              return <div key={item.id}><SpendList  mainTitle={item.name} catId={item.id}  onGetData={this.handleGetData}/></div>
                          })}
                          
                          
                      </ListGroup>
                  </div>
                  
            </div>
               <div><Footer /></div>
            </div>
        )
    }
}

export default Spend;