import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenSidebar: true,
    screenSize: undefined
}

export  const layoutSlice = createSlice({
    name: 'layout',
    initialState,

    // reducers
    reducers: {
        handleClickSidebar: (state, action) => {
            state.isOpenSidebar = action.payload.isOpenSidebar
        },
        handleResize: (state, action) => {
            state.screenSize = action.payload.screenSize
        }
    }
})

// action
export const {handleClickSidebar, handleResize} = layoutSlice.actions

// select
export const selectLayout = (state) => state.layoutReducer

export default layoutSlice.reducer