import './Locations.css'
import React from 'react'

import locations from '../../data/core/locations.json'



export default function Locations() {

    function showLocations() {
        return (
            locations.map(location => (<img src={location.image} alt={location.nameKey} className='locationCard'></img>))
        )
    }

    return (
        <div className='main locationMain'>
            <div className='locationContainer'>
                {showLocations()}
            </div>
        </div>
    )
}
