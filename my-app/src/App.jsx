import { Header, Main, Login } from "./Component";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const api = (url) => {
  axios.get(url)
    .then(response => response.data)
    .then(console.log);
};

api('/api/stock');

function App() {
  const [loginCheck, setLoginCheck] = useState('');  

  return (
    <div className="App">
      <Header setLoginCheck={ setLoginCheck }/>
      {loginCheck === '/login' ? <Login/> : <Main/>}
    </div>
  );
}

export default App;
