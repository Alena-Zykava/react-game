import React from 'react'

import './btn-start.scss'

const BtnStart = ({onStartGame}) => {
    return (
        <button className = 'btn btn-primary btn-start'
                onClick = {() => {onStartGame()} } >
                New game
        </button>
    )
}

export default BtnStart