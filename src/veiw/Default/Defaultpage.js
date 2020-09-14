import React from 'react';
import './Default.css'
//components
import Header from './../../components/Header/Header';
import Maincards from './../../components/Maincards/Maincards';


class Deafultpage extends React.Component {
    render() {
        return (
            <div className="defaultt">
                <Header />
                <Maincards />
                
            </div>
        )
    }
}

export default Deafultpage;