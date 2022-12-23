import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RealmsIntro.css';

const RealmsIntro = () => {
    const navigate = useNavigate()

  return (
    <div className="realmsContainer">
        <div className="realmsContent">
            <motion.div className="chargers" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:1}} viewport={{once:true}}>
                <div className="circle">
                    <h1>25</h1>
                </div>
                <h1>Accelechargers</h1>
                <p>Many accelechargers that grant unique habilities to aid any driver in a race.</p>
            </motion.div>
            <motion.div className="realms" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:1}} viewport={{once:true}}>
                <div className="circle">
                    <h1>25</h1>
                </div>
                <h1>Realms</h1>
                <p>Incredible and special realms that target a specific skill that a racer must have.</p>
            </motion.div>
        </div>
        <motion.button className="realmsButton" onClick={() => navigate('/realms')} initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:.5}} viewport={{once:true}}>
            Dive in
        </motion.button>
    </div>
  )
}

export default RealmsIntro