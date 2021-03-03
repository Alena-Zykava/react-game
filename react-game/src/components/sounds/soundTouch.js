import React from 'react'


const SoundTouch = ({musicTouch, playSoundTouch, plusVolume, minusVolume}) => {      
       
    const music = () => {
        if (musicTouch) {
            return (
                <span className = "material-icons">
                    music_note
                </span>
            )
        } else {
            return (
                <span className = "material-icons">
                    music_off
                </span>
            )
        }
    }

    return (
        <div className = 'd-flex'>
            <button className= 'btn'
                onClick={() => {playSoundTouch()}}>
                {music()}
            </button>  
            <div>
                <button 
                    className = 'btn'
                    onClick = {() => {plusVolume()}}> 
                    <span className = "material-icons">
                        arrow_upward
                    </span>
                </button>
                <button 
                    className = 'btn'
                    onClick = {() => {minusVolume()}}> 
                    <span className = "material-icons">
                        arrow_downward
                    </span>
                </button>  
            </div>
        </div>
        
    )
}

export default SoundTouch