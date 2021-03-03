import React from 'react'

import './greeting.scss'

const Greeting = ({onStartGame}) => {
    return (
        <div className = 'greeting d-flex justify-content-center align-items-center flex-column'>
            <h2>Приветствуем Вас в нашей игре!</h2>
            <h3> Нажмите на кнопку "Новая игра".</h3> 
        </div>
    )
}

export default Greeting