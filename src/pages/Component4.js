import React from "react";
import Meta from "../assets/MetaHornbills.png";

function Component4() {
  return (
    <div className="component4-container">
      <div className="component4-background component4-background-image">
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
        <img src={Meta} className="component4-img img-fluid" alt="Meta" />
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <button className="component4-button text-white fs-3">
              Mint a MetaHornbill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component4;
