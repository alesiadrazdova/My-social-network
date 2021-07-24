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



const App = (props) => {
   
  return (
    <BrowserRouter>
    <div className='wrapper'>
      
      <Header/>
      <Navbar/>
      <div className='wrapper-content'>        
        <Route exact path='/dialog' render={() => <Dialogs data={props.data.messagesPage} />}/>
        <Route exact path='/profile' render={ () => <Profile data={props.data.profilePage} addPost={props.addPost}/>}/>
        <Route exact path='/news' component={News}/> 
        <Route exact path='/mymusic' component={Music}/> 
        <Route exact path='/settings' component={Settings}/>        
      </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
