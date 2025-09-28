import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminPlots() {
  let[plots,setplots]=useState(null)
  let[isDeleted,setIsDeleted]=useState(0)
  const adminId = localStorage.getItem("adminId");
      
  const fetchAllPlots= async()=>
  {
      let response = await fetch(`http://localhost:8080/99acres/plots/admin/${adminId}`)
      let plotObject=await response.json()
      setplots(plotObject.data)
      // console.log(plotObject.data); 
      if (plotObject.data && plotObject.data.length > 0) {
          let count=0;
          plotObject.data.forEach(() => count++);
          localStorage.setItem("AdminPlotCount", count);
        }
  }
  const deletePlotById=async(id) =>
  {
      let response =await fetch(`http://localhost:8080/99acres/plot/${id}`,{method:"DELETE"})
      let plotObject=await response.json()
      // console.log(plotObject);
      setIsDeleted(isDeleted+1)
  }
 useEffect(()=>{ fetchAllPlots()},[isDeleted])
  return (
    <div className="container" style={{marginTop:"3rem"}}>
      <div className="row">
        {
          plots && plots.map(plot => (
            <div key={plot.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img
                  src={plot.imageUrl}
                  className="card-img-top"
                  alt="Flat"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title text-primary">₹ {plot.price}</h5>
                    <p className="text-muted">ID: {plot.id}</p>
                  </div>
                  <p className="card-text"><strong>Location:</strong> {plot.location
                    .split(" ")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}</p>
                  <p className="card-number"><strong><i class="bi bi-telephone-fill"></i></strong> {plot.mnumber}</p>
                  <p className="card-text text-truncate">{plot.description
                    .split(" ")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}</p>
                  <div className="d-flex justify-content-between">
                    <Link to={`/admin/plot/update-plot/${plot.id}`}><button className="btn btn-warning">Update</button></Link>
                    <button className="btn btn-danger" onClick={()=>{deletePlotById(plot.id)}}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
</div>
  )
}
