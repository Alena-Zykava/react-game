import React, { Component } from 'react'

import './cards.scss'
import arrCards from './arr-cards'

export default class Cards extends Component {

    arrSelected = []
    removeBackImage = (e) => {
        const item =  e.target
        
        if (this.arrSelected.length < 2){
          item.classList.remove('back-image')
          item.classList.add('selected')  
          this.arrSelected.push(item.dataset.name)  
        }
        if (this.arrSelected.length === 2){

            if (this.arrSelected[0] === this.arrSelected[1]){
                console.log(this.arrSelected)
            }
        }
        
        
    }


    render() {
        let key = 1
        const itemCards = arrCards.sort(() => Math.random() -0.5 )
                                .map((el) => {
                    return (
                        <div className = 'card back-image'
                        data-name = {el.name}
                        key = {key++}
                        style = {{background: `url(${el.image})`}}
                        onClick = {this.removeBackImage}>
                        </div>
                    )
            })

        return (
            <div className = 'cards d-flex justify-content-center'>
                {itemCards}
            </div>
        )
    }
}