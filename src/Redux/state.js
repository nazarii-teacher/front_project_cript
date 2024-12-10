import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userReduser } from './userReduser.js';
import { lendingReduser } from './lendingReduser.js';




const rootReducer = combineReducers({
    users: userReduser,
    lending:lendingReduser,
})

const store = createStore(rootReducer, composeWithDevTools());

export { store }