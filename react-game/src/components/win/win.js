import React from 'react'

import './win.scss'

import coins from './../cards/image/coins.png'

const Win = () => {
    return (
        <div className = 'win d-flex justify-content-center align-items-center flex-column' >
            <h2>Поздравляем!!! Вы выйграли!</h2>
            <img src = {coins} alt = 'Coins'/>
        </div>
    )
}

export default Win