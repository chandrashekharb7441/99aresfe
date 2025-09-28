import React from 'react'
import FlatLogo from "./flat.avif";

export default function UserFlatNavbar() {
  return (
    // <div className="d-flex justify-content-between align-items-center p-3">
    <div className="d-flex justify-content-between align-items-center p-3" style={{marginTop:"4rem"}}>
      <img src={FlatLogo} alt="Logo" className="img-fluid" style={{ height: '3rem' }}/>
      <h3>Flat List</h3>
      <button className="btn btn-primary">Add Flat</button>
    </div>
  )
}
