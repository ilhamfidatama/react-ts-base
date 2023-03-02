import { createStore, combineReducers } from 'redux';
import apiReducer from './api/config/apiReducer';

const rootReducer = combineReducers({
    api: apiReducer
});

const store = createStore(rootReducer);

export default store;