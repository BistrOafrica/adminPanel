import React /*,{useState, useEffect }*/from 'react';
import SignIn from './Admin/LogIn';
import Menus from './Admin/Menus';
import './app.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Map from './Admin/Maps';
import Admin from './Admin/Pages/Admin';
import Corporate from './Admin/Pages/Corporate';
import CustomerCare from './Admin/Pages/CustomerCare';
import Dispatch from './Admin/Pages/Dispatch';
import DownloadData from './Admin/Pages/DownloadData';
import Drivers from './Admin/Pages/Drivers';
import Riders from './Admin/Pages/Riders';
import Trips from './Admin/Pages/Trips';
import Settings from './Admin/Pages/Settings';
import Statistics from './Admin/Pages/Statistics';
import Referrals from './Admin/Pages/Referrals';
import DashBoard from './Admin/Pages/DashBoard';
import Data from './Admin/Data'



function App() {
    
const LoggedIn=true
  return (
    <>
    {LoggedIn? 
    <Router>
      <div className='App'>
        <Menus />
        <Switch>
          <Route path='/LiveMap' component={Map} />
          <Route path='/Admin' component={Admin} />
          <Route path='/Corporate' component={Corporate} />
          <Route path='/CustomerCare' component={CustomerCare} />
          <Route path='/Dispatch' component={Dispatch} />
          <Route path='/Data' component={DownloadData} />
          <Route path='/Drivers' component={Drivers} />
          <Route path='/Riders' component={Riders} />
          <Route path='/Trips' component={Trips} />
          <Route path='/Settings' component={Settings} />
          <Route path='/Statistics' component={Statistics} />
          <Route path='/Referrals' component={Referrals} />
          <Route path='/DData' component={Data}/>
          <Route path='/' component={DashBoard} />
        </Switch>
      </div>
    </Router>:<SignIn />}

    </>
  );
}

export default App;
