import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap'; // Import Navbar and Nav from react-bootstrap
import "../index.css";
import banner from "../assets/BannerImg.png";
import logo from "../assets/Logo.png";
import rightCloud from "../assets/RightCloud.png";
import leftCloud from "../assets/LeftCloud.png";
import YouTube from "../assets/YouTube.png";
import Egg from "../assets/Egg.png";

function Component1() {
  const [navbarOpen, setNavbarOpen] = useState(false); // Add state for the navbar
  return (
    <div className="component1-background">
      <Navbar expand="md" >
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" className="mx-3 mx-md-5 component1-logo" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setNavbarOpen(!navbarOpen)} aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto navbar-row fs-2 ml-2 fw-bold">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Whitepaper</Nav.Link>
            <Nav.Link href="#">NFTs</Nav.Link>
            <Nav.Link href="#">Community</Nav.Link>
            <Nav.Link href="#">Marketplace</Nav.Link>
          </Nav>
          <button className="component1-button text-white fw-bold fs-4">
            Play Demo
          </button>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <img src={leftCloud} className="leftCloud" alt="leftCloud" />
        <img src={banner} className="banner" alt="banner" />
        <img src={rightCloud} className="rightCloud" alt="rightCloud" />
      </div>
      <div className="d-flex component1-sponsor">
        <div className="col-2 d-flex align-items-center mx-5 px-5">
          <img src={YouTube} className="youtube" alt="YouTube" />
          <h5 className="mx-3 ml-2 text-start">Watch Teaser</h5>
        </div>
        <div className="col-7"></div>
        <div className="col-2 d-flex align-items-center justify-content-end px-5">
          <h5 className="mx-3 ml-2 text-end">Mint NFT MetaHornbills</h5>
          <img src={Egg} className="egg" alt="YouTube" />
        </div>
      </div>
    </div>
  );
}

export default Component1;
