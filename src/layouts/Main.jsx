import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <Outlet />
      </div>
    </main>
  )
}

export default Main