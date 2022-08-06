import React from 'react';
import "./style.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Video from './pages/Video';
import Films from './pages/Films';
import Home from './pages/Home';
import Series from './pages/Series';
import Cartoons from './pages/Cartoons';


function App() {
  return (
    <div className='site'>
    <BrowserRouter>
      <Routes>
        <Route path='filmoteka/*' element = {<Home />} />
        <Route path='filmoteka/films' element = {<Films />} />
        <Route path='filmoteka/series' element = {<Series />} />
        <Route path='filmoteka/cartoons' element = {<Cartoons />} />
        <Route path='filmoteka/video/:id' element = {<Video />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;


/*

<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>

*/