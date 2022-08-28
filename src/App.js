import React from 'react';
import "./style.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Video from './pages/Video';
import Films from './pages/Films';
import Home from './pages/Home';
import Series from './pages/Series';
import Cartoons from './pages/Cartoons';
import Admin from './pages/Admin';


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
        <Route path='filmoteka/admin' element = {<Admin />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;