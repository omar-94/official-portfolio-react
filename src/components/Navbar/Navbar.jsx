import React from 'react';
import "./navbar.scss";
import { Person, Mail } from '@mui/icons-material';

export default function NavBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' className='logo'> nava.</a>
          <div className='itemContainer'>
            <Person className='icon'/>
            <span>Omar Nava</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span>enava23@yahoo.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
          </div>
        </div>
      </div> 
    </div>
  )
}
