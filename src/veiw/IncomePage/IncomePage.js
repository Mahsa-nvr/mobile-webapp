import React from 'react';
import axios from 'axios';
import './IncomePage.css';
import daramad from './../../assets/icons/daramad.png'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { API } from './../../Services/Config';
import NumberFormat from 'react-number-format';
import { checkStorageId } from './../../share/Utility';


//components
import Header from './../../components/Header/Header';
import ListItem from './../../components/ListItem/ListItem';
import Footer from './../../components/Footer/Footer';
import Loading from './../../components/Loading/Loading';

class IncomePage extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      incomeCat: [],
      totalAmount : '',
      flag: true
    }
  }

  componentDidMount() {
   
    checkStorageId()
        let x = checkStorageId()  
        if(x == null) {
            return  window.location.href = '/';
        }else {
            this.setState({ flag:false})
        }

    axios.get(`${API}incomecategory/index`,{
      params: {
        user_id : 1,
        type: 1,
    }
    }).then(res => {
      this.setState({incomeCat:[...res.data.data] })
    }).catch(err =>
       console.log('income page' , err))



  }

  handleGetData = (data) => {
   this.setState({
    totalAmount: data
   })
  }
 
  
render() {
    return (
      <div >
        <div className="income_page">
            <Header />
            { this.state.flag ? <Loading/> : 
              <div className="incomee_list">
               <ListGroup className="income_list_group">
                 <ListGroupItem className="income_list_group_item title"><img src={daramad} height={40} alt=""/><span className="title_list">درآمد</span></ListGroupItem>
                 <ListGroupItem className="income_list_group_item"><span className="title_whole">درآمد کل:</span><span className="title_amount">
                 <NumberFormat value={this.state.totalAmount} displayType={'text'} thousandSeparator={true}  renderText={value => <div>{value} ریال</div>} />
                   </span></ListGroupItem>
               {this.state.incomeCat.map(el => {
                 return  <div key={el.id}><ListItem  mainTitle={el.title} catId={el.id} onGetData={this.handleGetData}/></div>
               })}
              </ListGroup>
              </div>
            }

              <div><Footer /></div>
              
            </div>
           

       </div>
    )
}
}

export default IncomePage;