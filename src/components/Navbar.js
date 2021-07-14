import React from 'react';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container">
<a className="navbar-brand" href="/"><img className='logo' src={logo} alt='logo'/></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} />
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav nav justify-content-end">
        <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#about">About Me</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
    </li>
    
    </ul>
</div>
</div>
</nav>
    )
}

export default Navbar
