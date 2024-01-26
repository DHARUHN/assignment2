import React from 'react'
import './Footer.css';
export default function Footer() {
  return (
    <div>
      <div className="foot-container">
        <div className="fc">
          <p className="o"><b>Product</b></p>
          <p className="wo">Delta</p>
          <p className="wo">Sigma</p>
          <p className="wo">Zeta</p>
        </div>
        <div className="fc">
          <p className="o"><b>Resources</b></p>
          <p className="wo">Help</p>
          <p className="wo">Training videos</p>
          <p className="wo">Webinars</p>
        </div>
        <div className="fc">
          <p className="o"><b>Company</b></p>
          <p className="wo">About us</p>
          <p className="wo">Careers</p>
          <p className="wo">Contact Us</p>

        </div>
      </div>
    </div>
  )
}