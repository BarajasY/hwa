import { motion } from 'framer-motion';
import React from 'react';
import ignition from '../../assets/movie1.webp';
import './WRace.css'

const Ignition = () => {
  return (
    <div className="wr_container">
        <div className="wr_content">
            <div className="wr_second">
                <motion.div className="wr_title" initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}}>
                    <div className="wr_main">
                        <h1 id="ig_t">Ignition</h1>
                    </div>
                    <div className="wr_sub">
                        <h1>Ignition</h1>
                        <h1>Ignition</h1>
                        <h1>Ignition</h1>
                    </div>
                </motion.div>
                <div className="wr_description">
                    <motion.p initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y:0}}>The first movie of the series. Introduces us to the new changed world that World Race left, seeing new characters aswell as old ones. This movie also shows the main focus the series will have, which is the racing drones threat and the racing realms.</motion.p>
                    <div className="wr_attributes">
                        <article>
                            <motion.section initial={{x: -20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Title</h1>
                                <p>Ignition</p>
                            </motion.section>
                            <motion.section initial={{x: 20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Order</h1>
                                <p>First</p>
                            </motion.section>
                        </article>
                        <article>
                            <motion.section initial={{x: 20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Duration</h1>
                                <p>1hr</p>
                            </motion.section>
                            <motion.section initial={{x: -20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Release Date</h1>
                                <p>2005</p>
                            </motion.section>
                        </article>
                    </div>
                </div>
            </div>
            <div className="wr_first">
                <motion.div className="wr_image" initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}}>
                    <img src={ignition} alt="Ignition" />
                    <img src={ignition} alt="Ignition" />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Ignition