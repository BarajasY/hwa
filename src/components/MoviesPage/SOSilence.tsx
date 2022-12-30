import { motion } from 'framer-motion';
import React from 'react';
import Speed from '../../assets/movie2.webp'

const SOSilence = () => {
  return (
    <div className="wr_container">
        <div className="wr_content">
            <div className="wr_first">
                <motion.div className="wr_image" initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}}>
                    <img src={Speed} alt="Speed of Silence" />
                    <img src={Speed} alt="Speed of Silence" />
                </motion.div>
            </div>
            <div className="wr_second">
                <motion.div className="wr_title" initial={{opacity: 0, y: -60}} whileInView={{opacity: 1, y:0}}>
                    <div className="wr_main">
                        <h1 id="wr_t">Speed of Silence</h1>
                    </div>
                    <div className="wr_sub">
                        <h1>Speed of Silence</h1>
                        <h1>Speed of Silence</h1>
                        <h1>Speed of Silence</h1>
                    </div>
                </motion.div>
                <div className="wr_description">
                    <motion.p initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y:0}}>The prequel to the main series, but, in it's own it provides an incredible story with amazing characters that would later serve as a strong foundation for the next 4 movies.</motion.p>
                    <div className="wr_attributes">
                        <article>
                            <motion.section  initial={{x: 20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Title</h1>
                                <p>Speed of Silence</p>
                            </motion.section>
                            <motion.section initial={{x: -20, opacity: 0}} whileInView={{x:0, opacity: 1}}>
                                <h1>Order</h1>
                                <p>Second</p>
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

export default SOSilence