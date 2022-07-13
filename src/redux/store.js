import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import saga from './sagas'
import {
    applicationSettingsReducer,
    layoutReducer,
    authenReducer,
    dashboardReducer
} from './slices'


const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        applicationSettingsReducer,
        layoutReducer,
        authenReducer,
        dashboardReducer
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(saga)