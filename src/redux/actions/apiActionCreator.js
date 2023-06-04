
import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_ERROR } from './actionType'
import axios from 'axios'


export const fetchPostRequest = () => {
    return ({
        type: FETCH_POST_REQUEST
    })
}

export const fetchPostSuccess = (posts) => {
    return ({
        type: FETCH_POST_SUCCESS,
        payload: posts
    })
}

export const fetchPostError = (error) => {
    return ({
        type: FETCH_POST_ERROR,
        payload: error
    })
}


export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchPostRequest())

        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            dispatch(fetchPostSuccess(response.data))
        }).catch(error => dispatch(fetchPostError(error)))
    }
}


