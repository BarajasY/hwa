import React, { useState } from 'react';
import './Movies_intro.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Movies_intro = () => {
  const [Movie, setMovie] = useState<String>("See More")


  return (
    <div className="mi_container">
        <div className="mi_content">
          <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}}>4 Movies 1 Prequel, 5 legends</motion.h1>
            <motion.section initial={{opacity:0}} whileInView={{opacity:1}}>
                <div className="movImage" id="World" onMouseEnter={() => setMovie("World Race")}></div>
                <div className="movImage" id="Ignition" onMouseEnter={() => setMovie("Ignition")}></div>
                <div className="movImage" id="Silence" onMouseEnter={() => setMovie("Speed of Silence")}></div>
                <div className="movImage" id="Breaking" onMouseEnter={() => setMovie("Breaking Point")}></div>
                <div className="movImage" id="Ultimate" onMouseEnter={() => setMovie("The Ultimate Race")}></div>
            </motion.section>
            <div className="buttonWrapper">
              <motion.button initial={{opacity: 0}} whileInView={{opacity: 1}}><Link to="/movies">{Movie}</Link></motion.button>
            </div>
        </div>
    </div>
  )
}

export default Movies_intro