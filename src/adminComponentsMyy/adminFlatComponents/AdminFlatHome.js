import React from 'react'
import AdminFlatNavbar from './AdminFlatNavbar'
import { Outlet } from 'react-router-dom'
import AdminHome from '../AdminHome'
import AdminFlats from './AdminFlats'

export default function AdminFlatHome() {
  return (
    <div>
      <AdminFlatNavbar/>
      <AdminFlats/>
    </div>
  )
}
