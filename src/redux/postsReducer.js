import { CREATE_POST, FETCH_POSTS } from "./types";

const initialState = {
    posts: [],
    fetchedPost: []
}

export const postsReducers = (state=initialState, action) => {    
    switch(action.type) {        
        case CREATE_POST:            
            return { ...state, posts: state.posts.concat([action.payload]) };            
        case FETCH_POSTS:
            return { ...state, fetchedPost: action.payload };
        default:
            return state;
    }    
}