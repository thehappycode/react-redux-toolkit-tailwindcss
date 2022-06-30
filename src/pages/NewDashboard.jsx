import React from 'react'
import { RiInboxArchiveFill, RiFileCopy2Fill, RiDiscussFill } from 'react-icons/ri'
import {GrTasks} from 'react-icons/gr'
import { rgba, colorChart } from '../utils/data'
const NewDashboard = () => {
    return (
        <div className='flex flex-wrap mx-auto w-full'>
            <div className='w-full md:w-9/12 bg-red-200 p-2 uppercase'>
                danh sách công việc 
            </div>
            <div className=' w-full md:w-3/12 bg-white p-2'>
                <div className="border border-gray-200 p-2">
                    <div className='flex items-center text-base font-semibold uppercase p-4'>
                        <GrTasks />
                        &nbsp; danh sách công việc </div>
                    <div className='flex items-center p-2 border-t border-gray-200'>
                        <div className='inline-flex items-center border-2 rounded-full border-warning font-semibold p-1.5' style={{width: '44px', height: '44px'}}>
                            <div>
                            ECM
                            </div>
                        </div>
                        <div className='pl-4 text-gray-600 w-full'>
                            <div className='flex items-center'>
                                <RiInboxArchiveFill style={{fontSize: '1rem' }} /> 
                                &nbsp; Hồ sơ đến: 100
                            </div>
                            <div className='flex items-center'>
                                <RiFileCopy2Fill style={{ fontSize: '1rem' }} /> 
                                &nbsp; Hồ sơ CC: 110
                            </div>
                            <div className='flex items-center'>
                                <RiDiscussFill style={{ fontSize: '1rem' }} /> 
                                &nbsp; Hồ sơ thảo luận: 10
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center p-2 border-t border-gray-200'>
                        <div className='inline-flex items-center border-2 rounded-full border-success font-semibold p-1.5' style={{width: '44px', height: '44px'}}>
                            <div>
                            BOS
                            </div>
                        </div>
                        <div className='pl-4 text-gray-600 w-full'>
                            <div className='flex items-center'>
                                <RiInboxArchiveFill style={{fontSize: '1rem' }} /> 
                                &nbsp; Hồ sơ đến: 100
                            </div>
                            <div className='flex items-center'>
                                <RiFileCopy2Fill style={{ fontSize: '1rem' }} /> 
                                &nbsp; Hồ sơ CC: 110
                            </div>
                            <div className='flex items-center'>
                                <RiDiscussFill style={{ fontSize: '1rem' }} /> 
                                &nbsp; Hồ sơ thảo luận: 10
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center p-2 border-t border-gray-200'>
                        <div className='inline-flex items-center border-2 rounded-full border-danger font-semibold p-1.5' style={{width: '44px', height: '44px'}}>
                            <div>
                            LOS
                            </div>
                        </div>
                        <div className='pl-4 text-gray-600 w-full'>
                            <div className='flex items-center'>
                                <RiInboxArchiveFill style={{fontSize: '1rem' }} /> 
                                &nbsp; Hồ sơ đến: 100
                            </div>
                            <div className='flex items-center'>
                                <RiFileCopy2Fill style={{ fontSize: '1rem' }} /> 
                                &nbsp; Hồ sơ CC: 110
                            </div>
                            <div className='flex items-center'>
                                <RiDiscussFill style={{ fontSize: '1rem' }} /> 
                                &nbsp; Hồ sơ thảo luận: 10
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center p-2 border-t border-gray-200'>
                        <div className='inline-flex items-center border-2 rounded-full border-primary font-semibold p-1.5' style={{width: '44px', height: '44px'}}>
                            <div>
                            BMS
                            </div>
                        </div>
                        <div className='pl-4 text-gray-600 w-full'>
                            <div className='flex items-center'>
                                <RiInboxArchiveFill style={{fontSize: '1rem' }} /> 
                                &nbsp; Hồ sơ đến: 100
                            </div>
                            <div className='flex items-center'>
                                <RiFileCopy2Fill style={{ fontSize: '1rem' }} /> 
                                &nbsp; Hồ sơ CC: 110
                            </div>
                            <div className='flex items-center'>
                                <RiDiscussFill style={{ fontSize: '1rem' }} /> 
                                &nbsp; Hồ sơ thảo luận: 10
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center p-2 border-t border-gray-200'>
                        <div className='inline-flex items-center border-2 rounded-full border-alternate font-semibold p-1.5' style={{width: '44px', height: '44px'}}>
                            <div>
                            TMS
                            </div>
                        </div>
                        <div className='pl-4 text-gray-600 w-full'>
                            <div className='flex items-center'>
                                <RiInboxArchiveFill style={{fontSize: '1rem' }} /> 
                                &nbsp; Hồ sơ đến: 100
                            </div>
                            <div className='flex items-center'>
                                <RiFileCopy2Fill style={{ fontSize: '1rem' }} /> 
                                &nbsp; Hồ sơ CC: 110
                            </div>
                            <div className='flex items-center'>
                                <RiDiscussFill style={{ fontSize: '1rem' }} /> 
                                &nbsp; Hồ sơ thảo luận: 10
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewDashboard