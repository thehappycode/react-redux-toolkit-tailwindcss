
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import {links} from '../data'
import {handleClickSidebar, selectLayout} from '../redux/features/layout/layoutSlice'

const Sidebar = () => {
    const {isOpenSidebar, screenSize} = useSelector(selectLayout);
    const dispatch = useDispatch();

    const handleCloseSidebar = () => {
        if (isOpenSidebar && screenSize <= 900){
            //setIsOpenSidebar(false)
            dispatch(handleClickSidebar({isOpenSidebar: false}))
        }
    }
    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {isOpenSidebar && (<>
                <div className='flex justify-between items-center'>
                    <Link to='/' onClick={handleCloseSidebar}
                        className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
                    >
                        <SiShopware /><span>Shoppy</span>
                    </Link>
                    {/* <TooltipComponent content='Menu' position='BottomCenter'> */}
                        <button type='button'
                            // onClick={() => { setIsOpenSidebar(preState => !preState) }}
                            onClick={() => dispatch(handleClickSidebar(!isOpenSidebar))}
                            className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
                        >
                            <MdOutlineCancel />
                        </button>
                    {/* </TooltipComponent> */}
                </div>
                <div className='mt-10'>
                    {links.map(item => (
                        <div key={item.title} >
                            <p className='text-gray-400 m-3 mt-4 uppercase'>
                                {item.title}
                            </p>
                            {item.links.map(link => (
                                <NavLink
                                    key={link.name}
                                    to={`/${link.name}`}
                                    onClick={handleCloseSidebar}
                                    style={{backgroundColor: ''}}
                                    // style={({ isActive }) => ({
                                    //     backgroundColor: isActive ? currentColor : ''
                                    // })}
                                    // className={({ isActive }) => isActive ? activeLink : normalLink}
                                >
                                    {link.icon}
                                    <span className='capitalize'>{link.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </div>
            </>

            )

            }
        </div>
    )
}

export default Sidebar