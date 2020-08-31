import { SHOW_LOADER, HIDE_LOADER, REQUEST_POSTS, REQUEST_COMMENTS, REQUEST_USERS } from "./types";


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
        type: REQUEST_COMMENTS,
        id: id
    }
}

export function fetchUsers() {
    return {
        type: REQUEST_USERS,
    }
}