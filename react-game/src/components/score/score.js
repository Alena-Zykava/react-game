import React from 'react'

import './score.scss'

const Score = ({count, countMatch}) => {
    const pair = Math.floor(count / 2)

    return (        
        <div className = 'score text-center'>
            <div>Вы открыли {pair} из 6 пар</div>      
            <div>Вы выйграли {countMatch} партий</div>      
        </div>
    )
}

export default Score