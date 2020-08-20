import React, { Component } from 'react'
import './VendingMachine.css'
import vmImage from './vm.jpg'
import {Link} from 'react-router-dom';
class VendingMachine extends Component{
    render(){
        return(
            <div className='VendingMachine' style={{backgroundImage: `url(${vmImage})`}}>
                {<div className='VendingMachine-text-container'>
                    <div className="left">
                        <p>Welcome to the vending machine!</p>
                        <p>Choose your item</p>
                    </div>
                    <div className="right">
                        <Link className='Navbar-Item' exact to='/cola'>Cola</Link>
                        <Link className='Navbar-Item' exact to='/hotdog'>Hotdog</Link>
                        <Link className='Navbar-Item' exact to='/chips'>Chips</Link>
                    </div>
                </div>}
            </div>
        )
    }
}
export default VendingMachine;