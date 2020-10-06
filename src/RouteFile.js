import React from 'react';
// import {  Route,  browserHistory } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom'


import {
  BrowserRouter as Router,
  HashRouter,
  Route
} from 'react-router-dom';


import Register from './veiw/Register/Register';
// import Setincome from './veiw/Setincome/Setincome';
import Defaultpage from './veiw/Default/Defaultpage';
import IncomePage from './veiw/IncomePage/IncomePage';
import AssetPage from './veiw/AssetPage/AssetPage';
import PayKhomse from './veiw/PayKhoms/PayKhoms';



class RouteFile extends React.Component {
    render(){
        return (
              <div>
               <HashRouter>
            <div>
              <Router>
                <Route exact path="/" render={()=><Register />}/>
                <Route path="/Defaultpage" render={()=><Defaultpage />}/>
                <Route path="/AssetPage" render={()=><AssetPage />}/>
                <Route path="/IncomePage" render={()=><IncomePage />}/>
                <Route path="/PayKhomse" render={()=><PayKhomse />}/>
                </Router>
            </div>
        </HashRouter >

               
              </div>
        )
    }
}

export default RouteFile;