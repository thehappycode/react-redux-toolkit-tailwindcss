import React from 'react'
import { Outlet } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

const Main = () => {
  return (
    <div className='w-full bg-gray-200 p-4 h-screen overflow-auto'>
      <Breadcrumb />
      <Outlet />
    </div>
  )
}

export default Main