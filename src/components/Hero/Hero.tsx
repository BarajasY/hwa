import React from 'react';
import './Hero.css';
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero_container">
        <div className="hero_content">
            <section>
                <h1><span>A brief</span><span> introduction</span><span> to the classic</span><span> series</span></h1>
            </section>
            <section>
                <button><Link to="/movies">Discover</Link></button>
            </section>
            <div className="line" id="teku"></div>
            <div className="line" id="maniacs"></div>
            <div className="line" id="silencerz"></div>
            <div className="line" id="drones"></div>
        </div>
    </div>
  )
}

export default Hero