import React, { useState, useEffect } from 'react';

import Title from './../title'
import Cards from './../cards'
import Footer from './../footer'
import Greeting from './../greeting'
import Win from './../win'
import arrCards from './../cards/arr-cards'

import './app.scss';


const App = () => {
  const initData = arrCards.sort(() => Math.random() - 0.5 )
  const saveGame = () => {
      const saveData = JSON.parse(localStorage.getItem('saveData')) 
      if (saveData) {
        return saveData
      } else {
        return initData
      }      
    }   
  
  const oldGameState = () => {
    const gameState = localStorage.getItem('gameState')
    if (gameState) {
      return gameState
    } else {
      return 'greeting'
    }
  }

  const [data, setData ] = useState(saveGame()) 
  const [arrFlipped, setArrFlipped ] = useState([])
  const [ gameState, setGameState ] = useState(oldGameState())
  
  useEffect(() =>{
    if (arrFlipped.length === 2) {
        changeCards()                       
    }
    if (dataFlipped.length === 12){
      setGameState('win')
      gameField()  
      setData(initData)                    
    }
  }, [ arrFlipped ])

  useEffect(() => {
    const serialSaveData = JSON.stringify(data)
    localStorage.setItem('saveData', serialSaveData) 
    localStorage.setItem('gameState', gameState)
  }, [data, gameState])  

  const dataFlipped = data.filter((el) => {
    return el.flipped
  })

  const onStartGame = () => {
    setGameState('game') 
    gameField()  
    setData(initData)
    setArrFlipped([])                  
  }

  const gameField = () => {

      switch (gameState) {
          case 'greeting':
            return <Greeting />
          case 'game':
            return (
            <Cards 
            onRemoteBack = {onRemoteBack}
            data = { data }/>
            )
          case 'win':
            return <Win />
          default:
            return <Greeting />
        }
  }

  const onRemoteBack = ( id ) => {
    const idx = data.findIndex((el) => el.id === id)
    const oldItem = data[idx]
    if (arrFlipped.length < 2 && !oldItem.guessed ) {
        
        const newItem = {...oldItem, flipped: true}
        setData([
            ...data.slice( 0, idx),
            newItem,
            ...data.slice( idx + 1)
        ]) 
        if (arrFlipped.length===1 && arrFlipped[0].id === id) return  
        setArrFlipped([...arrFlipped, data[idx]])  
    } 
  }   
  
  const changeCards = () => {
      if (arrFlipped[0].name !== arrFlipped[1].name) {
          setTimeout( notGuessed, 1000)                                    
      } else {
          guessed()            
      }
      
  }  

  const notGuessed = () => {
      const idx0 = data.findIndex((el) => el.id === arrFlipped[0].id)
      const oldItem0 = data[idx0]
      const newItem0 = {...oldItem0, flipped: false}
      const idx1 = data.findIndex((el) => el.id === arrFlipped[1].id)
      const oldItem1 = data[idx1]
      const newItem1 = {...oldItem1, flipped: false}
      const newArr0 = [...data.slice( 0, idx0),
                      newItem0,
                      ...data.slice( idx0 + 1)]
      const newArr1 = [...newArr0.slice( 0, idx1),
                      newItem1,
                      ...newArr0.slice( idx1 + 1)]
      setData(newArr1)
      setArrFlipped([])
  }

  const guessed = () => {
      const idx0 = data.findIndex((el) => el.id === arrFlipped[0].id)
      const oldItem0 = data[idx0]
      const newItem0 = {...oldItem0, guessed: true}
      const idx1 = data.findIndex((el) => el.id === arrFlipped[1].id)
      const oldItem1 = data[idx1]
      const newItem1 = {...oldItem1, guessed: true}
      const newArr0 = [...data.slice( 0, idx0),
                      newItem0,
                      ...data.slice( idx0 + 1)]
      const newArr1 = [...newArr0.slice( 0, idx1),
                      newItem1,
                      ...newArr0.slice( idx1 + 1)]
      setData(newArr1)
      setArrFlipped([])
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