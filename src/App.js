import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import './App.css';
// import 'react-datepicker2/dist/react-datepicker2.min.css';

//components
// import Setincome from './veiw/Setincome/Setincome';
// import Defaultpage from './veiw/Default/Defaultpage';
import IncomePage from './veiw/IncomePage/IncomePage';

function App() {
  return (
    <div className = "app">
       {/* <Setincome /> */}
       {/* <Defaultpage /> */}
       <IncomePage />
    </div>
  );
}

export default App;
