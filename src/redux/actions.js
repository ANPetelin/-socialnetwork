import { CREATE_POST, SHOW_LOADER, HIDE_LOADER, REQUEST_POSTS, REQUEST_MESSAGE } from "./types";


export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function fetchPosts() {
    return {
        type: REQUEST_POSTS
    }
}

export function fetchComments(id) {
    return {
        type: REQUEST_MESSAGE,
        id: id
    }
}