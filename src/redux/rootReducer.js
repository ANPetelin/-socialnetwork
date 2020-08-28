import { combineReducers } from "redux";
import { postsReducers } from './postsReducer';
import { appReducer } from "./appReducer";
import { messageReducer } from './messageReducer';

export const rootReducer = combineReducers({
 posts: postsReducers,
 app: appReducer,
 message: messageReducer
})