import React from 'react';
import './MoviesPage.css';
import  WRace  from './WRace';
import Ignition from './Ignition';
import SOSilence from './SOSilence';
import BPoint from './BPoint';
import URace from './URace';

const MoviesPage = () => {

  return (
    <div className="movies_container">
        <div className="movies_content">
            <WRace/>
            <Ignition/>
            <SOSilence/>
            <BPoint/>
            <URace/>
        </div>
    </div>
  )
}

export default MoviesPage