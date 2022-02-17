import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';



const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} />} />
              <Route path='/profile' element={<Profile state={props.state.profilePage} />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/friends/*' element={<Friends state={props.state.sidebar} sidebar={props.state.sidebar} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>);
}

export default App;