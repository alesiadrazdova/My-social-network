import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News.jsx'
import Music from './components/Music/Music.jsx'
import Settings from './components/Settings/Settings.jsx'
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <div className='wrapper-content'>
        <Route path='/profile' render={() => <ProfileContainer />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route exact path='/news' component={News} />
        <Route exact path='/mymusic' component={Music} />
        <Route exact path='/settings' component={Settings} />
      </div>
    </div>
  );
}


export default App;
