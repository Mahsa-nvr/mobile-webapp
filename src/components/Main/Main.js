import React from 'react';
import Titlepage from './../Titlepage/Titlepage';
import Income from './../Contents/Income/Income';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
               <div className="main">
                   <Titlepage income="ثبت درآمد"/>
                   <Income />
                </div>
            </React.Fragment>
        )
    }
}

export default Main;