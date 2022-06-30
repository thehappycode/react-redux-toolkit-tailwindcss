import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'

const Layout = () => {
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