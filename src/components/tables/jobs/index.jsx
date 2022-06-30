import { useState, useEffect } from 'react'
import { CgMenuRound } from 'react-icons/cg'
import Pagination from '../../Pagination'
import { jobs } from '../../../data'
import JobItem from './JobItem'

const Jobs = () => {
    const totalPage = 5;
    const [activePage, setActivePage] = useState(3)
    useEffect(() => {
        //setActivePage(3)
        console.log('change page');
    }, [activePage])
    return (
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="table-fix min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 border-b-2 border border-collapse border-gray-200 text-left bg-white text-2xl font-bold uppercase tracking-wider w-5%">
                                <CgMenuRound />
                            </th>
                            <th className="px-4 py-3 border-b-2 border border-collapse border-gray-200 text-left bg-white font-bold uppercase tracking-wider w-35%">
                                Hồ sơ
                            </th>
                            <th
                                className=" px-4 py-3 border-b-2 border border-collapse border-gray-200 text-left bg-white font-bold uppercase tracking-wider w-30%">
                                Bước xử lý
                            </th>
                            <th
                                className="px-4 py-3 border-b-2 border border-collapse border-gray-200 text-left bg-white font-bold uppercase tracking-wider w-30%">
                                Tiến độ
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map(job => (
                            <JobItem key={job.id} job={job} />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='2' className='px-4 py-4 bg-white'>
                                <div className="text-xs text-gray-900">
                                    Showing 1 to 4 of 50 Entries
                                </div>
                            </td>
                            <td colSpan='2' className='px-4 py-4 bg-white'>
                                <div className="mt-2 xs:mt-0 float-right">
                                    {/* pagination */}
                                    <Pagination totalPage={totalPage} activePage={activePage} setActivePage={setActivePage} />
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default Jobs