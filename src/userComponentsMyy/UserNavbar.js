import React from 'react'
import {Link, NavLink, useLocation} from 'react-router-dom'
import Logo from './Logo.png';

export default function UserNavbar() {
  const userName = localStorage.getItem("userName");
  const location = useLocation();
  localStorage.setItem("userlocation", location.pathname);
  return (
    <nav className="navbar navbar-expand-lg shadow-sm fixed-top" style={{ backgroundColor: "#caf8ef" }}>
      <div className="container-fluid">
        <Link className="logo" to={'/'}>
          <img src={Logo} alt="Logo" style={{ height: '3rem' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold text-primary bg-light rounded mx-lg-2 my-2 my-lg-0 px-3 d-inline-block' : 'nav-link'} aria-current="page" to={'/user/flat/'}>Flat</NavLink>
            </li>
            <li className="nav-item ms-lg-5">
              <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold text-primary bg-light rounded mx-lg-2 my-2 my-lg-0 px-3 d-inline-block' : 'nav-link'}  aria-current="page" to={'/user/plot/'}>Plot</NavLink>
            </li>
            <li className="nav-item ms-lg-5">
              <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold text-primary bg-light rounded mx-lg-2 my-2 my-lg-0 px-3 d-inline-block' : 'nav-link'}  aria-current="page" to={'/user/land/'}>AgriLand</NavLink>
            </li>
            <li className="nav-item ms-5">
            <NavLink to={'/user/cart/'} style={{ textDecoration: 'none' }}>
              <button className="btn btn-warning d-flex align-items-center">
                <i className="bi bi-cart-check me-2" style={{ fontSize: '18px' }}></i>
                <span style={{ fontSize: '12px' }}>Cart</span>
              </button>
            </NavLink>
          </li>
              <li className="nav-item ms-lg-5 d-inline-flex align-items-center justify-content-center border border-secondary rounded p-1 position-relative">
              {/* <p className="mb-0 text-danger" style={{ marginBottom: '0.5rem', marginRight: '0.3rem', fontSize: '0.9rem' }}>{userName.toUpperCase()}</p> */}
              {localStorage.getItem("userName") ? <p className="mb-0 text-danger" style={{ marginBottom: '0.5rem', marginRight: '0.3rem', fontSize: '0.9rem' }}>{userName.toUpperCase()}</p> : <Link to="/user/login">Login</Link>}
              <i
                className="bi bi-person-circle dropdown-toggle"
                style={{ fontSize: '1.3rem', cursor: 'pointer' }}
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></i>
              {localStorage.getItem("userName") ?
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                <li>
                  <Link to="/user/logout/" style={{ textDecoration: "none" }}>
                    <button className="dropdown-item text-danger">Log Out</button>
                  </Link>
                  <Link to="/user/profile/" style={{ textDecoration: "none" }}>
                    <button className="dropdown-item text-danger">Profile</button>
                  </Link>
                  <Link to="/admin/login/" style={{ textDecoration: "none" }}>
                    <button className="dropdown-item text-danger">Admin</button>
                  </Link>
                </li>
              </ul>
              :
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                <li>
                  <Link to="/admin/login/" style={{ textDecoration: "none" }}>
                    <button className="dropdown-item text-danger">Admin</button>
                  </Link>
                </li>
              </ul>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
