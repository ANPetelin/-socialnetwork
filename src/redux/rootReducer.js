import { combineReducers } from "redux";
import { postsReducers } from './postsReducer';
import { appReducer } from "./appReducer";
import { commentsReducer } from './commentsReducer';

export const rootReducer = combineReducers({
 posts: postsReducers,
 app: appReducer,
 comments: commentsReducer
})