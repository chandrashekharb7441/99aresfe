import React from 'react'
import PlotLogo from "./plot.png";
import { Link } from 'react-router-dom';

export default function AdminPlotNavbar() {
  return (
    <div className="d-flex justify-content-between align-items-center p-3" style={{marginTop:"4rem"}}>
      <img src={PlotLogo} alt="Logo" className="img-fluid" style={{ height: '3rem' }}/>
      <h3>Plot List</h3>
      <Link to={'/admin/plot/add-plot/'}><button className="btn btn-primary">Add Plot</button></Link>
    </div>
  )
}
