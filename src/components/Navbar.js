import React from 'react';
import logo from './images/logob.png';
import profile from './images/profile.png';
import cart from './images/cart.png';
import './css/nav.css';

export default function Navbar() {
  return (
      <><div className="nav">
        <a href="index.html">
            <img src={logo} className="brand-logo" alt='Loading..'></img></a>
            <div className="nav-items">
       <div className="search">
           <input type="text" className="search-box" placeholder="Search Item Here"></input>
           <button className="search-btn">Search</button>
       </div>
       <a href="#"><img src={profile} height="40px" alt='Loading...' ></img></a>
       <a href="#"><img src={cart} height="40px"  alt='Loading...'></img></a>
      </div>
    </div>
    <ul className="links-container">
    <li className="list-items"><a href="#" className="link">Home</a></li>
    <li className="list-items"><a href="#" className="link">Club</a></li>
    <li className="list-items"><a href="#" className="link">National</a></li>
    <li className="list-items"><a href="#" className="link">Phone Cases</a></li>
    </ul>
    </>
  )
}
