import { combineReducers } from "redux";
import {postsRedusers} from './postsReduser';

export const rootReduser = combineReducers({
 posts: postsRedusers
})