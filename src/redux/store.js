import thunk from 'redux-thunk'
import combinedReducer from './reducer/combinedReducer'
import { createStore } from 'redux'
import { applyMiddleware } from 'redux'

const store = createStore(combinedReducer, applyMiddleware(thunk))

export default store;

