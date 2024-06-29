import React from 'react'
import img from '../images/logo.jpeg'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className='logo'>
            <img src={img} alt="" />
        </div>
        <ul>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
        <div>
            <button>Login</button>
        </div>
      </nav>
    </div>
  )
}
