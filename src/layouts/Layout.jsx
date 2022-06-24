import { useState } from 'react'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <div className='flex relative dark:bg-main-dark-bg'>

        </div>

        // <div className={`flex bg-gray-200 h-screen ${isOpenSidebar ? 'sidebar-expanded' : ''}`}>

        //     {/* Sidebar */}
        //     <Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />

        //     {/* Content */}
        //     <div className="relative flex flex-col flex-1">
                
        //         {/* Header */}
        //         <Header isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar}/>
        //         <Main />
        //     </div>
        // </div>
    )
}

export default Layout