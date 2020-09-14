import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import './App.css';

//components
// import Setincome from './veiw/Setincome/Setincome';
import Defaultpage from './veiw/Default/Defaultpage';

function App() {
  return (
    <div className = "app">
       {/* <Setincome /> */}
       <Defaultpage />
    </div>
  );
}

export default App;
