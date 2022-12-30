import { motion } from 'framer-motion';
import React from 'react';
import UltiRace from '../../assets/movie4.webp';

const URace = () => {
  return (
    <div className="wr_container">
        <div className="wr_content">
            <div className="wr_first">
                <motion.div className="wr_image" initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}}>
                    <img src={UltiRace} alt="Ultimate Race" />
                    <img src={UltiRace} alt="Ultimate Race" />
                </motion.div>
            </div>
            <div className="wr_second">
                <motion.div className="wr_title" initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}}>
                    <div className="wr_main">
                        <h1 id="ur_t">Ultimate Race</h1>
                    </div>
                    <div className="wr_sub">
                        <h1>Ultimate Race</h1>
                        <h1>Ultimate Race</h1>
                        <h1>Ultimate Race</h1>
                    </div>
                </motion.div>
                <div className="wr_description">
                    <motion.p initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}}>Last movie in the series having an open ending, the best movie of the series in my opinion.</motion.p>
                    <div className="wr_attributes">
                        <article>
                            <motion.section initial={{x: 20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Title</h1>
                                <p>Ultimate Race</p>
                            </motion.section>
                            <motion.section initial={{x: -20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Order</h1>
                                <p>Last</p>
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
        </div>
    </div>
  )
}

export default URace