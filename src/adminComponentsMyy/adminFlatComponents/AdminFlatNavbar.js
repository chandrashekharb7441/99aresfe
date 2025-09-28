import React from 'react'
import { Link } from 'react-router-dom'
import FlatLogo from "./flat.avif";

export default function AdminFlatNavbar() {
  return (
    <div className="d-flex justify-content-between align-items-center p-3" style={{marginTop:"4rem"}}>
      <img src={FlatLogo} alt="Logo" className="img-fluid" style={{ height: '3rem' }}/>
      <h3>Flat List</h3>
      <Link to={'/admin/flat/add-flat/'}><button className="btn btn-primary">Add Flat</button></Link>
    </div>
//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//       <div class="container-fluid">
//         <Link class="navbar-brand" href="#"><img src={FlatLogo} alt="Logo" style={{ height: '3rem' }}/></Link>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button> 
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//             <li class="nav-item">
//               <a class="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">Add Flat</a>
//             </li>
//           </ul>
//           <form class="d-flex" role="search">
//             <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//             <button class="btn btn-outline-success" type="submit">Search</button>
//           </form>
//         </div>
//       </div>
// </nav>
  )
}
