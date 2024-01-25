import React from 'react'
import "./Service.css"
import i1 from './1.png'
import i2 from './3.png'
import i3 from './5.jpg'
export default function Service() {
  return (
    <div>
        <div className='service'>
            <div className='service-item'>01</div>
            <div className='service-item'>02</div>
            <div className='service-item'>03</div>
            <div className='service-item'><img src={i1} className='image'></img></div>
            <div className='service-item'><img src={i2} className='image'></img></div>
            <div className='service-item'><img src={i2} className='image'></img></div>
        </div>
    </div>
  )
}



