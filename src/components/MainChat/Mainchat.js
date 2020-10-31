import React from 'react';
import './MainChat.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faComment  } from '@fortawesome/free-solid-svg-icons';

//components 
import Userchat from './Userchat';
import Answer from './Answer';

class Mainchat extends React.Component {
    constructor(props) {
        super()
        this.state = {
          chat: [
              {
               Q:"افراد بازنشسته که همچنان حقوق ماهیانه دریافت می کنند،آیا باید خمس حقوقی را که در طول سال دریافت می کنند، بپردازند؟" ,
               A:"در صورتیکه از مخارج سال اضافه بیاید ، پرداخت خمس آن سر سال خمسی واجب است"
              },
               {
               Q:"آیا خمس پولی که مستاجر به عنوان رهن (پول پیش) به موجر می دهد، بر عهده مستاجر است یا موجر؟",
               A:"اگر از منفعت کسب مستاجرباشد،بر او واجب است که بعد از گرفتن آن از موجر خمس آن را بپردازد، و خمس آن بر عهده موجر که آن مال به عنوان قرض می گیرید ، واجب نیست"
              },
            //    {
            //     Q:"اگر کسی طلای مسکوک داسته باشد، آیا پرداخت خمس آن واجب است؟",
            //     A:"اگر جزء منفعت کسب محسوب شود ، حکم سایر درآمدهای کسب را در وجوب خمس دارد"
            //    }
          ],
          addQuestion:["سوال 111111", "سوال 22222222"]
        }
    }
    render() {
        return (
            <div>
                <div className="main_chat">
                    <div className="title_part">
                       <span className="title_icon"><FontAwesomeIcon icon={faComment} /></span>
                        <span className="title_text"> پرسش و پاسخ</span>                       
                   </div>
                   {this.state.chat.map((item , index)=> {
                   return   (<div key={index}> 
                                <Userchat  question={item.Q} /> 
                                <Answer  answer={item.A} />
                             </div>)        
                   })}
                  
                  {this.state.addQuestion.map((item , index) => {
                       return (<div key={index}>  <Userchat  question={item} /> </div>)
                   })}
                    
                </div>
            </div>
        )
    }
}

export default Mainchat;