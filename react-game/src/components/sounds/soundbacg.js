import React, { useState } from 'react'
import useSound from 'use-sound'

import soundBG from './main-menu-2.mp3'

const Soundbacgraund = () => {

    const [volume, setVolume] = useState(0.3)
    const [play, { stop, isPlaying }] = useSound(soundBG, {
        volume,
        loop: true})
    
    const playSound = () => {
        if (isPlaying) {
            return stop()
        } else {
            return play()
        }
    }

    const plusVolume = () =>{
        setVolume(volume + 0.1)
    }

    const minusVolume = () =>{
        setVolume(volume - 0.1)
    }

    const volumeIcon = () => {
        if (isPlaying) {
            return (
                <span className ="material-icons">
                    volume_up
                </span>
            )
        } else {
            return (
                <span className ="material-icons">
                    volume_off
                </span>
            )
        }
    }

    return (
        <div className = 'd-flex'>
            <button className= 'btn'
                onClick={playSound}>
                {volumeIcon()}
            </button>
            <div>
                <button 
                    className = 'btn'
                    onClick = {plusVolume}> 
                    <span className = "material-icons">
                        arrow_upward
                    </span>
                </button>
                <button 
                    className = 'btn'
                    onClick = {minusVolume}> 
                    <span className = "material-icons">
                        arrow_downward
                    </span>
                </button>  
            </div>            
        </div>        
    )
}

export default Soundbacgraund