import { all } from 'redux-saga/effects'
import authenSaga from './authenSaga'
import dashboardSaga from './dashboardSaga'

function* saga() {
    yield all([
        authenSaga(),
        dashboardSaga()
    ])
}

export default saga