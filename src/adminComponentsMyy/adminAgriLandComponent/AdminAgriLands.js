import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminAgriLands() {
  let[lands,setland]=useState(null)
  let[isDeleted,setIsDeleted]=useState(0)
  const adminId = localStorage.getItem("adminId");

  const fetchAllLands= async()=>
    {
        let response = await fetch(`http://realestate-vfkm.onrender.com/99acres/lands/admin/${adminId}`)
        let landObject=await response.json()
        setland(landObject.data)
        console.log(landObject); 
        if (landObject.data && landObject.data.length > 0) {
          let count=0;
          landObject.data.forEach(() => count++);
          localStorage.setItem("AdminLandCount", count);
        }
    }
  const deleteLandById=async(id) =>
    {
      let response =await fetch(`http://realestate-vfkm.onrender.com/99acres/land/${id}`,{method:"DELETE"})
      let landObject=await response.json()
      console.log(landObject);
      setIsDeleted(isDeleted+1)
    }
 useEffect(()=>{ fetchAllLands()},[isDeleted])
  return (
    <div className="container" style={{marginTop:"3rem"}}>
  <div className="row">
    {
      lands && lands.map(land => (
        <div key={land.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center">
          <div className="card shadow-sm" style={{ width: "18rem" }}>
            <img
              src={land.imageUrl}
              className="card-img-top"
              alt="Land"
              style={{ height: "180px", objectFit: "cover" }}
            />
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title text-primary">₹ {land.price}</h5>
                    <p className="text-muted">ID: {land.id}</p>
                  </div>
              <p className="card-text"><strong>Location:</strong> {land.location
              .split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}</p>
              <p className="card-number"><strong><i class="bi bi-telephone-fill"></i></strong> {land.mnumber}</p>
              <p className="card-text text-truncate">{land.description
              .split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}</p>
              <div className="d-flex justify-content-between">
                <Link to={`/admin/land/update-land/${land.id}`}><button className="btn btn-warning">Update</button></Link>
                <button className="btn btn-danger" onClick={()=>{deleteLandById(land.id)}}>Delete</button>
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
