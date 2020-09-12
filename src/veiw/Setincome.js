import React from 'react';
import './test.css';
//components
import Footer from './../components/Footer/Footer';
import Header from './../components/Header/Header';
import Main from './../components/Main/Main';


class Setincome extends React.Component {
   render() {
       return (
           <div className="test">
            <Header />
             <Main />
            <Footer />
            </div>
       )
   } 
}

export default Setincome;