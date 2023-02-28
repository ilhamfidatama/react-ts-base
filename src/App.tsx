import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from './api/config';
import useAsync from './api/useAsync';
import {Users} from './data/usersResponse';

function App() {
  const [refresh, setRefresh] = useState(false);
  const {loading, error, value} = useAsync<Array<Users>>(() => {
    return new Promise((resolve, reject) => {
      axios.get('/users')
      .then(response => {
        console.log(response.data);
        resolve(response.data as Array<Users>);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
    });
  }, [refresh]);

  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {value && value.map(user => (<p>{user.name}</p>))}
    </div>
  );
}

export default App;
