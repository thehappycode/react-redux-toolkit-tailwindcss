import { useEffect, useState } from "react"
import { RiInboxArchiveFill, RiInboxUnarchiveFill, RiDiscussFill } from 'react-icons/ri'
import Card from "../components/card"
import { DoughnutChart, LineChart } from "../components/charts"
import Jobs from "../components/jobs"
import { dataDoughnutChart, dataAriaChart, rgba, colorChart } from "../utils/data"

const Dashboard = () => {
  // chart
  const [dataDoughnut, setDataDoughnut] = useState(null)
  const [dataArea, setDataArea] = useState(null)
  useEffect(() => {
    setDataDoughnut(dataDoughnutChart)
    setDataArea(dataAriaChart)
  }, [dataDoughnut])

  // render 
  if (!dataDoughnut)
    return (
      <div>Loading...</div>
    )
  return (
    <div className="container mx-auto">
      {/* card system */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-6">
        <div className="flex flex-row justify-center items-center bg-white rounded-lg p-6">
          <div className="w-full sm:w-full md:w-6/12 lg:w-5/12 xl:w-4/12">
            <DoughnutChart dataChart={dataDoughnut} />
          </div>
          <div className="w-full sm:w-full md:w-6/12 lg:w-7/12 xl:w-8/12 ml-4">
            <div className="text-xl">Hệ thống ECM </div>
            <div className="flex items-center"> <RiInboxArchiveFill style={{ color: rgba(...colorChart.inbox, .5) }} /> &nbsp; Hồ sơ đến: 3</div>
            <div className="flex items-center"> <RiDiscussFill style={{ color: rgba(...colorChart.discuss, .5) }} /> &nbsp; Hồ sơ thảo luận: 5</div>
            <div className="flex items-center"> <RiInboxUnarchiveFill style={{ color: rgba(...colorChart.sendbox, .5) }} /> &nbsp; Hồ sơ đã xử lý: 13</div>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-full md:w-6/12 lg:w-3/12 xl:w-4/12">
              chart
            </div>
            <div className="w-full sm:w-full md:w-6/12 lg:w-9/12 xl:w-8/12">
              info
            </div>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-full md:w-6/12 lg:w-3/12 xl:w-4/12">
              chart
            </div>
            <div className="w-full sm:w-full md:w-6/12 lg:w-9/12 xl:w-8/12">
              info
            </div>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-full md:w-6/12 lg:w-3/12 xl:w-4/12">
              chart
            </div>
            <div className="w-full sm:w-full md:w-6/12 lg:w-9/12 xl:w-8/12">
              info
            </div>
          </div>
        </div>
      </div>
      {/* table system */}
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4">
        <div className="inline-block min-w-full shadow rounded-lg">
          <table className="table-auto min-w-full">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-10%">
                  Hệ thống
                </th>
                <th
                  className=" px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-30%">
                  Hồ sơ đến
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-30%">
                  Hồ sơ thảo luận
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-30%">
                  Hồ sơ đã xử lý
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-10%">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        ECM
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-30%">
                  <LineChart data={dataArea} options={{ maintainAspectRatio: false }} width={'100%'} height={'100px'} />
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-30%">
                  <LineChart data={dataArea} options={{ maintainAspectRatio: false }} width={'100%'} height={'100px'} />
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-30%">
                  <LineChart data={dataArea} options={{ maintainAspectRatio: false }} width={'100%'} height={'100px'} />
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-10%">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        BOS
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-30%">
                  <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-30%">
                  <p className="text-gray-900 whitespace-no-wrap" >
                    Jan 01, 2020
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-30%">
                  <p className="text-gray-900 whitespace-no-wrap">
                    77
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
            {/* <span className="text-xs xs:text-sm text-gray-900">
              Showing 1 to 4 of 50 Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button
                className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                Prev
              </button>
              &nbsp; &nbsp;
              <button
                className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                Next
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {/* table grid */}
     <Jobs />
     {/* card */}
     <Card />
    </div>
  )
}

export default Dashboard