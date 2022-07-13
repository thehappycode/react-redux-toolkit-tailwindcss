import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setSystemCode } from '../redux/slices/applicationSettingsSlice'
import { requestDashboard } from '../redux/slices/dashboardSlice'

import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'

const Layout = () => {
    const dispatch = useDispatch();
    const location = useLocation()
    const { pathname } = location
    useEffect(() => {
        dispatch(requestDashboard())
        if (pathname && pathname !== "/") {
            const systemCode = pathname.substring(1).toUpperCase()
            dispatch(setSystemCode({ systemCode }))
        }
    }, [])

    return (
        <div className='container text-sm'>
            {/* Header */}
            <div className='fixed bg-white w-full drop-shadow-lg z-10'>
                <Header />
            </div>

            {/* Content */}
            <div className='fixed w-full top-16'>
                <div className='flex'>
                    {/* Sidebar */}
                    <Sidebar />

                    {/* Main */}
                    <Main />
                </div>
            </div>
        </div>
    )
}

export default Layout