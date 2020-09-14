import React from 'react';
import testicon from './../../assets/icons/shelter.png'
import './Maincards.css';


class Maincards extends React.Component {
    render() {
        return (
            <div className="maincards">
                <div className="container">
                    <div className="row">
                        <div className="col col_part">
                           <div className="card_part">
                               <img src={testicon} height="40"  alt=""/>
                               <div className="text_card">دارایی</div>
                               <div className="status_card">وارد نشده</div>
                           </div>
                        </div>
                        <div className="col col_part">
                           <div className="card_part">
                               <img src={testicon}  height="40" alt=""/>
                               <div className="text_card">وجوهات شرعی</div>
                               <div className="status_card">وارد نشده</div>
                           </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col_part">
                            <div className="card_part">
                               <img src={testicon}  height="40" alt=""/>
                               <div className="text_card">درآمد</div>
                               <div className="status_card">وارد نشده</div>
                           </div>
                        </div>
                        <div className="col col_part">
                           <div className="card_part">
                               <img src={testicon}  height="40" alt=""/>
                               <div className="text_card">هزینه</div>
                               <div className="status_card">وارد نشده</div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Maincards;