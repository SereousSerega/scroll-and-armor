import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {

    return (
        <>
            <div className='nav navigation'>
                {/* <Link className="nav-link" to="/">Home</Link> */}
                <h3>Actions:</h3>
                <ul>
                    {/* <li><Link className="nav-link" to="hub">Go to Hub</Link></li> */}
                    <li><Link className="nav-link" to="map">Look at Map</Link></li>
                    <li><Link className="nav-link" to="inventory">Show Inventory</Link></li>

                </ul>
                <h3>Locations:</h3>
                <ul>
                    <li><Link className="nav-link" to="shop/goblin">Goblin Market</Link></li>
                    <li><Link className="nav-link" to="shop/wizard">Wizard Shop</Link></li>
                    <li><Link className="nav-link" to="shop/tavern">Tavern</Link></li>
                    <li><Link className="nav-link" to="shop/forge">Blacksmith forge</Link></li>

                </ul>
                <h3>Guide book:</h3>
                <ul>
                    <li><Link className="nav-link" to="guide/stuff">Staff</Link></li>
                    <li><Link className="nav-link" to="guide/info">Information</Link></li>

                </ul>
            </div>
        </>
    )
}

export default Navigation