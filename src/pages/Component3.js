import React from "react";
import vd1 from "../assets/Comp3-vd1.mp4";
import Comp3Bg from "../assets/Comp3-bg.png"; // Import your background image

function Component3() {
  return (
    <div className="component3-container" style={{ backgroundImage: `url(${Comp3Bg})` }}>
      <div className="component3-background">
        <h4 className="component3-text text-center">Gameplay</h4>
        <h1 className="fw-bold component2-text text-center">START YOUR GREEN JOURNEY</h1>
      </div>
      <div className="container">
        <div className="row component3-row">
          <div className="col-md-6">
            <video controls className="component3-vd1">
              <source src={vd1} type="video/mp4" />
            </video>
            <h2 className="mt-4 text-center">Infinite Runner</h2>
            <p className="fs-5 px-3 mx-3 text-center">
              Start the journey with Max, one of the Net Zero heroes, together
              with your MetaHornbill. You will be running & exploring through
              different Running Trails.
            </p>
          </div>
          <div className="col-md-6">
            <video controls className="component3-vd2">
              <source src={vd1} type="video/mp4" />
            </video>
            <h2 className="mt-4 text-center">The Biosphere</h2>
            <p className="fs-5 px-3 mx-3 text-center">
              After running, you can explore, craft, and build your own
              sustainable world here at the Biosphere. Located in the heart of
              Nirand Forest, this will be your home.
            </p>
          </div>
          <div className="col-12 d-flex justify-content-center mb-5">
            <button className="component3-button text-white fw-bold fs-3">
              Play Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component3;
