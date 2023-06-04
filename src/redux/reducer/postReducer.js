import { SELECTED_POST } from '../actions/actionType'

let initialState = '';

const postReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case SELECTED_POST:
            return actions.payload;
        default:
            return state
    }
}

export default postReducer;