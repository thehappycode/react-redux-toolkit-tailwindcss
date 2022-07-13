import React from 'react'
import { BsMailbox2 } from 'react-icons/bs'
import { FaMailBulk } from 'react-icons/fa'
import { SiWechat } from 'react-icons/si'
import { APPLICATION_CODES } from '../../../utils/appSettings'

const Jobs = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <ul className="pl-2 flex flex-wrap -mb-px text-sm font-medium text-center">
            <li className="mr-2">
                <button
                    onClick={() => setActiveTab(APPLICATION_CODES[0])}
                    className={`inline-flex p-4 rounded-t-lg border-b-2 group ${activeTab === APPLICATION_CODES[0] ? 'active border-green-sea' : 'border-transparent text-gray-500 hover:border-gray-700 hover:text-gray-700'}`}>
                    <BsMailbox2 style={{ marginRight: '.5rem', width: '1.25rem', height: '1.25rem' }} />
                    Hồ sơ đến
                    <span className="inline-flex justify-center items-center p-1 ml-1 text-xs font-medium text-white bg-secondary rounded-full">{tabs[0]}</span>
                </button>
            </li>
            <li className="mr-2">
                <button
                    onClick={() => setActiveTab(APPLICATION_CODES[1])}
                    className={`inline-flex p-4 rounded-t-lg border-b-2 group ${activeTab === APPLICATION_CODES[1] ? 'active border-green-sea' : 'border-transparent text-gray-500 hover:border-gray-700 hover:text-gray-700'}`}>
                    <FaMailBulk style={{ marginRight: '.5rem', width: '1.25rem', height: '1.25rem' }}
                    />
                    Hồ sơ CC
                    <span className="inline-flex justify-center items-center p-1 ml-1 text-xs font-medium text-white bg-secondary rounded-full">{tabs[1]}</span>
                </button>
            </li>
            <li className="mr-2">
                <button
                    onClick={() => setActiveTab(APPLICATION_CODES[2])}
                    className={`inline-flex p-4 rounded-t-lg border-b-2 group ${activeTab === APPLICATION_CODES[2] ? 'active border-green-sea' : 'border-transparent text-gray-500 hover:border-gray-700 hover:text-gray-700'}`}>
                    <SiWechat style={{ marginRight: '.5rem', width: '1.25rem', height: '1.25rem' }} />
                    Hồ sơ thảo luận
                    <span className="inline-flex justify-center items-center p-1 ml-1 text-xs font-medium text-white bg-secondary rounded-full">{tabs[2]}</span>
                </button>
            </li>
        </ul>
    )
}

export default Jobs