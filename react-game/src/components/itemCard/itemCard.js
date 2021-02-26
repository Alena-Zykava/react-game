import React from 'react'

import './itemCard.scss'

const ItemCard = ({ name, image, id, onRemoteBack, flipped, guessed }) => {

    let className = 'card'
    if ( !flipped ) {
        className += ' back-image'
    }
    if (guessed) {
        className += ' guessed'
    }

    return (
        <div className = {className}
            data-name = {name}
            style = {{background: `url(${image})`}}
            onClick = { () => onRemoteBack(id) }
            >
        </div>
    )
} 

export default ItemCard