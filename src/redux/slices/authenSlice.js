import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isPending: false,
    error: null,
    userName: null,
    email: null,
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
            const { userName, email, fullName, acceptToken } = action.payload
            localStorage.setItem('userName', userName)
            localStorage.setItem('fullName', fullName)
            localStorage.setItem('email', email)
            localStorage.setItem('acceptToken', acceptToken)
            return { ...state, isPending: false, userName, email, fullName, acceptToken }
        },
        failureLogin: (state, action) => {
            return { ...state, isPending: false, error: "Username hoặc Password không đúng!" }
        },

        // logout
        logout: (state) => {
            localStorage.removeItem('userName')
            localStorage.removeItem('fullName')
            localStorage.removeItem('email')
            localStorage.removeItem('acceptToken')
            return initialState
        }
    }
})

export const { requestLogin, successLogin, failureLogin, logout } = authenSlice.actions

export const selectAuthen = (state) => state.authenReducer

export default authenSlice.reducer;