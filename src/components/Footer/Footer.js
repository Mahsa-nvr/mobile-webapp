import React from 'react';
import './Footer.css';
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment,   faHome , faUser, faSignOutAlt, faDollarSign, faCoins} from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {
    chat = () => {
        this.props.history.push('/chat')
    }

    signOut = () => {
        this.props.history.push('/')
    }

    spend = (props) => {
        this.props.history.push('/spend')
    }

    income = (props) => {
        this.props.history.push('/IncomePage')
    }

    default = (props) => {
        this.props.history.push('/Defaultpage')
    }

    profile = (props) => {
        this.props.history.push('/profile')
    }

    render() {
        return (
            <div className="footer">
             
                <div className="each_part" onClick={this.signOut}><span><FontAwesomeIcon icon={faSignOutAlt} /></span></div>
                <div className="each_part" onClick={this.chat}><span><FontAwesomeIcon icon={faComment} /></span></div>
                <div className="each_part" onClick={this.spend}><span><FontAwesomeIcon icon={faCoins} /></span></div>
                <div className="each_part" onClick={this.income}><span><FontAwesomeIcon icon={faDollarSign} /></span></div>
                <div className="each_part" onClick={this.default}><span><FontAwesomeIcon icon={faHome} /></span></div>
                <div className="each_part" onClick={this.profile}><span><FontAwesomeIcon icon={faUser} /></span></div>
                
            </div>
        )
    }
}

export default withRouter(Footer);