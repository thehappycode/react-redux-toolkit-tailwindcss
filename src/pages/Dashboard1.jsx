import { useState, useEffect } from 'react'
import { BsMailbox2 } from 'react-icons/bs'
import { FaMailBulk } from 'react-icons/fa'
import { SiWechat } from 'react-icons/si'
import { GiCubes } from 'react-icons/gi'
import { RiTableFill } from 'react-icons/ri'
import { LineChart } from '../components/charts'
import { rgba, colorChart, dataInboxAriaChart, dataCCAriaChart, dataDiscussAriaChart, dataVerticalBarChart } from '../utils/data'
import BarChart from '../components/charts/BarChart'
import { Systems } from '../components/tables'
const Dashboard1 = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [dataInboxChart, setDataInboxChart] = useState(null)
    const [dataCCChart, setDataCCChart] = useState(null)
    const [dataDiscussChart, setDataDiscussChart] = useState(null)
    const [dataChart, setDataChart] = useState(null)
    const optionsArea = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                },
                // ticks: {
                //     stepSize: 1
                // }
            }
        },
        plugins: {
            title: {
                display: false,
                text: 'Biểu đồ hồ sơ đến.',
            },
            legend: {
                display: false
            }
        }
    }
    const optionBar = {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        }
    }
    useEffect(() => {
        setDataInboxChart(dataInboxAriaChart)
        setDataCCChart(dataCCAriaChart)
        setDataDiscussChart(dataDiscussAriaChart)
        setDataChart(dataVerticalBarChart)
        setIsLoading(false)
    }, [])
    if (isLoading)
        return <div>loading...</div>
    return (
        <div className='flex flex-wrap w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
                <div className='w-full'>
                    <div className='p-2 bg-white'>
                        {/* Header */}
                        <div className='flex items-center border-b border-gray-200 p-4 font-bold text-xl uppercase'>
                            <BsMailbox2 style={{ color: rgba(...colorChart.inbox), fontSize: '1.75rem' }} />
                            &nbsp; Hồ sơ đến
                        </div>
                        {/* Body */}
                        <div className='pb-4'>
                            <LineChart data={dataInboxChart} options={optionsArea} width={'100%'} height={'200px'} />
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='p-2 bg-white'>
                        {/* Header */}
                        <div className='flex items-center border-b border-gray-200 p-4 font-bold text-xl uppercase'>
                            <FaMailBulk style={{ color: rgba(...colorChart.cc), fontSize: '1.75rem' }} />
                            &nbsp; Hồ sơ CC
                        </div>
                        {/* Body */}
                        <div className='pb-4'>
                            <LineChart data={dataCCChart} options={optionsArea} width={'100%'} height={'200px'} />
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='p-2 bg-white'>
                        {/* Header */}
                        <div className='flex items-center border-b border-gray-200 p-4 font-bold text-xl uppercase'>
                            <SiWechat style={{ color: rgba(...colorChart.discuss), fontSize: '1.75rem' }} />
                            &nbsp; Hồ sơ thảo luận
                        </div>
                        {/* Body */}
                        <div className='pb-4'>
                            <LineChart data={dataDiscussChart} options={optionsArea} width={'100%'} height={'200px'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4'>
                <div className='w-full bg-white'>
                    <div className='p-2'>
                        {/* Header */}
                        <div className='flex items-center border-b border-gray-200 p-4 font-bold text-xl uppercase'>
                            <GiCubes style={{ color: rgba(...colorChart.danger), fontSize: '1.75rem' }} />
                            &nbsp; biểu đồ hệ thống
                        </div>
                        {/* Body */}
                        <div className='pd-4'>
                            <BarChart data={dataChart} options={optionBar} width={'100%'} height={'200px'} />
                        </div>
                    </div>
                </div>
                <div className='w-full bg-white'>
                    <div className='p-2'>
                        {/* Header */}
                        <div className='flex items-center border-b border-gray-200 p-4 font-bold text-xl uppercase'>
                            <RiTableFill style={{ color: rgba(...colorChart.alternate), fontSize: '1.75rem' }} />
                            &nbsp; Bảng hệ thống
                        </div>
                        {/* Body */}
                        <div className='pd-4'>
                            <Systems />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-32'>
                <div>
                    &nbsp;
                </div>
            </div>
        </div>
    )
}

export default Dashboard1