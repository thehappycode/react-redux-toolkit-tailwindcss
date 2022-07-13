import { BASE_URL, USER_NAME, VERSION_API_SSO } from "../utils/appSettings"
import fetchData from "../utils/fetchData"

export const fetchDashboard = async () => {
    const userName = USER_NAME()
    const { status, error, data } = await fetchData({
        baseURL: BASE_URL["API_SSO"],
        url: `${VERSION_API_SSO}/Dashboard/GetSummary/${userName}`,
        method: 'GET'
    })
    return { status, error, data: data.Content }
}