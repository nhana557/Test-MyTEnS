import { combineReducers } from "redux";
import { profileReducer} from './profile'
import { RepositoryReducer } from "./repository";

export const rootReducer = combineReducers({
    profile: profileReducer,
    repos: RepositoryReducer
})