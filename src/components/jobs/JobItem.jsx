import { Link } from 'react-router-dom'
import { BsFlag } from 'react-icons/bs'

const JobItem = ({job}) => {
    console.log(job);
    return (
        <tr>
            <td className="px-4 py-4 border-b border border-collapse border-gray-200 bg-white text-xl w-5%">
                <BsFlag />
            </td>
            <td className="px-4 py-4 border-b border border-collapse border-gray-200 bg-white text-sm w-35% align-top">
                <Link to={'/'}>
                    <div>
                        <span>
                            <b>
                                [41/2022/QT2.1TD/QLĐACN]
                            </b>
                        </span>
                        <span>bacd ...</span>
                    </div>
                </Link>
                <div>
                    <span className="text-xs text-gray-500">
                        Ghi chú:
                    </span>
                    &nbsp;Ghi chú
                </div>
                <div>
                    <span className="text-xs text-gray-500">
                        Ngày tạo:
                    </span>
                    &nbsp;Ngày tạo
                </div>
                <div>
                    <span className="text-xs text-gray-500">
                        Người tạo:
                    </span>
                    &nbsp;Người tạo
                </div>
                <div>
                    <span className="bg-primary text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                        Default
                    </span>
                </div>
            </td>
            <td className="px-4 py-4 border-b border border-collapse border-gray-200 bg-white text-sm w-30% align-top">
                <div>
                    <b>CV QLNSĐT khởi tạo hồ sơ</b>
                </div>
                <div>
                    <span className="text-xs text-gray-500">
                        Ngày gửi:
                    </span>
                    &nbsp;Ngày gửi
                </div>
                <div>
                    <span className="text-xs text-gray-500">
                        Ghi chú:
                    </span>
                    &nbsp;Người gửi
                </div>
                <div>
                    <span className="text-xs text-gray-500">
                        Đơn vị gửi:
                    </span>
                    &nbsp;Đơn vị gửi
                </div>
            </td>
            <td className="px-4 py-4 border-b border border-collapse border-gray-200 bg-white text-sm w-30% align-top">
                <div className="w-full bg-gray-200 rounded-full">
                    <div className="h4 bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ 'width': '45%' }}>
                        45%
                    </div>
                </div>
                <div>
                    <span className="text-xs text-gray-500">
                        Ngày hết hạn:
                    </span>
                    &nbsp;Ngày hết hạn
                </div>
                <div>
                    <span className="text-xs text-gray-500">
                        Báo cáo lại:
                    </span>
                    &nbsp;Báo cáo lại
                </div>
            </td>
        </tr>
    )
}

export default JobItem