import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './Navbar.css'
class Navbar extends Component{
    render(){
        return(
            <nav className='Navbar'>
                <NavLink className='Navbar-Item' exact activeClassName='Navbar-Item-Active' to='/'>Home</NavLink>
                <NavLink className='Navbar-Item' exact activeClassName='Navbar-Item-Active' to='/cola'>Cola</NavLink>
                <NavLink className='Navbar-Item' exact activeClassName='Navbar-Item-Active' to='/hotdog'>Hotdog</NavLink>
                <NavLink className='Navbar-Item' exact activeClassName='Navbar-Item-Active' to='/chips'>Chips</NavLink>
            </nav>
        )
    }
}
export default Navbar