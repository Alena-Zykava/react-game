import React, {useState} from 'react';

import Title from './../title'
import Cards from './../cards'
import Footer from './../footer'
import Greeting from './../greeting'
import Win from './../win'

import './app.scss';


const App = () => {

  const [ gameState, setGameState ] = useState('greeting')
  

  const onStartGame = () => {
    setGameState('game')                 
  }

  const gameField = () => {

      switch (gameState) {
          case 'greeting':
            return <Greeting />
          case 'game':
            return <Cards />
          case 'win':
            return <Win />
          default:
            return <Greeting />
        }
  }

  

  return (
      <div className = 'app'>
        <Title 
          onStartGame = { onStartGame }/>
          <div className = 'wrapper'>
           {gameField()}  
          </div>  
        <Footer />
      </div>          
  ) 
        
}

export default App