import React from 'react'
import LandLogo from "./Agri Land.png";

export default function UserLandNavbar() {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <img src={LandLogo} alt="Logo" className="img-fluid" style={{ height: '3rem' }}/>
      <h3>Flat List</h3>
      <button className="btn btn-primary">Add Flat</button>
    </div>
  )
}
