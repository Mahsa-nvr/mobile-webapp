import React from 'react';
import './Titlepage.css';

class Titlepage extends React.Component {
   
    render(props) {
        return (
            <div className="title">{this.props.income} </div>
        )
    }
}

export default Titlepage;