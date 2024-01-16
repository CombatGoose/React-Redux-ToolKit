import { configureStore } from "@reduxjs/toolkit"
import UIReducer from "./reducers/UIReducer"
import userReducer from "./reducers/userReducer"
import userList from "./reducers/userList"

const store = configureStore({
    reducer: {
        ui: UIReducer,
        user: userReducer,
        userList: userList
    }
})

export default store