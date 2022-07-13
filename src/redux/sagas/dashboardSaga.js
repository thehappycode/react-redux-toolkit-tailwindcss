import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchDashboard } from '../../services/dashboardService'

import {
    successDashboard,
    failureDashboard
} from '../slices/dashboardSlice'

function* requestDashboard(payload) {
    const { status, error, data } = yield call(fetchDashboard, payload)
    if (status === 200) {
        yield put(successDashboard(data))
    } else {
        yield put(failureDashboard({error}))
    }

}

function* dashboardSaga() {
    yield takeLatest('dashboard/requestDashboard', requestDashboard)
}

export default dashboardSaga