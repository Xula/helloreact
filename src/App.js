import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'request';

function App() {
  const [resposta, setResposta] = useState({});
  useEffect(() => {
    request('https://swapi.co/api/planets/3/', function(err, res, body){
      console.log('resposta: ', body);
      setResposta(JSON.parse(body));
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aplicação de teste para o Github Pages
        </p>
        Mensagem da SWAPI: {resposta.name}
      </header>
    </div>
  );
}

export default App;
