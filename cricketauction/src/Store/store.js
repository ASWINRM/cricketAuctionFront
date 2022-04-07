import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {buyerloginreducer,allplayerreducer} from '../Reducers/buyerloginReducer';

const reducers = combineReducers({
    buyerloginreducer: buyerloginreducer,
    allplayerreducer: allplayerreducer
})

const intialstate = {}
const middleware = [thunk]


const store = createStore(reducers, intialstate, composeWithDevTools(applyMiddleware(...middleware)))

export default store;