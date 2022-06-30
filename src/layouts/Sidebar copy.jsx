import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { links } from '../utils/data'
import { setIsOpenSidebar, handleAutoCloseSidebar, selectLayout } from '../redux/features/layout/layoutSlice'

const Sidebar = () => {
    const { isOpenSidebar, screenSize, themeMode } = useSelector(selectLayout);
    const dispatch = useDispatch();

    const activeLink = `flex items-center gap-4 p-4 rounded-lg text-base text-white m-2 ${themeMode === 'dark' ? 'bg-green-sea' : ''}`
    const normalLink = 'flex items-center gap-4 p-4 rounded-lg text-base hover:bg-gray-200 m-2'
    return (
        <div className={`flex flex-auto bg-white ${isOpenSidebar ? 'w-72' : 'w-24'}`}>
            <div className='p-3 h-screen overflow-auto w-full'>
                {isOpenSidebar ?
                    <div className='mt-10'>
                        {links.map(item => (
                            <div key={item.title} >
                                <p className='m-3 mt-4 uppercase'>
                                    {item.title}
                                </p>
                                {item.links.map(link => (
                                    <NavLink
                                        key={link.name}
                                        to={`/${link.to}`}
                                        onClick={() => dispatch(handleAutoCloseSidebar())}
                                        className={({ isActive }) => isActive ? activeLink : normalLink}
                                    >
                                        {link.icon}
                                        <span className='capitalize text-sm'>{link.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                    :
                    <div
                        className='mt-10 opacity-50'
                        // onMouseEnter={() => dispatch(setIsOpenSidebar(true))}
                        // onMouseLeave={() => dispatch}
                    >
                        {links.map(item => (
                            <div key={item.title} >
                                <p className='m-3 mt-4 border-b border-gray-200'>
                                    {/* {item.title} */}
                                </p>
                                {item.links.map(link => (
                                    <NavLink
                                        key={link.name}
                                        to={`/${link.to}`}
                                        onClick={() => dispatch(handleAutoCloseSidebar())}
                                        className={({ isActive }) => isActive ? activeLink : normalLink}
                                    >
                                        {link.icon}
                                        {/* <span className='capitalize'>{link.name}</span> */}
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default Sidebar