
import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_ERROR } from '../actions/actionType'

let initialState = {
    loading: false,
    posts: [],
    error: ''
}


const apiReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case FETCH_POST_REQUEST:
            return ({
                ...state, loading: true
            })
        case FETCH_POST_SUCCESS:
            return ({
                ...state,
                loading: false,
                posts: actions.payload,
                error: ''
            })
        case FETCH_POST_ERROR:
            return ({
                ...state,
                loading: false,
                posts: [],
                error: actions.payload
            })
        default:
            return state
    }
}


export default apiReducer

