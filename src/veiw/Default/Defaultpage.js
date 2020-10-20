import React from 'react';
import './Default.css'
//components
import Header from './../../components/Header/Header';
import Maincards from './../../components/Maincards/Maincards';
import Defaultchart from '../../components/Defaultchart/Defaultchart';
import DefaultLineChart from './../../components/DefaultLineChart/DefaultLineChart';
import HomeCrud from './../../components/Cruds/HomeCrud/HomeCrud';
import Footer from './../../components/Footer/Footer';

class Deafultpage extends React.Component {
    render() {
        return (
            <div className="defaultt">
                <Header />
                <Maincards /> 
                <Defaultchart />
                <DefaultLineChart/>  
                <HomeCrud />
                <Footer />          
            </div>
        )
    }
}

export default Deafultpage;