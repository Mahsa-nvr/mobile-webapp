import React from 'react';
import './Header.css';

import profileIcon from './../../assets/icons/profileIcon.png';
import dariyan from './../../assets/icons/dariyan.png';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
               <div className="header">
                  <div className="profile_icon">
                    <img src={profileIcon} height="30"  alt=""/>
                  </div> 
                   <div className="profile_text">سلام {this.props.name}</div>

                  <div className="profile_logo"> <img src={dariyan} height="30"  alt=""/></div>
               </div>
            </React.Fragment>
        )
    }
}

export default Header;