import React from "react";
import "../../styles/globals.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="menu">
          <ul>
            <li>
              brands
              <div className="arrow">&#9660;</div>
              <div className="options">
                <p>all brands</p>
                <p>$hoshky</p>
                <p>bitfins</p>
                <p>cardeno standerzo clubs</p>
                <p>crytoraggies</p>
                <p>danketsu</p>
                <p>future fest</p>
                <p>pendulum</p>
                <p>vudu brigada</p>
              </div>
            </li>
            <li>
              shop
              <div className="arrow">&#9660;</div>
              <div className="options">
                <div className="opt-items2">
                  <div className="menu-box1">
                    <h4>apparel</h4>
                    <p>unisex hoodies</p>
                    <p>unisex zip hoodies</p>
                    <p>unisex sweatshirts</p>
                    <p>unisex tees</p>
                    <p>women tanks</p>
                    <p>unisex tanks</p>
                  </div>
                  <div className="menu-box2">
                    <h4>home</h4>
                    <p>phone cases</p>
                    <p>framed posters</p>
                    <p>posters</p>
                  </div>
                </div>
              </div>
            </li>
            <li>premium</li>
            <li>gift cards</li>
          </ul>
        </div>
        <div className="logo">
          <h1>brava</h1>
        </div>
        <div className="links">
          <div className="writeup">
            <p>became an affiliate</p>
          </div>
          <div className="icons">
            <i class="fa-brands fa-twitter font"></i>
            <i class="fa-brands fa-tiktok font"></i>
            <i class="fa-brands fa-instagram font"></i>
            <i class="fa-solid fa-user font"></i>
            <i class="fa-solid fa-magnifying-glass font"></i>
            <i class="fa-solid fa-calendar font"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
