import logo from './logo.svg';
import './App.css';
import React, { useState }  from 'react';
import {Hello} from './HelloWorldComponent'
import {Todo} from './Todo'
import {store} from './actions/store'
import {Provider} from 'react-redux'
import DCandidates from './components/DCandidates';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Login from './components/login';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './context/auth';
export function App() {
  const existingToken  = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingToken);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  // return (
  //   <div className="App">
  //     {/* <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header> */}
      
  //       {/* <Hello name="Sara"/>
  //       <Hello name="Bala"/>
  //       <Hello name="Chris"/> */}
  //       <Todo />
      
  //   </div>
  // );
// return (
//   <Provider store={store}>
//     <DCandidates />
//   </Provider>
// );

return(
  <AuthContext.Provider value={{authTokens , setAuthTokens: setTokens}}>
    <Router>
      <div>
        <Switch> 
          <Route exact path='/' component={Login} />
          <PrivateRoute  path='/todo' component={Todo} />
        </Switch>
      </div>  
    </Router>
  </AuthContext.Provider>
  );
}
/* <div className="jumbotron jumbotron-fluid py-2">
    <div className="container">
      <h1 className="display-2">Todo App</h1>  
      <Todo />    
    </div>
  </div> */
export default App;
