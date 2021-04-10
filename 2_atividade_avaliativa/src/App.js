import './App.css';
import React from 'react';

import Desafio from './avaliacao/Desafio';
import Propriedades from './avaliacao/Propriedades';
import Numeros from './avaliacao/Numeros';

function App() {
  return (
    <div className="App">
        <h1>Atividade Avaliativa</h1>

        <Desafio></Desafio>
        <Propriedades title="2 ATIVIDADE AVALIATIVA - REACT" aluno="Fransérgio da Silva Queiroz" nota="8"></Propriedades>
        {/* nota 8 pelo numero aleatorio ta não estar fazendo certo seu trabalho kkkkkk
          Não tenho idéia do que pode estar acontecendo. Depois se puder me ajudar agradeço! */}
        <Numeros minimo='1' maximo='10'></Numeros>
    </div>
  );
}

export default App;
