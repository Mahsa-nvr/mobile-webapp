import React from 'react';
import './Answer.css';
import { Row, Col } from 'reactstrap';

class Answer extends React.Component {
    render() {
        return (
            <div>
              <div className="answer_chat">
              {/* <div className="answer_part1">پاسخ : آیت الله ...</div> */}
              <Row>
                  <Col>
                  </Col>
                        <Col>
                        <div className="answer_chat_part1"> {this.props.answer} </div>
                        </Col>      
             </Row>           
              </div>
            </div>
        )
    }
}

export default Answer;