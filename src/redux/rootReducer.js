import { combineReducers } from "redux";
import { postsReducers } from './postsReducer';
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
 posts: postsReducers,
 app: appReducer
})