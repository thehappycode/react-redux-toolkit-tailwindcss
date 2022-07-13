import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    systemCode: null
}

export const applicationSettingsSlice = createSlice({
    name: 'applicationSettings',
    initialState,
    reducers: {
        setSystemCode: (state, action) => {
            return { ...state, systemCode: action.payload.systemCode }
        }
    }
})

// action
export const { setSystemCode } = applicationSettingsSlice.actions

// select
export const selectApplicationSettings = (state) => state.applicationSettingsReducer;

export default applicationSettingsSlice.reducer;
