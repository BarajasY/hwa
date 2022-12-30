import { motion } from 'framer-motion';
import React from 'react';
import BreakingPoint from '../../assets/movie3.webp'

const BPoint = () => {
  return (
    <div className="wr_container">
        <div className="wr_content">
            <div className="wr_second">
                <motion.div initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} className="wr_title">
                    <div className="wr_main">
                        <h1 id="bp_t">Breaking Point</h1>
                    </div>
                    <div className="wr_sub">
                        <h1>Breaking Point</h1>
                        <h1>Breaking Point</h1>
                        <h1>Breaking Point</h1>
                    </div>
                </motion.div>
                <div className="wr_description">
                    <motion.p initial={{opacity :0, y: 50}} whileInView={{opacity: 1, y: 0}}>The first movie of the series. Introduces us to the new changed world that World Race left, seeing new characters aswell as old ones. This movie also shows the main focus the series will have, which is the racing drones threat and the racing realms.</motion.p>
                    <div className="wr_attributes">
                        <article>
                            <motion.section initial={{x: -20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Title</h1>
                                <p>Breaking Point</p>
                            </motion.section>
                            <motion.section initial={{x: 20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Order</h1>
                                <p>Third</p>
                            </motion.section>
                        </article>
                        <article>
                            <motion.section initial={{x: -20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Duration</h1>
                                <p>1hr</p>
                            </motion.section>
                            <motion.section initial={{x: 20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Release Date</h1>
                                <p>2005</p>
                            </motion.section>
                        </article>
                    </div>
                </div>
            </div>
            <div className="wr_first">
                <motion.div className="wr_image" initial={{opacity: 0, y: -50}} whileInView={{opacity :1, y: 0}}>
                    <img src={BreakingPoint} alt="Ignition" />
                    <img src={BreakingPoint} alt="Ignition" />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default BPoint