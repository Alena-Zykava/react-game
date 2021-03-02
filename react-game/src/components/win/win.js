import React from 'react'

import './win.scss'

const Win = () => {
    return (
        <div className = 'win d-flex justify-content-center align-items-center' >
            <h2>You win!!!</h2>
            {/* <button className = 'btn btn-primary btn-start'
                onClick = {() => {onStartGame()} } >
                Click here and the game starts
            </button> */}
        </div>
    )
}

export default Win