import { FETCH_MESSAGE } from "./types";

const initialState = {
    message: []
}

export const messageReducer = (state=initialState, action) => {    
    switch(action.type) {                  
        case FETCH_MESSAGE:
            return { ...state, message: action.payload };
        default:
            return state;
    }    
}