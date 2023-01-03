import { applyMiddleware, createStore } from "redux";
import {rootReducer} from './redux/reducer'
import logger from 'redux-logger'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

const middleware = [thunk, logger]
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

const makeStore = () => store

export const wrapper = createWrapper(makeStore)
 

// import { configureStore } from '@reduxjs/toolkit'
// import {GET_PROFILE} from './redux/action/profile'
// export const store = configureStore({
//   reducer: {
//     profile: GET_PROFILE
//   },
// })