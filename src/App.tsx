import React from 'react';
import {Navbar, Hero, MoviesIntro, CharactersIntro} from './components/index';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
           <Route path="/" element={<><Hero/> <MoviesIntro /> <CharactersIntro/></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
