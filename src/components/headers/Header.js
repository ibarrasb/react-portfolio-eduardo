import React, {useState, useContext} from 'react';

import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import {Link} from 'react-router-dom'

import './header.css'


function Header() {

    return (
    <header>
        <div className='menu'>
            <img src={Menu} alt='' width='30' />
        </div>

        <div className='logo'>
            <h1>
               
                <Link className="title-name" to="/">
           
               Eduardo Ibarra
                </Link>
                
            </h1>
        </div>

       

        <ul className='bar-head'>
           
        </ul>
 
        
    </header>
    );
}

export default Header;