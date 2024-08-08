import React, { useEffect } from 'react';
import './App.css';

import Router from './pages/Router';

const App: React.FC = () => {

  useEffect(()=> {
    fetch("http://localhost:8080/prices/add", {
      method: "POST"
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  });

  return (
      <div>
        <Router />
      </div>
  );
}

export default App;
