import React from 'react';
import {Navbar, Hero, MoviesIntro, CharactersIntro, RealmsIntro, CharactersPage, MoviesPage, RealmsPage} from './components/index';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
           <Route path="/" element={<><Hero/> <MoviesIntro /> <CharactersIntro/> <RealmsIntro/></>}/>
           <Route path="/characters" element={<><CharactersPage/></>} />
           <Route path="/movies" element={<><MoviesPage/></>} />
           <Route path="/realms" element={<><RealmsPage/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
