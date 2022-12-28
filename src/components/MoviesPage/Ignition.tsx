import React from 'react';
import ignition from '../../assets/movie1.webp';
import './WRace.css'

const Ignition = () => {
  return (
    <div className="wr_container">
        <div className="wr_content">
            <div className="wr_second">
                <div className="wr_title">
                    <div className="wr_main">
                        <h1 id="ig_t">Ignition</h1>
                    </div>
                    <div className="wr_sub">
                        <h1>Ignition</h1>
                        <h1>Ignition</h1>
                        <h1>Ignition</h1>
                    </div>
                </div>
                <div className="wr_description">
                    <p>The first movie of the series. Introduces us to the new changed world that World Race left, seeing new characters aswell as old ones. This movie also shows the main focus the series will have, which is the racing drones threat and the racing realms.</p>
                    <div className="wr_attributes">
                        <article>
                            <section>
                                <h1>Title</h1>
                                <p>Ignition</p>
                            </section>
                            <section>
                                <h1>Order</h1>
                                <p>First</p>
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
            <div className="wr_first">
                <div className="wr_image">
                    <img src={ignition} alt="Ignition" />
                    <img src={ignition} alt="Ignition" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ignition