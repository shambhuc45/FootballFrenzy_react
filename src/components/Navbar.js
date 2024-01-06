import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <>
      <div className="navigation">
        <div className="nav flex">
          <div className="nav__logo">
            <Link to="/" className="logo">
              <img src="logo.png" alt="Frenzy Logo" />
            </Link>
          </div>
          <div className="nav__items flex">
            <div className="nav__items--search">
              <input
                id="search-box"
                type="text"
                className="search-box"
                placeholder="Search Item Here"
              ></input>
              <button className="search-btn">Search</button>
            </div>
            <Link to="/">
              <Icon className="icons" icon="bytesize:cart" width="3.5rem" />
            </Link>
            <Link to="/">
              <Icon
                className="icons"
                icon="iconoir:profile-circle"
                width="3.5rem"
              />
            </Link>
          </div>
        </div>
        <nav className="navbar">
          <hr className="hor-line" />
          <ul className="navbar__list">
            <li className="navbar__list--item">
              <Link to="/" className="item-hyperlink">
                Home
              </Link>
            </li>
            <li className="navbar__list--item">
              <Link to="/club" className="item-hyperlink">
                Club
              </Link>
            </li>
            <li className="navbar__list--item">
              <Link to="/national" className="item-hyperlink">
                National
              </Link>
            </li>
            <li className="navbar__list--item">
              <Link to="/cases" className="item-hyperlink">
                Phone Cases
              </Link>
            </li>
            <li className="navbar__list--item">
              <Link to="/ornament" className="item-hyperlink">
                Ornaments
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
