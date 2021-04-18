import React from 'react'

import './btn-start.scss'

const BtnStart = ({onStartGame}) => {
    return (
        <div className = 'col-sm-4 text-center'>
           <button className = 'btn btn-primary btn-start'
                onClick = {() => {onStartGame()} } >
                Новая игра
            </button>                   
        </div>
        
    )
}

export default BtnStart