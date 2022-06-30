import React from 'react'
import SystemItem from './SystemItem'

const Systems = () => {
  return (
    <div className="overflow-hidden">
      <table className="table-auto w-full ">
        <thead>
          <tr>
            <th className="p-2 border border-gray-200 text-left bg-white font-bold uppercase tracking-wider">
              Hệ thống
            </th>
            <th
              className=" p-2 border border-gray-200 text-left bg-white font-bold uppercase tracking-wider">
              Hồ sơ đến
            </th>
            <th
              className="p-2 border border-gray-200 text-left bg-white font-bold uppercase tracking-wider">
              Hồ sơ CC
            </th>
            <th
              className="p-2 border border-gray-200 text-left bg-white font-bold uppercase tracking-wider">
              HS thảo luận
            </th>
            <th
              className="p-2 border border-gray-200 text-left bg-white font-bold uppercase tracking-wider">
              Tỷ trọng
            </th>
          </tr>
        </thead>
        <tbody>
          {/* <SystemItem /> */}
          <tr>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              <div className='inline-flex items-center border-2 rounded-full border-alternate font-semibold p-1.5' style={{ width: '44px', height: '44px' }}>
                <div>
                  ECM
                </div>
              </div>
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              2
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              3
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              4
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              5
            </td>
          </tr>
          <tr>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              <div className='inline-flex items-center border-2 rounded-full border-alternate font-semibold p-1.5' style={{ width: '44px', height: '44px' }}>
                <div>
                  BOS
                </div>
              </div>
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              2
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              3
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              4
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              5
            </td>
          </tr>
          <tr>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              <div className='inline-flex items-center border-2 rounded-full border-alternate font-semibold p-1.5' style={{ width: '44px', height: '44px' }}>
                <div>
                  LOS
                </div>
              </div>
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              2
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              3
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              4
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              5
            </td>
          </tr>
          <tr>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              <div className='inline-flex items-center border-2 rounded-full border-alternate font-semibold p-1.5' style={{ width: '44px', height: '44px' }}>
                <div>
                  BMS
                </div>
              </div>
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              2
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              3
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              4
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              5
            </td>
          </tr>
          <tr>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              <div className='inline-flex items-center border-2 rounded-full border-alternate font-semibold p-1.5' style={{ width: '44px', height: '44px' }}>
                <div>
                  TMS
                </div>
              </div>
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              2
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              3
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              4
            </td>
            <td className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
              5
            </td>
          </tr>
        </tbody>

      </table>
    </div>

  )
}

export default Systems