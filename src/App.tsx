import React, {useEffect} from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider, useDispatch} from 'react-redux';
import apiReducer from './api/config/apiReducer';
import logo from './logo.svg';
import './App.css';
import ApiScreen from './ApiScreen';

const App = () => {
  const reducer = combineReducers({
    content: apiReducer
  });
  const store = createStore(reducer);

  return(
    <Provider store={store}>
      <ApiScreen />
    </Provider>
  );
}

export default App;
