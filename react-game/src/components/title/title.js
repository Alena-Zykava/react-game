import React from 'react'

import './title.scss'

import BtnStart from './../btn-start'

const Title =({onStartGame}) => {
    
    return (
    <div className= 'title d-flex justify-content-around'>
        <h1>Memory game</h1>
        <BtnStart 
            onStartGame = {() => {onStartGame()} }/>
    </div>
    )
    
}

export default Title