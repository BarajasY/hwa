import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RealmsIntro.css';

const RealmsIntro = () => {
    const navigate = useNavigate()

  return (
    <div className="realmsContainer">
        <div className="realmsContent">
            <div className="chargers">
                <div className="circle">
                    <h1>25</h1>
                </div>
                <h1>Accelechargers</h1>
                <p>Many accelechargers that grant unique habilities to aid any driver in a race.</p>
            </div>
            <div className="realms">
                <div className="circle">
                    <h1>25</h1>
                </div>
                <h1>Realms</h1>
                <p>Incredible and special realms that target a specific skill that a racer must have.</p>
            </div>
        </div>
        <button className="realmsButton" onClick={() => navigate('/realms')}>
            Dive in
        </button>
    </div>
  )
}

export default RealmsIntro