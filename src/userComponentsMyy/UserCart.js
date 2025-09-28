import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserFlatCarts() {
  let [flats, setFlat] = useState([])  // Initialize with an empty array
  let [isDeleted, setIsDeleted] = useState(0)
  const userId = localStorage.getItem("userId"); 

  const fetchAllFlats = async () => {
    let response = await fetch(`http://localhost:8080/99acers/cart/user/${userId}`)
    let flatObject = await response.json()
    setFlat(flatObject.data || [])  // Set to empty array if no data
    console.log(flatObject.data);

    if (flatObject.data && flatObject.data.length > 0) {
          let count=0;
          flatObject.data.forEach(() => count++);
          localStorage.setItem("UserCartCount", count);
        }
  }
  

  const deleteItemById = async (id) => {
    let response = await fetch(`http://localhost:8080/99acers/cart/${id}`, { method: "DELETE" })
    let flatObject = await response.json()
    console.log(flatObject);
    setIsDeleted(isDeleted + 1)
  }

  useEffect(() => { fetchAllFlats() }, [isDeleted])

  return (
    <div className="container" style={{marginTop:'6rem'}}>
      <div className="row">
        {
          flats.length === 0 ? (
            <div className="col-12 d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
              <h3>Your cart is empty.</h3>
              <br />
              <i className="bi bi-cart-x-fill" style={{ fontSize: "50px" }}></i>
              <Link to="/user/login">login</Link>
            </div>


          ) : flats.map(flat => (
            <div key={flat.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img
                  src={flat.imageUrl}
                  className="card-img-top"
                  alt="Flat"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">₹ {flat.price}</h5>
                  <p className="card-text"><strong>Size:</strong> {flat.size}</p>
                  <p className="card-text"><strong>Location:</strong> {flat.location}</p>
                  <p className="card-number"><strong><i className="bi bi-telephone-fill"></i></strong> {flat.mnumber}</p>
                  <p className="card-text text-truncate">{flat.description}</p>
                  <div className="d-flex justify-content-between">
                    {/* <Link to={`/admin/flat/update-flat/${flat.id}`}><button className="btn btn-warning">Update</button></Link> */}
                    <button className="btn btn-danger" onClick={() => { deleteItemById(flat.id) }}>Delete</button>
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
