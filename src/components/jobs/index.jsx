import { useState, useEffect } from 'react'
import { CgMenuRound } from 'react-icons/cg'
import Pagination from '../Pagination'
import { jobs } from '../../data'
import JobItem from './JobItem'

const Jobs = () => {
    console.log(jobs);
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
                            <th className="px-4 py-3 border-b-2 border border-collapse border-gray-200 text-left bg-white text-xs font-bold uppercase tracking-wider w-5% text-2xl">
                                <CgMenuRound />
                            </th>
                            <th className="px-4 py-3 border-b-2 border border-collapse border-gray-200 text-left bg-white text-xs font-bold uppercase tracking-wider w-35%">
                                Hồ sơ
                            </th>
                            <th
                                className=" px-4 py-3 border-b-2 border border-collapse border-gray-200 text-left bg-white text-xs font-bold uppercase tracking-wider w-30%">
                                Bước xử lý
                            </th>
                            <th
                                className="px-4 py-3 border-b-2 border border-collapse border-gray-200 text-left bg-white text-xs font-bold uppercase tracking-wider w-30%">
                                Tiến độ
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map(job => (
                            <JobItem key={job.id} job={job} />
                        ))}
                    </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                    <span className="text-xs xs:text-sm text-gray-900">
                        Showing 1 to 4 of 50 Entries
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                        {/* pagination */}
                        <Pagination totalPage={totalPage} activePage={activePage} setActivePage={setActivePage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs