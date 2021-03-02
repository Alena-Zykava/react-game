import React, { useState, useEffect } from 'react'

import './cards.scss'
import arrCards from './arr-cards'
import ItemCard from './../itemCard'
import Win from './../win'


export default function Cards() {   

    const [data, setArrCards ] = useState([]) 
    const [arrFlipped, setArrFlipped ] = useState([])
    const [ isWin, setIsWin ] = useState(false)

    useEffect(() => {        
        setArrCards(arrCards.sort(() => Math.random() - 0.5 ))        
    }, [])

    useEffect(() =>{
        if (arrFlipped.length === 2) {
            changeCards()                       
        }
        if (dataFlipped.length === 12){
            setIsWin(true)                       
        }

    }, [ arrFlipped ])

    
    const dataFlipped = data.filter((el) => {
        return el.flipped
    })
    
    


    const onRemoteBack = ( id ) => {
        const idx = data.findIndex((el) => el.id === id)
        const oldItem = data[idx]
        if (arrFlipped.length < 2 && !oldItem.guessed ) {
            
            const newItem = {...oldItem, flipped: true}
            setArrCards([
                ...data.slice( 0, idx),
                newItem,
                ...data.slice( idx + 1)
            ]) 
            if (arrFlipped.length===1 && arrFlipped[0].id === id) return  
            setArrFlipped([...arrFlipped, data[idx]])  
        }              
    }   
      
    const changeCards = () => {
        if (arrFlipped[0].name !== arrFlipped[1].name) {
            setTimeout( notGuessed, 1000)                                    
        } else {
            guessed()            
        }
        
    }  

    const notGuessed = () => {
        const idx0 = data.findIndex((el) => el.id === arrFlipped[0].id)
        const oldItem0 = data[idx0]
        const newItem0 = {...oldItem0, flipped: false}
        const idx1 = data.findIndex((el) => el.id === arrFlipped[1].id)
        const oldItem1 = data[idx1]
        const newItem1 = {...oldItem1, flipped: false}
        const newArr0 = [...data.slice( 0, idx0),
                        newItem0,
                        ...data.slice( idx0 + 1)]
        const newArr1 = [...newArr0.slice( 0, idx1),
                        newItem1,
                        ...newArr0.slice( idx1 + 1)]
        setArrCards(newArr1)
        setArrFlipped([])
    }

    const guessed = () => {
        const idx0 = data.findIndex((el) => el.id === arrFlipped[0].id)
        const oldItem0 = data[idx0]
        const newItem0 = {...oldItem0, guessed: true}
        const idx1 = data.findIndex((el) => el.id === arrFlipped[1].id)
        const oldItem1 = data[idx1]
        const newItem1 = {...oldItem1, guessed: true}
        const newArr0 = [...data.slice( 0, idx0),
                        newItem0,
                        ...data.slice( idx0 + 1)]
        const newArr1 = [...newArr0.slice( 0, idx1),
                        newItem1,
                        ...newArr0.slice( idx1 + 1)]
        setArrCards(newArr1)
        setArrFlipped([])
    }

    const itemCards = data.map((card) => {
        return (
            <ItemCard 
                id = {card.id}
                key = {card.id} 
                name = {card.name}
                image = {card.image} 
                flipped = { card.flipped }
                guessed = { card.guessed }
                onRemoteBack = { onRemoteBack }                
                />
        )
    })
    
    const valueField = () => {
        if (isWin) {
            return <Win /> 
        } else {
            return itemCards}
    }

    return (
        <div className = 'cards d-flex justify-content-center align-items-center'>
            {valueField()}
        </div>
    )
    
}