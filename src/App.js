import React from 'react';
import LogIn from './Admin/LogIn';
import MainPage from './Admin/MainPage';
import './app.scss';



function App() {
  const loggedIn = true

  return (
    <>

    {loggedIn ? <MainPage /> :<LogIn />}

    </>
  );
}

export default App;
