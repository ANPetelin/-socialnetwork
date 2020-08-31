import { FETCH_COMMENTS } from "../types";

const initialState = {
    comments: []
}

export const commentsReducer = (state=initialState, action) => {    
    switch(action.type) {                  
        case FETCH_COMMENTS:
            let oldComments = state.comments.filter(comments => comments.postId !== action.payload[0].postId)            
            return { ...state, comments: [...oldComments, ...action.payload] };
        default:
            return state;
    }    
}