import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchLogin } from '../../services/authenService'
import {
    successLogin,
    failureLogin,
    successLogout,
    failureLogout
} from '../slices/authenSlice'

function* requestLogin(payload) {
    const { status, error, data } = yield call(fetchLogin, payload)
    if (status === 200) {
        yield put(successLogin(data))
    } else {
        yield put(failureLogin({error}))
    }

}

function* requestLogout() {
    const { response, error } = yield call(() => { }, [])
    if (error) {
        yield put(failureLogout(error))
    } else {
        yield put(successLogout(response))
    }

}

function* authenSaga() {
    yield takeLatest('authen/requestLogin', requestLogin)
    yield takeLatest('authen/requestLogout', requestLogout)
}

export default authenSaga