import { SELECTED_POST } from './actionType'

export const selectedPost = (post) => {
    return ({
        type: SELECTED_POST,
        payload: post
    })
}


