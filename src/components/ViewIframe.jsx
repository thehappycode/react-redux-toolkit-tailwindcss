import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CgClose } from 'react-icons/cg'
import { selectApplicationSettings } from '../redux/slices/applicationSettingsSlice'
import { selectAuthen } from '../redux/slices/authenSlice'

import Iframe from './Iframe'
import { BASE_URL, SECRET_KEY } from '../utils/appSettings'

const ViewIframe = ({ selectJob, setSelectJob }) => {
    const { systemCode } = useSelector(selectApplicationSettings);
    const { userName } = useSelector(selectAuthen)
    const [url, setURL] = useState('')
    useEffect(() => {
        setURL(`${BASE_URL[systemCode]}/#application/detail/${selectJob.ApplicationId}`)
    }, [url])
    return (
        <div className="overflow-y-auto overflow-x-hidden absolute top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
            <div className="relative p-6 w-full h-full md:h-auto">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg drop-shadow-lg">
                    {/* Modal header */}
                    <div className="flex justify-between items-center p-5 rounded-t border">
                        <h3 className="text-xl font-medium text-gray-900">
                            {selectJob.ApplicationName}
                        </h3>
                        <button
                            onClick={() => setSelectJob(null)}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="extralarge-modal">
                            <CgClose style={{ width: '1.25rem', height: '1.25rem' }} />
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-6 border w-full">
                        <Iframe
                            src={url}
                            sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
                            userName={userName}
                            secretKey={SECRET_KEY}
                            style={{ display: 'block', border: 'none', width: 'inherit', height: '100vh' }}
                        >
                            <div id={`sso-iframe-${selectJob.ApplicationId}`}></div>
                        </Iframe>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ViewIframe