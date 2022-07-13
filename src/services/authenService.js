import { BASE_URL } from '../utils/appSettings';
import fetchData from '../utils/fetchData';

export const fetchLogin = async ({payload}) => {
    const {userName, password} = payload
    const { status, error, data } = await fetchData({
        baseURL: BASE_URL["API_LOGIN"],
        url: '/api/Account',
        method: 'POST',
        body: { userName, password, systemName: "HRM" }
    })
    if(status === 200){
        const dt = {userName: data.data.Username, fullName: data.data.FullName, acceptToken: data.data.JWT}
        return { status, error,  data: dt}
    }
    return { status, error, data}
}   