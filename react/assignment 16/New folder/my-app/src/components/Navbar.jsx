import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <div>
        
        
      
        <Link to='/'>Home</Link>
        <Link to='/contact-us'>Contact</Link>
        <Link to='/about'>About</Link>
        <Link to='/students'>Students</Link>
        <Link to='/Login'>Login</Link>
        </div>
    </nav>
  )
}
