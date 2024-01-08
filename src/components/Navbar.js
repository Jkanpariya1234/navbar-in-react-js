import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';
import DarkMode from './Darkmode/DarkMode';
import logo from './images/logo.png'

const Navbar = () => {
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
                <div className="container py-2">
                    <Link className="navbar-brand" to="/home">Waleedcodes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse align-middle" id="navbarNav">
                        <ul className="navbar-nav ms-auto nav_ul align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/service">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <div className="mx-3">
                                <button type="button" className="btn1 mx-2">Login</button>
                                <button type="button" className="btn2 mx-2">Sign Up</button>
                            </div>
                            <DarkMode />
                        </ul>
                    </div>
                </div>
            </nav> */}
            <header>
                <nav>
                    <ul class='nav-bar'>
                        <li class='logo'><Link href='#'><img src={logo} /></Link></li>
                        <input type='checkbox' id='check' />
                        <span class="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/service">Services</Link></li>
                            <li><Link to="/portfolio">portfolio</Link></li>
                            <li><Link to="/contact">contact</Link></li>
                            <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
                            <DarkMode />
                        </span>
                        <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
                    </ul>
                    
                </nav>
            </header>
        </>
    )
}

export default Navbar
