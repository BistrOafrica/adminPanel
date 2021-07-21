import React from 'react';
import LogIn from './LogIn';
import MainPage from './MainPage';
import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  const loggedIn = false

  return (
    <>

    {loggedIn ? <MainPage /> :<LogIn />}

    <Router>
      <Switch>
        <Route path='/'/>
      </Switch>
      
    </Router>
    
    
    </>
  );
}

export default App;
