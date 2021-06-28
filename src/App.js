import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'
import Profile from './components/Profile/Profile.jsx'
import News from './components/News/News.jsx'
import Music from './components/Music/Music.jsx'
import Settings from './components/Settings/Settings.jsx'



const App = () => {
  return (
    <BrowserRouter>
    <div className='wrapper'>
      
      <Header/>
      <Navbar/>
      <div className='wrapper-content'>        
        <Route path='/dialogs' component={Dialogs}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/news' component={News}/> 
        <Route path='/mymusic' component={Music}/> 
        <Route path='/settings' component={Settings}/>        
      </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
