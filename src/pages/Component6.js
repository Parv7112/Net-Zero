import React from 'react';
import Ben from '../assets/Ben.png';
import Kamol from '../assets/Kamol.png';
import Prim from '../assets/Prim.png';
import Annette from '../assets/Annette.png';
import Abraham from '../assets/Abraham.png';
import Shuu from '../assets/Shuu.png';

function Component6() {
  return (
    <div className='container component6-container'>
      <h2 className='mt-5 fw-bold text-center'>Team</h2>
      <h1 className='component6-text fw-bold text-center'>MEET THE AFINIONS</h1>
      <div className='row mt-5 pt-5 justify-content-center'>
        <div className='col-lg-3 col-md-4 col-sm-6'>
          <img src={Abraham} className='component6-image' alt='Abraham' />
          <h5 className='text-center'>James Moore</h5>
          <h6 className='text-center'>Chief Executive Officer</h6>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6'>
          <img src={Ben} className='component6-image' alt='Ben' />
          <h5 className='text-center'>Phantaphorn (Ben Trang)</h5>
          <h6 className='text-center'>Chief Operation Officer</h6>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6'>
          <img src={Kamol} className='component6-image' alt='Kamol' />
          <h5 className='text-center'>Kamol (Toon)</h5>
          <h6 className='text-center'>Chief Technology Officer</h6>
        </div>
      </div>
      <div className='row mt-5 pt-5 component6-row'>
        <div className='col-lg-3 col-md-4 col-sm-6'>
          <img src={Prim} className='component6-image' alt='Prim' />
          <h5 className='text-center'>Prim Poungpet</h5>
          <h6 className='text-center'>2D/3D Model Artist + Animator</h6>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6'>
          <img src={Annette} className='component6-image' alt='Annette' />
          <h5 className='text-center'>Annette Salim</h5>
          <h6 className='text-center'>Marketing Advisor</h6>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6'>
          <img src={Abraham} className='component6-image' alt='Abraham' />
          <h5 className='text-center'>Abraham Matthew</h5>
          <h6 className='text-center'>Marketing Advisor</h6>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6'>
          <img src={Shuu} className='component6-image' alt='Shuu' />
          <h5 className='text-center'>Shuu Abd. Rani</h5>
          <h6 className='text-center'>Graphic Designer</h6>
        </div>
      </div>
    </div>
  );
}

export default Component6;
