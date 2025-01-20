import {configureStore} from "@reduxjs/toolkit"
import favouritesReducer from "./slice"

export const store=configureStore({
    reducer:{
        favourites: favouritesReducer,
    }
})


