import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    name: '',
    age: null,
    description: ''
}

export const updateName = createAction('user/update-name', (newName) => (
    {
        payload: newName
    }
))

export const updateAge = createAction('user/update-age', (newAge) => (
    {
        payload: newAge
    }
))

export const updateDesc = createAction('user/update-desc', (newDesc) => (
    {
        payload: newDesc
    }
))

const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(updateName, (state, action) => {
        state.name = action.payload
    })
    builder.addCase(updateAge, (state, action) => {
        state.age = action.payload
    })
    builder.addCase(updateDesc, (state, action) => {
        state.description = action.payload
    })
})

export default userReducer