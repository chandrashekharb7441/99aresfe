import React from 'react'
import AdminNavbar from './AdminNavbar'
// import AdminOptions from './AdminOptions'
import { Outlet } from 'react-router-dom'
import AdminFooter from '../AdminFooter'

export default function AdminHome() {
  return (
    <div>
      <AdminNavbar/>
      <Outlet/>
      <AdminFooter/>
    </div>
  )
}
