import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TableJobs } from '../../components/tables';
import { TabJobs } from '../../components/tabs';
import { selectApplicationSettings } from '../../redux/slices/applicationSettingsSlice';
import { selectDashboard } from '../../redux/slices/dashboardSlice';
import { fetchApplications } from '../../services/applicationService';
import { APPLICATION_CODES, SIZE } from '../../utils/appSettings';

const Index = () => {
    const { systemCode } = useSelector(selectApplicationSettings);
    const { LOS } = useSelector(selectDashboard);

    const [applications, setAplications] = useState([])
    const [totalEntity, setTotalEntity] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)
    const [activeTab, setActiveTab] = useState(APPLICATION_CODES[0])
    const requestApplications = async () => {
        const res = await fetchApplications(systemCode, activeTab, pageNumber, SIZE)
        const { status, error, data } = res
        if (status === 200) {
            setTotalEntity(data.Content.TotalEntity)
            setTotalPage(data.Content.TotalPage)
            setAplications(data.Content.Data)
        }
        else {
            // Toast
        }

    }
    useEffect(() => {
        requestApplications();
    }, [activeTab, systemCode, pageNumber])
    return (
        <div className='flex flex-wrap w-full bg-white mb-16'>
            <div className="m-4 w-full border border-gray-200">
                <TabJobs
                    tabs={LOS}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <div className='w-full mt-2'>
                    <TableJobs
                        jobs={applications}
                        totalEntity={totalEntity}
                        totalPage={totalPage}
                        pageNumber={pageNumber}
                        setPageNumber={setPageNumber}
                    />
                </div>
            </div>
        </div>
    )
}

export default Index