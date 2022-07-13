import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown, MdOutlineCancel } from 'react-icons/md'
import { setIsOpenSidebar, setScreenSize, handleAutoCloseSidebar, selectLayout } from '../redux/slices/layoutSlice'
import avatar from '../assets/images/avatar.jpeg'
import { Link } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { FULL_NAME } from '../utils/appSettings'

const Header = () => {
  const { isOpenSidebar, screenSize, themeColor } = useSelector(selectLayout)
  const fullName = FULL_NAME()
  const dispatch = useDispatch();

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
      style={style && style }
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
            title='Cart'
            customFunc={() => { alert('cart') }}
            color={themeColor}
            icon={<FiShoppingCart />}
          />
          <NavButton
            title='Chat'
            dotColor='#03c9d7'
            customFunc={() => { alert('chat') }}
            color={themeColor}
            icon={<BsChatLeft />}
          />
          <NavButton
            title='Notification'
            dotColor='#03c9d7'
            customFunc={() => { alert('notification') }}
            color={themeColor}
            icon={<RiNotification3Line />}
          />
          <button className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => { alert('user profile') }}
          >
            <img
              className='rounded-full w-8 h-8'
              src={avatar}
              alt="avatar"
            />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>{fullName}</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </button>
          {/* {isClicked.chat && <Chat />}
        {isClicked.cart && <Cart />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />} */}
        </div>
      </div>
    </div>
  )
}

export default Header