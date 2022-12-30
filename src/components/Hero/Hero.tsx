import React from 'react';
import './Hero.css';
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="hero_container">
        <div className="hero_content">
            <section>
                <motion.h1 initial={{y: 50, opacity: 0}} whileInView={{opacity: 1, y:0}} transition={{duration: .5}}><span>A brief</span><span> introduction</span><span> to the classic</span><span> series</span></motion.h1>
            </section>
            <section>
                <motion.button initial={{y: -50, opacity: 0}} whileInView={{opacity: 1, y:0}} transition={{duration: 1}}><Link to="/movies">Discover</Link></motion.button>
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