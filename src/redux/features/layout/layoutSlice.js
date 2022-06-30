import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenSidebar: true,
    screenSize: undefined,
    themeMode: 'dark',
    themeColor: '#03c9d7'   
}

export  const layoutSlice = createSlice({
    name: 'layout',
    initialState,

    // reducers
    reducers: {
        setIsOpenSidebar: (state, action) => {
            state.isOpenSidebar = action.payload
        },
        setScreenSize: (state, action) => {
            state.screenSize = action.payload
        },
        handleAutoCloseSidebar: (state) => {
            if (state.isOpenSidebar && state.screenSize <= 900) {
                state.isOpenSidebar = false
            }
        }
    }
})

// action
export const {setIsOpenSidebar, setScreenSize, handleAutoCloseSidebar} = layoutSlice.actions

// select
export const selectLayout = (state) => state.layoutReducer

export default layoutSlice.reducer