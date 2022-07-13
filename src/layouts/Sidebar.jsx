import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setSystemCode } from '../redux/slices/applicationSettingsSlice'
import { selectDashboard } from '../redux/slices/dashboardSlice'
import { handleAutoCloseSidebar, selectLayout } from '../redux/slices/layoutSlice'
import { SIDE_BAR_MENU } from '../utils/appSettings'

const Sidebar = () => {
    const { isOpenSidebar } = useSelector(selectLayout);
    const dataDashboard = useSelector(selectDashboard);
    const dispatch = useDispatch()
    const collapseToogle = (id) => {
        const element = document.getElementById(id)
        const classes = element.className
        if (classes.includes('hidden')) {
            element.classList.remove("hidden")
        }
        else {
            element.classList.add("hidden")
        }
    }
    const handleActiveSidebar = (pathName) => {
        dispatch(handleAutoCloseSidebar())
        if (pathName && pathName !== "/") {
            const systemCode = pathName.substring(1).toUpperCase()
            dispatch(setSystemCode({ systemCode }))
        }
    }

    return (
        <aside className={`${isOpenSidebar ? 'w-72' : 'w-20'}`} aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-white rounded">
                {isOpenSidebar ?
                    <ul className="space-y-2 items-center">
                        {SIDE_BAR_MENU.map((data, index) => (
                            !data.children.length
                                ? <li
                                    key={index}
                                    title={data.name}
                                    className="border-t pt-2"
                                >
                                    <NavLink
                                        to={data.to}
                                        onClick={handleActiveSidebar.bind(this, data.to)}
                                        className={({ isActive }) => `flex items-center p-2 rounded-lg transition duration-75 group ${isActive ? 'bg-green-sea text-white' : 'hover:bg-gray-300'}`
                                        }
                                    >
                                        {data.icon}
                                        <span className='ml-3'>{data.name}</span>
                                    </NavLink>
                                </li>
                                : <li
                                    key={index}
                                    title={data.name}
                                    className="border-t pt-2"
                                >
                                    <button
                                        type="button"
                                        className={`flex items-center justify-between p-2 w-full rounded-lg transition duration-75 group hover:bg-gray-300`
                                        }
                                        onClick={collapseToogle.bind(this, `dropdown-${index}`)}
                                    >
                                        {data.icon}
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">{data.name}</span>
                                        <span className="inline-flex justify-center items-center p-1 text-xs font-medium text-white bg-secondary rounded-full">{
                                            dataDashboard.ECM.reduce(
                                                (previousValue, currentValue) => previousValue + currentValue,
                                                0
                                            )
                                            + dataDashboard.BOS.reduce(
                                                (previousValue, currentValue) => previousValue + currentValue,
                                                0
                                            )
                                            + dataDashboard.LOS.reduce(
                                                (previousValue, currentValue) => previousValue + currentValue,
                                                0
                                            )
                                            + dataDashboard.BMS.reduce(
                                                (previousValue, currentValue) => previousValue + currentValue,
                                                0
                                            )
                                            + dataDashboard.TMS.reduce(
                                                (previousValue, currentValue) => previousValue + currentValue,
                                                0
                                            )
                                        }</span>
                                        <MdOutlineKeyboardArrowDown />
                                    </button>
                                    <ul
                                        id={`dropdown-${index}`}
                                        className="py-2 space-y-2">
                                        {data.children.map((dt, i) => (
                                            <li
                                                key={`${index}-${i}`}
                                                title={dt.name}
                                                className='pl-3'
                                            >
                                                <NavLink
                                                    to={dt.to}
                                                    onClick={handleActiveSidebar.bind(this, dt.to)}
                                                    className={({ isActive }) => isActive ? `flex items-center justify-between p-2 w-full rounded-lg transition duration-75 group bg-green-sea text-white` : `flex items-center justify-between p-2 w-full rounded-lg transition duration-75 group hover:bg-gray-300`}
                                                >
                                                    {dt.icon}
                                                    <span className='flex ml-3'>{dt.name}</span>
                                                    <span className="inline-flex justify-center items-center p-1 text-xs font-medium text-white bg-secondary rounded-full">{
                                                        dataDashboard[dt.to.substring(1).toUpperCase()].reduce(
                                                            (previousValue, currentValue) => previousValue + currentValue,
                                                            0
                                                        )
                                                    }</span>
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                        ))}
                    </ul>
                    : <ul className='space-y-2 flex flex-wrap items-center'>
                        {SIDE_BAR_MENU.map((data, index) => (
                            !data.children.length
                                ? <li
                                    key={index}
                                    title={data.name}
                                    className="border-t pt-2"
                                >
                                    <NavLink
                                        to={data.to}
                                        className={({ isActive }) => `flex items-center p-2 rounded-lg transition duration-75 group ${isActive ? 'bg-green-sea text-white' : ''}`
                                        }
                                    >
                                        {data.icon}
                                    </NavLink>
                                </li>
                                : <li key={index}
                                    className="border-t pt-2"
                                    title={data.name}
                                >
                                    <button
                                        className={`flex items-center justify-between p-2 rounded-lg transition duration-75 group `
                                        }
                                        onClick={collapseToogle.bind(this, `dropdown-${index}`)}
                                    >
                                        {data.icon}
                                        <MdOutlineKeyboardArrowDown />
                                    </button>
                                    <ul
                                        id={`dropdown-${index}`}
                                        className="hidden space-y-2 flex-wrap items-center">
                                        {data.children.map((dt, i) => (
                                            <li key={`${index}-${i}`}
                                                className='pl-3'
                                                title={dt.name}
                                            >
                                                <NavLink
                                                    to={dt.to}
                                                    className={({ isActive }) => isActive ? `flex items-center p-2 w-full rounded-lg transition duration-75 group bg-green-sea text-white` : `flex items-center p-2 w-full rounded-lg transition duration-75 group `}
                                                >
                                                    {dt.icon}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                        ))}
                    </ul>
                }
            </div>
        </aside>
    )
}

export default Sidebar