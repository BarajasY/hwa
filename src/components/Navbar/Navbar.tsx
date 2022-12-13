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
            <section>
                <Link to="/Realms">Realms</Link>
                <Link to="/Characters">Characters</Link>
                <Link to="/Movies">Movies</Link>
            </section>
        </div>
    </div>
  )
}

export default Navbar