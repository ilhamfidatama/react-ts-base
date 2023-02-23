import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {onRequest, onFailure, onSuccess} from './api/config/listenerType';
import {getUsers, Users} from './api/users';
import logo from './logo.svg';
import './App.css';

const ApiScreen = () => {
  const loading = useSelector((state: any) => state.loading);
  const responseData = useSelector((state: any) => state.responseData);
  const error = useSelector((state: any) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect apiscreen js");
    const fetchData = async () => {
      dispatch(onRequest());
      try {
        const response = await getUsers();
        console.log(response);
      } catch (error) {
        console.log(error);
      }

      fetchData();
    }
  }, [dispatch]);

  return (
    <div>
      {/* {loading && <div>Loading...</div>}
      {responseData && responseData.map((data: Users) => {
        console.log(data);
        return(
          <h2>{data.name}</h2>
        );
      })}
      {error && <div>{error}</div>} */}
      <h2>sample</h2>
    </div>
  );
}

export default ApiScreen;
