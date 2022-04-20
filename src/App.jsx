import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';


const App = (props) => {


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<Dialogs 
                  Data={props.state.messagesPage} />}/>
            <Route path="/profile" element={<Profile 
                   myPostsData={props.state.profilePage}
                   dispatch={props.dispatch} />}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music />}/>
            <Route path="/setting" element={<Setting />}/>

          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}


export default App;
