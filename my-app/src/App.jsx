import { Header, Main, Login, Join } from "./Components";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';

const getApi = (url) => {
  axios.get(url)
    .then(response => response.data);
};


function App() {
  
  const [loginData, setLoginData] = useState({});
  
  const getUserInfo = (url) => {
    axios.get(url)
      .then(response => setLoginData(response.data));
  };
  
  useEffect(() => {
    getApi('/api/stock');
    getUserInfo('/api/login/success');
  }, [])
  
  return (    
    <div className="App">
      <Header loginData={ loginData } setLoginData={setLoginData}/>
      <Routes>
        <Route exact path="/" element={ <Main /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/join" element={ <Join /> } />
      </Routes>
    </div>
  );
}

export default App;
