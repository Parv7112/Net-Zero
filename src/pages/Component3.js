import React from "react";
import vd1 from "../assets/Comp3-vd1.mp4";

function Component3() {
  return (
    <>
      <div className="component3-container component3-background-image">
        <div className="component3-background">
          <h4 className="component3-text">Gameplay</h4>
          <h1 className="fw-bold component2-text">START YOUR GREEN JOURNEY</h1>
        </div>
      </div>
      <div className="">
        <div className="row component3-row">
          <div className="col-6">
            <video controls className="component3-vd1 ">
              <source src={vd1} type="video/mp4" />
            </video>
            <h2 className="mt-4">Infinite Runner</h2>
            <p className="fs-5 px-5 mx-5">
              Start the journey with Max, one of the Net Zero heroes, together
              with your MetaHornbill. You will running & exploring through
              different Running Trails.
            </p>
          </div>
          <div className="col-6">
            <video controls className="component3-vd2 ">
              <source src={vd1} type="video/mp4" />
            </video>
            <h2 className="mt-4">The Biosphere</h2>
            <p className="fs-5 px-5 mx-5">
              After running, you can explore, craft and build your own
              sustainable world here at the Biosphere. Located on the heart of
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
    </>
  );
}

export default Component3;
