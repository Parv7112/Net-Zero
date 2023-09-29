import React from "react";
import "../index.css";
import banner from "../assets/BannerImg.png";
import logo from "../assets/Logo.png";
import rightCloud from "../assets/RightCloud.png";
import leftCloud from "../assets/LeftCloud.png";
import YouTube from "../assets/YouTube.png";
import Egg from "../assets/Egg.png";

function Component1() {
  return (
    <div className="component1-background">
      <div className="row">
        <div className="col-2 ">
        <img src={logo} alt="logo" className="mx-5 component1-logo" />
        </div>
        <div className="col-8 d-flex flex-nowrap mt-3 justify-content-center">
        <h4 className="mx-4">Home</h4>
        <h4 className="mx-4">Whitepaper</h4>
        <h4 className="mx-4">NFTs</h4>
        <h4 className="mx-4">Community</h4>
        <h4 className="mx-4">Marketplace</h4>
        </div>
        <div className="col-2 mt-3 text-end mb-5">
          <button className="component1-button text-white fw-bold fs-4">
            Play Demo
          </button>
        </div>
      </div>
      <div>
        <img src={leftCloud} className="leftCloud" alt="leftCloud" />
        <img src={banner} className="banner" alt="banner" />
        <img src={rightCloud} className="rightCloud" alt="rightCloud" />
      </div>
      <div className="d-flex">
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
