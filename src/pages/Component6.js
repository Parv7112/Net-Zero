import React from 'react'
import Ben from '../assets/Ben.png'
import Kamol from '../assets/Kamol.png'
import Prim from '../assets/Prim.png'
import Annette from '../assets/Annette.png'
import Abraham from '../assets/Abraham.png'
import Shuu from '../assets/Shuu.png'

function Component6() {
  return (
    <div>
        <h2 className='mt-5 fw-bold'>Team</h2>
        <h1 className='component6-text fw-bold'>MEET THE AFINIONS</h1>
        <div className='row mt-5 pt-5 justify-content-center'>
            <div className='col-3'>
                <img src={Abraham} className='component6-image' alt="Abraham" />
                <h5>James Moore</h5>
                <h6>Chief Executive Officer</h6>
            </div>
            <div className='col-3'>
                <img src={Ben} className='component6-image' alt="Ben" />
                <h5>Phantaphorn (Ben Trang)</h5>
                <h6>Chief Operation Officer</h6>
            </div>
            <div className='col-3'>
                <img src={Kamol} className='component6-image' alt="Kamol" />
                <h5>Kamol (Toon)</h5>
                <h6>Chief Technology Officer</h6>
            </div>
        </div>
        <div className='row mt-5 pt-5'>
            <div className='col-3'>
                <img src={Prim} className='component6-image' alt="Prim" />
                <h5>Prim Poungpet</h5>
                <h6>2D/3D Model Artist + Animator</h6>
            </div>
            <div className='col-3'>
                <img src={Annette} className='component6-image' alt="Annette" />
                <h5>Annette Salim</h5>
                <h6>Marketing Advisor</h6>
            </div>
            <div className='col-3'>
                <img src={Abraham} className='component6-image' alt="Abraham" />
                <h5>Abraham Matthew</h5>
                <h6>Marketing Advisor</h6>
            </div>
            <div className='col-3'>
                <img src={Shuu} className='component6-image' alt="Shuu" />
                <h5>Shuu Abd. Rani</h5>
                <h6>Graphic Designer</h6>
            </div>
        </div>
    </div>
  )
}

export default Component6