import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Bird from '../assets/Bird.gif'
import Component3 from './Component3'

function Component2() {
  return (
    <div className='mt-5 mx-5 px-5 row'>
    <div className='col-7 mt-5'>
      <img src={Bird} className='w-50' alt="GIF" />
    </div>
    <div className='col-3 mt-5 pt-5'>
      <h5 className='text-start component2-text'>About Net Zero</h5>
      <h2 className='text-start fw-bold component2-text'>PLAY TO IMPACT IN THE REAL WORLD THROUGH GAMING</h2>
      <div className="rounded-circle arrow-container text-white mt-5">
        <IoIosArrowDown className="arrow-icon mt-1" onClick={Component3} />
      </div>
    </div>
  </div>
)
}

export default Component2