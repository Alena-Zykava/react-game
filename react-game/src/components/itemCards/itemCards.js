import React, {Component} from 'react'

import arrCards from './arr-cards'

export default class ItemCards extends Component {
    render() {
        arrCards.sort(() => Math.random() -0.5 )
                    .map((el) => {
    return (
        <div className = 'card back-image'
                key = {el.name}
                style = {{background: `url(${el.image})`}}
                onClick = {removeBackImage}>            
        </div>
    )
    }
} 
