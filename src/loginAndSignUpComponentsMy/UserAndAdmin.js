import React from 'react'
import { Link } from 'react-router-dom'

export default function UserAndAdmin() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-danger bg-gradient">
      <div className="text-center">
        <h3 className="mb-5">Choose Your Role</h3>
        <Link to={'/user/login/'}><button type="button" className="btn btn-outline-warning me-5">User</button></Link>
        <Link to={'/admin/login/'}><button type="button" className="btn btn-outline-info">Admin</button></Link>
      </div>
    </div>
  )
}
