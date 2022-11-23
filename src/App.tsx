
//Componente react = função que retorna HTML

import { useState } from "react";
import { Tweet } from "./assets/tweet"
import { AppRoutes } from "./Routes";
import './App.css';

function App() {

  //criando um estado - useState cria uma variável monitorada pelo componente
 /* const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ])/*

  //Estado criado


  /*function createTweet(){
    setTweets([... tweets, 'Tweet 5'])
  }*/

  return (
    //Roteamento 
    <AppRoutes />

    /*<div>
      {tweets.map(tweet =>{
        return <Tweet text={tweet}/>
      })}

      <button onClick={createTweet} style={{
        backgroundColor: '#8257e6', //css in Js> Escrever CSS em formato de Javascript
        border: 0,
        padding: '6px 12px',
        color: '#FFF'
      }} >Adicionar Tweet</button>
    </div>*/
  );

}

export default App
