import { Header, Main, Login, Join } from "./Components";
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const api = (url) => {
  axios.get(url)
    .then(response => response.data)
    .then(console.log);
};

api('/api/stock');

function App() {

  return (    
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={ <Main /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/join" element={ <Join /> } />
      </Routes>
    </div>
  );
}

export default App;
