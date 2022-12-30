import React from 'react';
import worldr from '../../assets/world.webp';
import { motion } from 'framer-motion';

const WRace = () => {
  return (
    <div className="wr_container">
        <div className="wr_content">
            <div className="wr_first">
                <motion.div className="wr_image" initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y:0}}>
                    <img src={worldr} alt="World Race" />
                    <img src={worldr} alt="World Race" />
                </motion.div>
            </div>
            <div className="wr_second">
                <motion.div className="wr_title" initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}}>
                    <div className="wr_main">
                        <h1 id="wr_t">World Race</h1>
                    </div>
                    <div className="wr_sub">
                        <h1>World Race</h1>
                        <h1>World Race</h1>
                        <h1>World Race</h1>
                    </div>
                </motion.div>
                <div className="wr_description">
                    <motion.p initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}}>The prequel to the main series, but, in it's own it provides an incredible story with amazing characters that would later serve as a strong foundation for the next 4 movies.</motion.p>
                    <div className="wr_attributes">
                        <article>
                            <motion.section initial={{x: -20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Title</h1>
                                <p>World Race</p>
                            </motion.section>
                            <motion.section initial={{x: 20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Order</h1>
                                <p>Prequel</p>
                            </motion.section>
                        </article>
                        <article>
                            <motion.section initial={{x: 20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Duration</h1>
                                <p>1hr 50m</p>
                            </motion.section>
                            <motion.section initial={{x: -20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Release Date</h1>
                                <p>December 2, 2003</p>
                            </motion.section>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WRace