import React from "react";
import Comp5Bird from "../assets/Comp5-Bird.png";
import Fence from "../assets/Fence.png";
import Garden from "../assets/Garden Box.png";

function Component5() {
  return (
      <div className="container component5-container">
        <div className="component5-background">
          <div className="component5-background-image">
            <h4 className="pt-5">Roadmap</h4>
            <h2 className="pt-2 component5-text fw-bold fs-1">
              PLANET AFIN <br />
              EXPANSION
            </h2>
          </div>
          <img src={Comp5Bird} className="component5-bird" alt="" />
          <div className="row component5-row">
            <div className="col-3 align-items-center">
              <div className="container component5-container2">
                <h2 className="text-white fw-bold pt-4">PHASE 1</h2>
                <h4 className="text-white pt-5 fw-light fs-5">
                  Fundraising | INO | <br />
                  NFT Whitelisting
                </h4>
                <h4 className="text-white fw-light fs-5 pt-3">
                  Game Design & <br />
                  Development Plan
                </h4>
                <h4 className="text-white fw-light fs-5 pt-3">
                  Design & Art <br />
                  Production
                </h4>
              </div>
            </div>
            <div className="col-3">
              <div className="container component5-container3">
                <h2 className="text-white fw-bold pt-4"> PHASE 2</h2>
                <h4 className="text-white pt-5 fw-light fs-5">
                  Server Setup, Database <br />& Back-end Development
                </h4>
                <h4 className="text-white fw-light fs-5 pt-3">
                  Launch <br />
                  Social Media
                </h4>
                <h4 className="text-white fw-light fs-5 pt-3">
                  Website & <br />Game Trailer
                </h4>
              </div>
            </div>
            <div className="col-3">
              <div className="container component5-container4">
                <h2 className="text-white fw-bold pt-4"> PHASE 3</h2>
                <h4 className="text-white pt-5 fw-light fs-5">
                  Game <br />
                  Marketplace
                </h4>
                <h4 className="text-white fw-light fs-5 pt-3">
                  Breeding <br />
                  System
                </h4>
              </div>
            </div>
          </div>
          <div className="row position-relative">
            <div className="col-6 component5-row1">
              <img
                src={Fence}
                className="position-absolute start-0 bottom-0 component5-fence1"
                alt=""
              />
              <img
                src={Garden}
                className="position-absolute bottom-0 component5-garden1"
                alt=""
              />
            </div>
            <div className="col-6">
              <img
                src={Fence}
                className="position-absolute end-0 bottom-0 component5-fence2"
                alt=""
              />
              <img
                src={Garden}
                className="position-absolute bottom-0 component5-garden2"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Component5;
