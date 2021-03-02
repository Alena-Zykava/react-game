import React from 'react'

import './greeting.scss'

const Greeting = ({onStartGame}) => {
    return (
        <div className = 'greeting d-flex justify-content-center align-items-center flex-column'>
            <h2>Hello!</h2>
        </div>
    )
}

export default Greeting