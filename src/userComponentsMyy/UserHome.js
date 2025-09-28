import React from 'react'
import UserNavbar from './UserNavbar'
import { Outlet } from 'react-router-dom'
import AdminFooter from '../AdminFooter'

export default function UserHome() {
  return (
    <div>
      <UserNavbar/>
      <Outlet/>
      <AdminFooter/>
    </div>
  )
}
