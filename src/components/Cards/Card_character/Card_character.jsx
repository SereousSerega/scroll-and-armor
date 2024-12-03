import React from 'react'
import '../Card.css'
import loadText from '../../../functions/loadText'
import chooseRarityColor from '../../../functions/chooseRarityColor'

export default function Card_character({card}) {
    return (

        <div className='card'>

            <div className='rarity' style={{ backgroundColor: chooseRarityColor(card.rarity) }}><h4>{card.rarity}</h4></div>
            {/* <div className='show'>Show</div> */}
            <div className='manacost'><h4>{card.manacost}</h4></div>

            <h4 className='cardName'>{loadText('cards', card.nameKey, 'name')}</h4>
            <h4 className='cardType'>{card.race}</h4>
            <h4 className='cardAction'>{card.kind}</h4>
            <img src={card.image} alt={card.name} />

            <p className='.paragraph'>{loadText('cards', card.nameKey, 'description')}</p>
            <div className='barContainer'>
                {/* <h4 className='bar'>3</h4>
                <h4 className='bar'>3</h4>
                <h4 className='bar'>3</h4>
                <h4 className='bar'>3</h4> */}
                <h4 className='bar'>3</h4>
                <h4 className='bar'>3</h4>
                <h4 className='bar'>{card.type}</h4>
                <h4 className='bar'>{card.slot}</h4>
            </div>

            <div className='actionsContainer'>
                <h4 className='showBut'>Show</h4>
                <h4 className='buyBut'>Buy</h4>
            </div>

            <div className='price'>{card.price}</div>
        </div>
    )
}
