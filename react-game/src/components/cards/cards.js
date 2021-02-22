import React, { Component } from 'react'

import './cards.scss'
import arrCards from './arr-cards'

const itemCards = arrCards.map((el) => {
    return (
        <div className = 'card'
                key = {el.name}>
            <img src = {el.image} alt = 'card'/>
        </div>
    )
})


export default class Cards extends Component {
    render() {
        return (
            <div className = 'cards d-flex justify-content-center'>
                {itemCards}
            </div>
        )
    }
}