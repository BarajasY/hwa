import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="nav_container">
        <div className="nav_content">
            <section>
                <Link to="/"><h1>Acceleracers</h1></Link>
            </section>
            <section className="links_wrapper">
                <Link to="/movies">Movies</Link>
                <Link to="/Characters">Characters</Link>
                <Link to="/realms">Realms</Link>
            </section>
        </div>
    </div>
  )
}

export default Navbar