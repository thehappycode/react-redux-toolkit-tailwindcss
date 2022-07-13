import { BASE_URL, USER_NAME, VERSION_API_SSO } from "../utils/appSettings"
import fetchData from "../utils/fetchData"

export const fetchApplications = async (codeSystem, applicationCode, pageNumber, size) => {
    const userName = USER_NAME()
    const { status, error, data } = await fetchData({
        baseURL: BASE_URL["API_SSO"],
        url: `${VERSION_API_SSO}/${codeSystem}/GetApplications/${applicationCode}/${userName}/${pageNumber}/${size}`,
        method: 'GET'
    })
    return { status, error, data }
}