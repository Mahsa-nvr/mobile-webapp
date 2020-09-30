import React from 'react';
import axios from 'axios';
import {  ListGroupItem, Button , Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import './AssetList.css'
import {API} from './../../Services/Config';
//import icon
import home from './../../assets/icons/secondIcons/home.png';
import car from './../../assets/icons/secondIcons/car.png';

class AssetList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalAsset: [],
        }
    }

    componentDidMount() {
        axios.get(`${API}income/index`, {
            params: {
                user_id : 1,
                type: 2
            }
           }
          ).then(res => {
          this.setState({ 
            totalAsset : [...res.data.data]
          })
          }).catch(err => {
            console.log(err)
          })
    }

    render() {
       
      
        return(
            <div>
            <ListGroupItem className="asset_list_group header">
             <div className="asset_list_img"><img src={home} alt=""/></div>{this.props.mainTitle}
                <div className="base_list_btn">
                     <Button onClick={this.btnClick} className="list_btn">+</Button>
                </div>
            </ListGroupItem>

               {this.state.totalAsset.map(li => { 
                        if(li.category_name === this.props.mainTitle )            
                      return <ListGroupItem key={li.id} className="income_list_part">
                        {li.name}
                        <span className="income_list_part_amount">{li.amount}</span>
                        </ListGroupItem>                   
                    })}
            </div>
        )
    }
}

export default AssetList;