import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    name: ''
}

export const updateName = createAction('user/update-name', (newName) => (
    {
        payload: newName
    }
))

const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(updateName, (state, action) => {
        state.name = action.payload
    })
})

export default userReducer