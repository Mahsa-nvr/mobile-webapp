import React from 'react';
// import {  Route,  browserHistory } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom'


import {
  BrowserRouter as Router,
  HashRouter,
  Route
} from 'react-router-dom';


import Register from './veiw/Register/Register';
import Login from './veiw/Login/Login';
// import Setincome from './veiw/Setincome/Setincome';
import Defaultpage from './veiw/Default/Defaultpage';
import IncomePage from './veiw/IncomePage/IncomePage';
import AssetPage from './veiw/AssetPage/AssetPage';
import PayKhomse from './veiw/PayKhoms/PayKhoms';
import TestPage from './veiw/TestPage/TestPage';
import Spend from './veiw/SpendPage/Spend';
import Profile from './veiw/Profile/Profile';
import Chat from './veiw/Chat/Chat';
import Signout from './veiw/Signout/Signout';
import Mainprofile from './veiw/Mainprofile/Mainprofile';


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
                <Route path="/test" render={()=><TestPage/>} />
                <Route path="/spend" render={()=><Spend/>} />
                <Route path="/profile" render={()=><Profile/>} />
                <Route path="/login" render={()=><Login/>} />
                <Route path="/chat" render={()=><Chat/>} />
                <Route path="/signup" render={()=><Signout/>} />
                <Route path="/register/profile" render={()=><Mainprofile/>} />
              </Router>
            </div>
        </HashRouter >

               
              </div>
        )
    }
}

export default RouteFile;