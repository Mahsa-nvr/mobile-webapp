import React from 'react';
import './MainChat.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faComment  } from '@fortawesome/free-solid-svg-icons';

//components 
import Userchat from './Userchat';

class Mainchat extends React.Component {
    render() {
        return (
            <div>
                <div className="main_chat">
                    <div className="title_part">
                       <span className="title_icon"><FontAwesomeIcon icon={faComment} /></span>
                        <span className="title_text"> پرسش و پاسخ</span>                       
                   </div>
                   <Userchat />
      
                    
                </div>
            </div>
        )
    }
}

export default Mainchat;