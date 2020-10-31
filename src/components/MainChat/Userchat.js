import React from 'react';
import './Userchat.css';
import { Row, Col } from 'reactstrap';

class Userchat extends React.Component {
    render() {
        return (
            <div>
                <div className="user_chat">
                    {/* <div className="user_part1">پرسش : کاربر</div> */}
                    <Row>
                        <Col>
                         <div className="user_chat_part1"> {this.props.question} </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>                 
                </div>             
            </div>
        )
    }
}

export default Userchat;