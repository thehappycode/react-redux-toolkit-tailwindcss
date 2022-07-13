import { Link } from 'react-router-dom'
// import { BsFlag } from 'react-icons/bs'

const Item = ({ job, index, setSelectJob }) => {
    return (
        <tr>
            <td className="px-4 py-4 border-b border border-collapse border-gray-200 bg-white w-5%">
                {/* <BsFlag /> */}
                {index}
            </td>
            <td className="px-4 py-4 border-b border border-collapse border-gray-200 bg-white w-35% align-top">
                <a
                    onClick={() => {
                        setSelectJob(job)
                    }}
                    className="cursor-pointer"
                >
                    <div>
                        <span>
                            <b>
                                [{job.ApplicationName}]
                            </b>
                        </span>
                    </div>
                </a>
                <div>
                    <span className="text-xs text-gray-500">
                        Trích yếu:
                    </span>
                    <span className='italic' title={job.Description}>&nbsp;{job.SubDescription}</span>
                </div>
                <div>
                    <span className="text-xs text-gray-500">
                        Ghi chú:
                    </span>
                    &nbsp;{job.CommentLastLog}
                </div>
                <div>
                    <span className="text-xs text-gray-500">
                        Ngày tạo:
                    </span>
                    &nbsp;{job.CreatedDateFirstLog}
                </div>
                <div>
                    <span className="text-xs text-gray-500">
                        Người tạo:
                    </span>
                    &nbsp;{job.CreatedFullNameFirstLog}
                </div>
                <div>
                    <span className="bg-success text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                        {job.StatusApplication ? job.StatusApplication : job.StatusApplicationDiscuss}
                    </span>
                </div>
            </td>
            <td className="px-4 py-4 border-b border border-collapse border-gray-200 bg-white w-30% align-top">
                <div>
                    <b>{job.StageNameLastLog ? job.StageNameLastLog : ''}</b>
                </div>
                <div>
                    <span className="text-xs text-gray-500">
                        Ngày gửi:
                    </span>
                    &nbsp;{job.CreatedDatePreviousLastLog ? job.CreatedDatePreviousLastLog : ''}
                </div>
                <div>
                    <span className="text-xs text-gray-500">
                        Người gửi:
                    </span>
                    &nbsp;{job.CreatedFullNamePreviousLastLog ? job.CreatedFullNamePreviousLastLog : ''}
                </div>
                <div>
                    <span className="text-xs text-gray-500">
                        Đơn vị gửi:
                    </span>
                    &nbsp;{job.DepartmentNamePreviousLastLog ? job.DepartmentNamePreviousLastLog : ''}
                </div>
            </td>
            <td className="px-4 py-4 border-b border border-collapse border-gray-200 bg-white text-sm w-30% align-top">
                <div className="w-full bg-gray-200 rounded-full">
                    <div className="h4 bg-primary text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ 'width': '100%' }}>
                        KHÔNG XÁC ĐỊNH
                    </div>
                </div>
                <div>
                    <span className="text-xs text-gray-500">
                        Ngày hết hạn:
                    </span>
                    &nbsp;{job.DeadlineApplication ? job.DeadlineApplication : ''}
                </div>
                <div>
                    <span className="text-xs text-gray-500">
                        Báo cáo lại:
                    </span>
                    &nbsp;{job.CreatedFullNameAccetpLog ? job.CreatedFullNameAccetpLog : ''}
                </div>
            </td>
        </tr>
    )
}

export default Item