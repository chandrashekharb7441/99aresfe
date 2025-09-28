import React from 'react'
import LandLogo from "./Agri Land.png";
import { Link } from 'react-router-dom';

export default function AdminAgriLandNavbar() {
  return (
    <div className="d-flex justify-content-between align-items-center p-3" style={{marginTop:"4rem"}}>
      <img src={LandLogo} alt="Logo" className="img-fluid" style={{ height: '3rem' }}/>
      <h3>Land List</h3>
      <Link to={'/admin/land/add-land/'}><button className="btn btn-primary">Add Land</button></Link>
    </div>
  )
}
