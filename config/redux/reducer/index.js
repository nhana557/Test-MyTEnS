import { combineReducers } from "redux";
import { profileReducer} from './profile'
import { RepositoryReducer } from "./repository";
import { SearchUserReducer } from "./searchUser";

export const rootReducer = combineReducers({
    profile: profileReducer,
    repos: RepositoryReducer,
    search: SearchUserReducer,
})