import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {onRequest, onFailure, onSuccess} from './api/config/listenerType';
import {getUsers} from './api/users';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const loading = useSelector((state: any) => state.loading);
  const success = useSelector((state: any) => state.success);
  const failure = useSelector((state: any) => state.failure);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(onRequest());
      try{
        const response = await getUsers();
        dispatch(onSuccess(response));
      } catch (error){
        console.log(error);
        dispatch(onFailure(""));
      }
    }

    fetchData();
  }, [dispatch]);

  return (
    <>
    <div>
      <h1>React TS Base Project</h1>
    </div>
    </>
  );
}

export default App;
