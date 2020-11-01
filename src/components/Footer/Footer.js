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
             
                <div className="each_part" onClick={this.signOut}><FontAwesomeIcon icon={faSignOutAlt} /></div>
                <div className="each_part" onClick={this.chat}><FontAwesomeIcon icon={faComment} /></div>
                <div className="each_part" onClick={this.spend}><FontAwesomeIcon icon={faCoins} /></div>
                <div className="each_part" onClick={this.income}><FontAwesomeIcon icon={faDollarSign} /></div>
                <div className="each_part" onClick={this.default}><FontAwesomeIcon icon={faHome} /></div>
                <div className="each_part" onClick={this.profile}><FontAwesomeIcon icon={faUser} /></div>
                
            </div>
        )
    }
}

export default withRouter(Footer);