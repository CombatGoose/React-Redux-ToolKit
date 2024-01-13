import { configureStore } from "@reduxjs/toolkit"
import UIReducer from "./reducers/UIReducer"
import userReducer from "./reducers/userReducer"

const store = configureStore({
    reducer: {
        ui: UIReducer,
        user: userReducer
    }
})

export default store