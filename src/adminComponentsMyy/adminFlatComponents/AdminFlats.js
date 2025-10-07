import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminFlats() {
  let [flats, setflat] = useState(null);
  let [isDeleted, setIsDeleted] = useState(0);
  const adminId = localStorage.getItem("adminId");

  const fetchAllFlats = async () => {
    let response = await fetch(`https://realestate-vfkm.onrender.com/99acres/flats/admin/${adminId}`)
    let flatObject = await response.json()
    setflat(flatObject.data)
    // console.log(flatObject.data); 
    if (flatObject.data && flatObject.data.length > 0) {
      let count = 0;
      flatObject.data.forEach(() => count++);
      localStorage.setItem("AdminFlatCount", count);
    }
  }

  const deleteFlatById = async (id) => {
    let response = await fetch(`https://realestate-vfkm.onrender.com/99acres/flats/${id}`, { method: "DELETE" })
    let flatObject = await response.json()
    // console.log(flatObject);
    setIsDeleted(isDeleted + 1)
  }
  useEffect(() => { fetchAllFlats() }, [isDeleted])
  return (
    <div className="container" style={{ marginTop: "3rem" }}>
      <div className="row">
        {
          flats && flats.map(flat => (
            <div key={flat.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img
                  src={flat.imageUrl}
                  className="card-img-top"
                  alt="Flat"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title text-primary">₹ {flat.price}</h5>
                    <p className="text-muted">ID: {flat.id}</p>
                  </div>
                  <p className="card-text"><strong>Location:</strong> {flat.location
                    .split(" ")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}</p>
                  <p className="card-number"><strong><i class="bi bi-telephone-fill"></i></strong> {flat.mnumber}</p>
                  <p className="card-text text-truncate">{flat.description
                    .split(" ")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}</p>
                  <div className="d-flex justify-content-between">
                    <Link to={`/admin/flat/update-flat/${flat.id}`}><button className="btn btn-warning">Update</button></Link>
                    <button className="btn btn-danger" onClick={() => { deleteFlatById(flat.id) }}>Delete</button>
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
