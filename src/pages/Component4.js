import React from "react";
import Meta from "../assets/MetaHornbills.png";

function Component4() {
  return (
    <div className="component4-container">
      <div className="component4-container component4-background-image">
        <div className="component4-background">
          <h4 className="component4-text">MetaHornbills</h4>
          <h1 className="fw-bold component2-text">
            MINT AND OWN
            <br />
            UNIQUE METAHORNBILLS
          </h1>
        </div>
      </div>
      <div>
        <img src={Meta} className="component4-img" alt="Meta" />
      </div>
      <div className="col-12 d-flex justify-content-center mt-5">
        <button className="component4-button text-white fs-3">
        Mint a MetaHornbill
        </button>
      </div>
    </div>
  );
}

export default Component4;
