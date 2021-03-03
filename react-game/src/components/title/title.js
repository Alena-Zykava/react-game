import React from 'react'

import './title.scss'

import BtnStart from './../btn-start'
import Score from './../score'
import {Soundbacgraund, SoundTouch}  from './../sounds'


const Title =({onStartGame, count, countMatch, musicTouch, playSoundTouch, plusVolume, minusVolume}) => {
    
    return (
        <div className = 'container'>
            <div className= 'title row d-flex justify-content-around align-items-center'>
                <div className = 'col-sm-5 text-center'>
                    <h1 className = 'text-center'>Memory</h1>
                    <Score             
                        count = {count}
                        countMatch = {countMatch}/>
                </div>        
                <BtnStart 
                    onStartGame = {() => {onStartGame()} }/>
                <div className = 'text-center' >
                    <SoundTouch 
                        musicTouch = {musicTouch}
                        playSoundTouch = {() => {playSoundTouch()}}
                        plusVolume = {() => {plusVolume()}}
                        minusVolume = {() => {minusVolume()}}
                    />
                    <Soundbacgraund />   
                </div>        
            </div>
        </div>
    
    )
    
}

export default Title