import React from 'react';
import Speed from '../../assets/movie2.webp'

const SOSilence = () => {
  return (
    <div className="wr_container">
        <div className="wr_content">
            <div className="wr_first">
                <div className="wr_image">
                    <img src={Speed} alt="Speed of Silence" />
                    <img src={Speed} alt="Speed of Silence" />
                </div>
            </div>
            <div className="wr_second">
                <div className="wr_title">
                    <div className="wr_main">
                        <h1 id="wr_t">Speed of Silence</h1>
                    </div>
                    <div className="wr_sub">
                        <h1>Speed of Silence</h1>
                        <h1>Speed of Silence</h1>
                        <h1>Speed of Silence</h1>
                    </div>
                </div>
                <div className="wr_description">
                    <p>The prequel to the main series, but, in it's own it provides an incredible story with amazing characters that would later serve as a strong foundation for the next 4 movies.</p>
                    <div className="wr_attributes">
                        <article>
                            <section>
                                <h1>Title</h1>
                                <p>Speed of Silence</p>
                            </section>
                            <section>
                                <h1>Order</h1>
                                <p>Second</p>
                            </section>
                        </article>
                        <article>
                            <section>
                                <h1>Duration</h1>
                                <p>1hr</p>
                            </section>
                            <section>
                                <h1>Release Date</h1>
                                <p>2005</p>
                            </section>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SOSilence