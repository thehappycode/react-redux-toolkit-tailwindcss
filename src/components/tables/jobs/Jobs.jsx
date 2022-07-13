import { useState } from 'react'
import { CgMenuRound } from 'react-icons/cg'
import { SIZE } from '../../../utils/appSettings'
import ViewIframe from '../../ViewIframe'
import Pagination from '../../Pagination'
import Item from './Item'
const Jobs = ({ jobs, totalEntity, totalPage, pageNumber, setPageNumber }) => {
    const [selectJob, setSelectJob] = useState(null)
    return (
        <>
            <table className="table-auto w-full border-collapse border border-gray-200">
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
                    {jobs.map((job, index) => (
                        <Item
                            key={index}
                            job={job}
                            index={SIZE * (pageNumber - 1) + index + 1}
                            setSelectJob={setSelectJob}
                        />
                    ))}
                </tbody>
                {pageNumber > 0 &&
                    <tfoot>
                        <tr>
                            <td colSpan='2' className='px-4 py-4 bg-white'>
                                {jobs.length ?
                                    <div className="text-sm italic">
                                        Hiện từ {SIZE * (pageNumber - 1) + 1} đến {(SIZE * pageNumber) < totalEntity ? SIZE * pageNumber : totalEntity} của {totalEntity} công việc
                                    </div>
                                    : <div className="text-sm italic">
                                        Không tìm thấy công việc
                                    </div>
                                }
                            </td>
                            <td colSpan='2' className='px-4 py-4 bg-white'>
                                <div className="mt-2 xs:mt-0 float-right">
                                    {/* pagination */}
                                    <Pagination
                                        totalPage={totalPage}
                                        pageNumber={pageNumber}
                                        setPageNumber={setPageNumber}
                                    />
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                }
            </table>
            {selectJob && <ViewIframe
                selectJob={selectJob}
                setSelectJob={setSelectJob}
                />
            }
        </>
    )
}

export default Jobs