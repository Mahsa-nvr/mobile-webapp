import React from 'react';
import './App.css';
// import 'react-datepicker2/dist/react-datepicker2.min.css';

//components
// import Setincome from './veiw/Setincome/Setincome';
// import Defaultpage from './veiw/Default/Defaultpage';
// import IncomePage from './veiw/IncomePage/IncomePage';
// import AssetPage from './veiw/AssetPage/AssetPage';
import PayKhomse from './veiw/PayKhoms/PayKhoms';

function App() {
  return (
    <div className = "app">
       {/* <Setincome /> */}
       {/* <Defaultpage /> */}
       {/* <IncomePage /> */}
       {/* <AssetPage /> */}
       <PayKhomse />
    </div>
  );
}

export default App;
