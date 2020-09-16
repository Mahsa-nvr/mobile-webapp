import React from 'react';
import './Maincards.css';


import daramad from './../../assets/icons/daramad.png';
import darayi from './../../assets/icons/darayi.png';
import hazine from './../../assets/icons/hazine.png';
import sharee from './../../assets/icons/sharee.png';


class Maincards extends React.Component {
    render() {
        return (
            <div className="maincards">
                <div className="container">
                    <div className="row">
                        <div className="col col_part">
                           <div className="card_part">
                               <img src={darayi} height="60"  alt=""/>
                               <div className="text_card">دارایی</div>
                               <div className="status_card">وارد نشده</div>
                           </div>
                        </div>
                        <div className="col col_part">
                           <div className="card_part">
                               <img src={sharee}  height="60" alt=""/>
                               <div className="text_card">وجوهات شرعی</div>
                               <div className="status_card">وارد نشده</div>
                           </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col_part">
                            <div className="card_part">
                               <img src={daramad}  height="60" alt=""/>
                               <div className="text_card">درآمد</div>
                               <div className="status_card">وارد نشده</div>
                           </div>
                        </div>
                        <div className="col col_part">
                           <div className="card_part">
                               <img src={hazine}  height="60" alt=""/>
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