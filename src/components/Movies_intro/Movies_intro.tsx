import React, { useState } from 'react';
import './Movies_intro.css';
import Ignition from '../../assets/movie1.webp';
import Silence from '../../assets/movie2.webp';
import Breaking from '../../assets/movie3.webp';
import Ultimate from '../../assets/movie4.webp';
import World from '../../assets/world.webp';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Movies_intro = () => {
  const [Movie, setMovie] = useState<String>("See More")


  return (
    <div className="mi_container">
        <div className="mi_content">
          <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}}><span>4</span><span> Movies</span><span> 1</span><span> Prequel</span></motion.h1>
            <motion.section initial={{opacity:0}} whileInView={{opacity:1}}>
                <img src={World} alt="World Race" onMouseEnter={() => setMovie("World Race")}/>
                <img src={Ignition} alt="Ignition" onMouseEnter={() => setMovie("Ignition")}/>
                <img src={Silence} alt="Speed of Silence" onMouseEnter={() => setMovie("Speed of Silence")}/>
                <img src={Breaking} alt="Breaking Point" onMouseEnter={() => setMovie("Breaking Point")}/>
                <img src={Ultimate} alt="Ultimate Race" onMouseEnter={() => setMovie("The Ultimate Race")}/>
            </motion.section>
            <div className="buttonWrapper">
              <motion.button initial={{opacity: 0}} whileInView={{opacity: 1}}><Link to="/movies">{Movie}</Link></motion.button>
            </div>
        </div>
    </div>
  )
}

export default Movies_intro