import { applyMiddleware, createStore } from "redux";
import {rootReducer} from './redux/reducer'
import logger from 'redux-logger'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk, logger]
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);