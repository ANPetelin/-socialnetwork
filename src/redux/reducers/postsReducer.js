import { FETCH_POSTS } from "../types";

const initialState = {
    fetchedPost: []
}

export const postsReducer = (state=initialState, action) => {    
    switch(action.type) {                   
        case FETCH_POSTS:
            return { ...state, fetchedPost: action.payload };
        default:
            return state;
    }    
}