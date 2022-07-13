import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isPending: false,
    error: null,
    userName: null,
    fullName: null,
    acceptToken: null
}

const authenSlice = createSlice({
    name: 'authen',
    initialState,
    reducers: {
        // login
        requestLogin: (state) => {
            return { ...state, isPending: true }
        },
        successLogin: (state, action) => {
            const { userName, fullName, acceptToken } = action.payload
            localStorage.setItem('userName', userName)
            localStorage.setItem('fullName', fullName)
            localStorage.setItem('acceptToken', acceptToken)
            return { ...state, isPending: false, userName, fullName, acceptToken }
        },
        failureLogin: (state, action) => {
            return { ...state, isPending: false, error: "Username hoặc Password không đúng!" }
        },

        // logout
        requestLogout: (state) => {
            return { ...state, isPending: true }

        },
        successLogout: (state) => {
            localStorage.removeItem('userName')
            localStorage.removeItem('fullName')
            localStorage.removeItem('acceptToken')
            return initialState
        },
        failureLogout: (state, action) => {
            return { ...state, isPending: false, error: action.payload.error }
        }
    }
})

export const { requestLogin, successLogin, failureLogin, requestLogout, successLogout, failureLogout } = authenSlice.actions

export const selectAuthen = (state) => state.authenReducer

export default authenSlice.reducer;