import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isPending: false,
    error: null,
    ECM: [0, 0, 0],
    BOS: [0, 0, 0],
    LOS: [0, 0, 0],
    BMS: [0, 0, 0],
    TMS: [0, 0, 0]
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        requestDashboard: (state) => {
            return { ...state, isPending: true }
        },
        successDashboard: (state, action) => {
            return {
                ...state,
                isPending: false,
                ECM: action.payload.ECM,
                BOS: action.payload.BOS,
                LOS: action.payload.LOS,
                BMS: action.payload.BMS,
                TMS: action.payload.TMS
            }
        },
        failureDashboard: (state, action) => {
            return { ...state, isPending: false, error: action.payload.error }
        }
    }
})

export const { requestDashboard, successDashboard, failureDashboard } = dashboardSlice.actions

export const selectDashboard = (state) => state.dashboardReducer

export default dashboardSlice.reducer