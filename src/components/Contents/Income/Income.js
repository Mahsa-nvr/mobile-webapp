import React from 'react';
// import axios from 'axios';
import { HandleChange } from './../../../share/Utility';

import './Income.css';
class Income extends React.Component {

    state = {
       selectInput: "",
       numInput: "",
       dateInput: ""
    }

    // componentDidMount() {
    //    axios({    
    //     method: 'POST',
    //     url: 'https://192.168.22.48/ipfm/frontend/web/index.php/expenditures/create',
    //     body:{
    //        amount:1
    //     },
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'multipart/form-data'
    //     }
    //    }).then(res => console.log(res)
    //    ).then(err => console.log(err)) 
    // }



    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        const {selectInput, numInput, dateInput } = this.state
        return (
            <div className="incomee">
                     <div className="col">
                         <form onSubmit={this.handleSubmit}>
                         <div className="form-group">
                            <label >نوع درآمد</label>
                               <select className="form-control" id="selectInput" name="selectInput" value={selectInput} onChange={(e) => HandleChange.call(this, e)}>
                                   <option> </option>
                                  <option>هدیه</option>
                                  <option>درآمد</option>
                                  <option>سایر</option>
                               </select>

                               <label htmlFor="">مبلغ</label>
                               <input type="number" className="form-control" id="numInput"  name="numInput" value={numInput} onChange={(e) => HandleChange.call(this, e)}/>

                               <label htmlFor="">تاریخ</label>
                               <input type="text" className="form-control" id="dateInput" name="dateInput" value={dateInput} onChange={(e) => HandleChange.call(this, e)}/>

                                 <button type="submit">send</button>
                             </div>
                         </form>
                     </div>
            </div>
        )
    }
}

export default Income;