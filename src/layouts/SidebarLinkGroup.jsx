import { useState } from 'react'

const SidebarLinkGroup = ({ children, isActive }) => {
    const [isOpen, setIsOpen] = useState(isActive)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${isActive && 'bg-slate-900'}`}>
            {children(handleClick, isOpen)}
        </li>
    )
}

export default SidebarLinkGroup