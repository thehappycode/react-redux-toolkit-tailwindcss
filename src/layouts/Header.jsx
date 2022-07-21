import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown, MdOutlineCancel } from 'react-icons/md'
import { IoIosCloudOutline } from 'react-icons/io'
import { SiShopware } from 'react-icons/si'
import { GoSignOut } from 'react-icons/go'
import {ImSearch} from 'react-icons/im'
import { setIsOpenSidebar, setScreenSize, handleAutoCloseSidebar, selectLayout } from '../redux/slices/layoutSlice'
import { logout } from '../redux/slices/authenSlice'

import avatar from '../assets/images/avatar.jpeg'
import { USER_NAME, FULL_NAME, EMAIL } from '../utils/appSettings'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isOpenSidebar, screenSize, themeColor } = useSelector(selectLayout)

  const userName = USER_NAME()
  const fullName = FULL_NAME()
  const email = EMAIL()

  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  const handleSignOut = () => {
    dispatch(logout())
    navigate('login')
  }

  useEffect(() => {
    const handleScreenResize = () => dispatch(setScreenSize(window.innerWidth))
    window.addEventListener('resize', handleScreenResize)
    handleScreenResize()
    return () => window.removeEventListener('resize', handleScreenResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 900) {
      dispatch(setIsOpenSidebar(false))
    }
    else {
      dispatch(setIsOpenSidebar(true))
    }
  }, [screenSize])

  const NavButton = ({ title, customFunc, icon, style, dotColor }) => (
    <button type='button'
      title={title}
      onClick={customFunc}
      style={style && style}
      className='relative rounded-full p-4 hover:bg-light-gray hover:text-green-sea'
    >
      {/* <span style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      /> */}
      {icon}
    </button>
  )
  return (
    <div className='flex justify-between w-full'>
      {/* Left Header */}
      <div className='flex justify-between p-2 relative w-72 text-base'>
        {/* <div className='flex w-full'> */}
        <div className='flex'>
          {isOpenSidebar ?
            <Link to='/' onClick={() => dispatch(handleAutoCloseSidebar())}
              className='flex items-center gap-3 p-2 text-xl font-extrabold tracking-tight'
            >
              <SiShopware />
              <span>sso.cbbank.vn</span>
            </Link>
            :
            <NavButton
              title='Open Sidebar'
              style={{ fontSize: '1rem', lineHeight: '1.5rem' }}
              customFunc={() => dispatch(setIsOpenSidebar(!isOpenSidebar))} color={themeColor}
              icon={<MdOutlineCancel />}
            />
          }
        </div>
        <div className='flex'>
          {isOpenSidebar &&
            <NavButton
              title='Close Sidebar'
              customFunc={() => dispatch(setIsOpenSidebar(!isOpenSidebar))} color={themeColor}
              icon={<AiOutlineMenu />}
            />
          }
          {/* <Breadcrumb /> */}
        </div>
        {/* </div> */}
      </div>
      {/* Right Header */}
      <div className='flex justify-between p-2 md:mx-4 relative w-full'>
        <div className='flex'>
          {/* <NavButton
              title='Menu'
              customFunc={() => dispatch(setIsOpenSidebar(!isOpenSidebar))} color={themeColor}
              icon={<AiOutlineMenu />}
            />
            <Breadcrumb /> */}
        </div>
        <div className='flex'>
          <NavButton
            title='Tìm hồ sơ'
            customFunc={() => { }}
            color={themeColor}
            icon={<ImSearch />}
          />

          <NavButton
            title=''
            customFunc={() => { }}
            color={themeColor}
            icon={<IoIosCloudOutline />}
          />
          <NavButton
            title=''
            customFunc={() => { }}
            color={themeColor}
            icon={<BsChatLeft />}
          />
          <NavButton
            title=''
            customFunc={() => { }}
            color={themeColor}
            icon={<RiNotification3Line />}
          />
          <div>
            <div
              onClick={() => setIsOpenDropdown(!isOpenDropdown)}
              className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            >
              <img
                className='rounded-full w-8 h-8'
                src={avatar}
                alt="avatar"
              />
              <p>
                <span className='text-gray-400 text-14'>Hi, </span>{' '}
                <span className='text-gray-400 font-bold ml-1 text-14'>{userName}</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14' />
            </div>
            {isOpenDropdown &&
              <div className='absolute right-2 bg-white rounded divide-y divide-gray-100 shadow'>
                <div className="py-3 px-4">
                  <div>{fullName}</div>
                  <div className="flex items-center font-medium truncate">{email}</div>
                </div>
                <div
                  onClick={handleSignOut}
                  className="flex items-center py-3 px-4 hover:bg-gray-300 cursor-pointer"
                >
                  <GoSignOut style={{ marginRight: ".5rem" }} />
                  Sign out
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header