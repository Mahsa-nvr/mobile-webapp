import React from 'react';
import './Default.css'
//components
import Header from './../../components/Header/Header';
import Maincards from './../../components/Maincards/Maincards';
import Defaultchart from '../../components/Defaultchart/Defaultchart';


class Deafultpage extends React.Component {
    render() {
        return (
            <div className="defaultt">
                <Header />
                <Maincards /> 
                <Defaultchart />            
            </div>
        )
    }
}

export default Deafultpage;