import { useEffect, useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { NavLink, useLocation } from "react-router-dom"
import { SIDE_BAR_MENU } from "../utils/appSettings"

const Breadcrumb = () => {
  const location = useLocation()
  const { pathname } = location
  const [name, setName] = useState('')
  const [breadcrumb, setBreadcrumb] = useState([])
  useEffect(() => {
    for (let i = 0; i < SIDE_BAR_MENU.length; i++) {
      const data = SIDE_BAR_MENU[i]
      if (data.to === pathname) {
        setName(data.name)
        setBreadcrumb(data.breadcrumb)
        break;
      }
      for (let j = 0; j < data.children.length; j++) {
        const dt = data.children[j]
        if (dt.to === pathname) {
          setName(dt.name)
          setBreadcrumb(dt.breadcrumb)
          break;
        }
      }
    }
  }, [pathname])

  return (
    <div className="w-full mb-4 bg-white">
      <div className="flex justify-between w-full">
        <div className="flex text-2xl px-4 pt-4 font-semibold">
          {name}
        </div>
        {/* <div className="flex px-4 pt-4 font-semibold">
          {pathname !== '/' && <Select
            options={options}
            value={options.find(p => p.value === systemCode)}
            onChange={(value) => dispatch(setSystemCode(value))}
          />
          }
        </div> */}
      </div>
      <div className="text-base p-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex flex-wrap  items-center space-x-1 md:space-x-3">
            <li className="flex items-center">
              <NavLink to="/" className={({ isActive }) => `flex items-center italic hover:text-green-sea ${isActive ? 'font-semibold' : 'text-gray-500'}`}>
                <span className="mr-2 w-4 h-4">
                  <FaHome />
                </span>
                Trang chủ
              </NavLink>
            </li>
            {breadcrumb.map((bc, index) => (
              <li key={index} >
                <div className='flex items-center'>
                  <MdOutlineKeyboardArrowRight style={{color: 'rgb(107 114 128)'}}/>
                  {bc.to
                    ? <NavLink
                      className={({ isActive }) => `italic ml-1 md:ml-2 hover:text-green-sea ${isActive ? 'font-semibold' : 'text-gray-500'}`}
                      to={bc.to}
                    >
                      {bc.name}
                    </NavLink>
                    : <span
                      className={`italic ml-1 md:ml-2 text-gray-500`}
                    >
                      {bc.name}
                    </span>
                  }
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div >
  )
}

export default Breadcrumb