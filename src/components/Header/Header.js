import React from 'react';
import './Header.css';
import  { API } from './../../Services/Config.js';

import profileIcon from './../../assets/icons/profileIcon.png';
import dariyan from './../../assets/icons/dariyan.png';
import axios from 'axios';
import { checkStorageId } from './../../share/Utility';

class Header extends React.Component {

   state={
     
       total:[]
   }
  
    componentDidMount() {
        checkStorageId()
        let userId = checkStorageId()   
        axios.get(`${API}user/profile`,{
            params: {
              user_id : userId,
              
          }
          }).then(res => {
            //  console.log(res.data.data.name, 'header')
             this.setState({
                total : res.data.data
             })
          }).catch(err =>
             console.log('header' , err))
    }


    render() {
        return (
            <React.Fragment>
               <div className="header">
                  <div className="profile_icon">
                    <img src={profileIcon} height="30"  alt=""/>
                  </div> 
                   <div className="profile_text">سلام {this.state.total.name}</div>

                  <div className="profile_logo"> <img src={dariyan} height="30"  alt=""/></div>
               </div>
            </React.Fragment>
        )
    }
}

export default Header;