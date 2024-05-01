import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {FaBars,FaTimes} from 'react-icons/fa'
import { useRef } from 'react'


const Navbar = () => {
    const navRef = useRef();
    const showNavBar = ()=>{
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <>
            <header className='navBar'>
                <ul ref={navRef}>
                    <li><Link to='/' style={{textDecoration:'none'}} className='Link'>Profile</Link></li>
                    <li><Link to='/product' className='Link'>Projects</Link></li>
                    <li><Link to='/contact' className='Link'>Education</Link></li>
                    <li><Link to='/about' className='Link'>Contact</Link></li>
                    <button className='nav-btn nav-close' onClick={showNavBar}><FaTimes/></button>
                </ul>
                <button className='nav-btn nav-open' onClick={showNavBar}><FaBars/></button>
            </header>
        </>
    )
}

export default Navbar