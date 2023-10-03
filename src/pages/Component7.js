import React from "react";
import BSC from "../assets/BSC.png";
import Partners from "../assets/Partners.png";
import Max from "../assets/Max.png";
import Logo1 from "../assets/Logo1.png";
import Biosphere from "../assets/Biosphere1 1.png";
import Icons from "../assets/Icons.png";
import Youtube1 from '../assets/YouTube1.png'
import Egg from '../assets/Egg.png'

function Component7() {
  const [width, setWidth] = useState(window.innerWidth)
  return (
    <div className="mt-5 pt-5 component7-container">
      <h2>The Metaverse {width}</h2>
      <h1 className="fw-bold component6-text">PARTNERS AND ECOSYSTEM</h1>
      <div className="row component7-image1">
        <div className="col d-none d-sm-block">
          <img src={BSC} className="mt-5 pt-5" alt="BSC" />
        </div>
      </div>
      <div className="row component7-image2 ">
        <img src={Partners} className="mt-5 pt-5 mx-5" alt="Partners" />
      </div>
      <div className="container component7-container2">
        <h2 className="text-start mx-2 mt-2 fw-bold">
          JOIN OUR COMMUNITY <br /> ON DICORD NOW
        </h2>
        <h4 className="text-start mx-2 mt-3">
          Join today and you'll be updated on the <br />
          latest NFT release and game updates.
        </h4>
        <img src={Max} alt="Max" className="component7-image3" />
      </div>
      <div>
        <img src={Logo1} className="mt-5 pt-5 component7-logo" alt="Logo" />
      </div>
      <h4 className="mt-5">Powered by the team at afincoin.io</h4>
      <div className="position-relative" style={{height: '450px'}}>
        <img src={Biosphere} alt="Biosphere" className="position-absolute start-0 top-0 z-1 w-100"/>
        <img src={Icons} className="component7-image4 z-3" alt="Icons" />
      </div>
      <div className="d-flex component7-footer text-white">
        <div className="col-2 d-flex align-items-center mx-5 px-5">
          <img src={Youtube1} className="youtube z-2" alt="YouTube1" />
          <h5 className="mx-3 ml-2 fw-bold text-start z-2">Watch Teaser</h5>
        </div>
        <div className="col-7"></div>
        <div className="col-2 d-flex align-items-center justify-content-end px-5">
          <h5 className="mx-3 ml-2 fw-bold text-end z-2">Mint NFT MetaHornbills</h5>
          <img src={Egg} className="egg z-2" alt="Egg" />
        </div>
      </div>
    </div>
  );
}

export default Component7;
