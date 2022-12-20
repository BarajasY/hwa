import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CharactersIntro.css';
import {/* teku, maniacs, drones, silencerz,  */allImages} from './Images';

const CharactersIntro = () => {
  const navigate = useNavigate();

  console.log(allImages);
  
  return (
    <div className="char_container">
      <div className="char_content">
        <motion.h1 className="char_header" initial={{opacity:0}} whileInView={{opacity:1}} onClick={() => navigate('./characters')}>Characters</motion.h1>
        <section>
          {allImages.map((d) => (
            <div className="charImage">
              <img src={d} alt="Character" id="Image" onClick={() => navigate('/characters')}/>
              <img src={d} alt="Character" id="Blur"/>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default CharactersIntro