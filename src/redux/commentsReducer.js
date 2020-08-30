import { FETCH_MESSAGE } from "./types";

const initialState = {
    comments: []
}

export const commentsReducer = (state=initialState, action) => {    
    switch(action.type) {                  
        case FETCH_MESSAGE:
            return { ...state, comments: action.payload };
        default:
            return state;
    }    
}