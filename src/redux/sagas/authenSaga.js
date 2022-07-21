import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchLogin } from '../../services/authenService'
import {
    successLogin,
    failureLogin
} from '../slices/authenSlice'

function* requestLogin(payload) {
    const { status, error, data } = yield call(fetchLogin, payload)
    if (status === 200) {
        yield put(successLogin(data))
    } else {
        yield put(failureLogin({error}))
    }

}

function* authenSaga() {
    yield takeLatest('authen/requestLogin', requestLogin)
}

export default authenSaga