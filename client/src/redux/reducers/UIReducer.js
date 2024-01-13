import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    modalStatus: false,
    createStatus: false
}

export const changeModal = createAction('ui/change-modal')
export const changeCreateStatus = createAction('ui/change-create-status')

const UIReducer = createReducer(initialState, (builder) => {
    builder.addCase(changeModal, (state) => {
        state.modalStatus = !state.modalStatus
    })
    builder.addCase(changeCreateStatus, (state) => {
        state.createStatus = !state.createStatus
    })
})

export default UIReducer