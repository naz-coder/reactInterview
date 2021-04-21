import React from 'react';
import './App.css';
import Login from './login';
import Account from './account';
import {Router, Switch} from 'react-router-dom';

function App(props) {
  return (
    <div className="container">
    <Login/>
    <Account/>
    </div>
    // <switch>
    //         <route path="/accont"></route><Account/>
    // </switch>
  );
}
// class account extends Component{
//   render(){
//     return(
//     <div className="secondPage">
//           <switch>
//             <route path="/accont"></route><Account/>
//           </switch>
//       </div>
//     )
//   }
// }

export default App;
