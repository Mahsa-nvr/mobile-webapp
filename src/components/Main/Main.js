import React from 'react';
import Titlepage from './../Titlepage/Titlepage';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
               <div className="main">
                   <Titlepage income="ثبت درآمد"/>
                </div>
            </React.Fragment>
        )
    }
}

export default Main;