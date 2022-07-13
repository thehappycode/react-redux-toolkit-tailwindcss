import React from 'react'
import Item from './Item'

const Systems = ({systems}) => {
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
            {/* <th
              className="p-2 border border-gray-200 text-left bg-white font-bold uppercase tracking-wider">
              Tỷ trọng
            </th> */}
          </tr>
        </thead>
        <tbody>
          {systems.map((system, index) => (
            <Item 
              key={index}
              system={system}
              index={index}
            />

          ))}
        </tbody>

      </table>
    </div>

  )
}

export default Systems