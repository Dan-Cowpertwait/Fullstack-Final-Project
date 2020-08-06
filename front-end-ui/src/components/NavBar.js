import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
            <div className="navbar">
            <Link className="nav-item" to="/home">Home</Link>
            <br />
            <Link className="nav-item" to="/characters">Characters</Link>
            <br />
            <Link className="nav-item" to="/characters/new">New Character</Link>
            <br />
            <Link className="nav-item" to="/weapons">Weapon References</Link>
          </div>
    );
}

export default NavBar;
