import React from 'react';
import './Default.css'
//components
import Header from './../../components/Header/Header';
import Maincards from './../../components/Maincards/Maincards';
import Defaultchart from '../../components/Defaultchart/Defaultchart';
import DefaultLineChart from './../../components/DefaultLineChart/DefaultLineChart';
import HomeCrud from './../../components/Cruds/HomeCrud/HomeCrud';

class Deafultpage extends React.Component {
    render() {
        return (
            <div className="defaultt">
                <Header />
                <Maincards /> 
                <Defaultchart />
                <DefaultLineChart/>  
                <HomeCrud />          
            </div>
        )
    }
}

export default Deafultpage;