import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CharactersIntro.css';
import {/* teku, maniacs, drones, silencerz,  */allImages} from './Images';

const CharactersIntro = () => {
  const navigate = useNavigate();
  
  return (
    <div className="char_container">
      <div className="char_content">
        <motion.h1 className="char_header" initial={{opacity:0}} whileInView={{opacity:1}} onClick={() => navigate('./characters')}>Characters</motion.h1>
        <section>
          {allImages.map((d, i) => (
            <motion.div className="charImage" key={i} initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:.5, delay:.1*i}} viewport={{once:true}}>
              <img src={d} alt="Character" id="Image" onClick={() => navigate('/characters')}/>
              <img src={d} alt="Character" id="Blur"/>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default CharactersIntro