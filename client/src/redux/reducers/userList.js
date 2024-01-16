import { createAction, createReducer } from "@reduxjs/toolkit"

const { nanoid } = require("nanoid")

const initialState = ({
    list: [
        {
            id: nanoid(),
            name: 'Antonio',
            age: 28,
            description: 'In my opinion, pizza is the best dish in the world!'
        }
    ]
})

export const addUser = createAction('add/user', (name, age, description) => ({
    payload: {name, age, description}
}))

export const deleteUser = createAction('delete/product', (candidateID) => ({
    payload: candidateID
}))

const userListReducer = createReducer(initialState, (builder) => {
    builder.addCase(addUser, (state, action) => {
        state.list = [
            ...state.list,
            {
                id: nanoid(),
                ...action.payload
            }
        ]
    })
    builder.addCase(deleteUser, (state, action) => {
        state.list = [
            ...state.list.filter((item) => item.id !== action.payload)
        ]
    })
})

export default userListReducer