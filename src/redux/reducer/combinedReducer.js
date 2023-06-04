import { combineReducers } from "redux";
import apiReducer from './apiReducer'
import postReducer from './postReducer'

const combinedReducer = combineReducers({
    posts: apiReducer,
    selectedPost: postReducer
});

export default combinedReducer;

