import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Shop.css';
import { setCardCollection, setCardPool } from '../../data/slices/goblinShop_Slice';
import loadCardCollection from '../../functions/loadCardCollection';
import loadMerchantPresset from "../../functions/loadMerchantPresset";
import Card_character from '../Cards/Card_character/Card_character';
import Card_item from '../Cards/Card_item/Card_item';


function Shop() {
    const cardPool = useSelector((state) => state.goblinShop.cardPool);
    const cardCollection = useSelector((state) => state.goblinShop.cardCollection);
    const { shopKey } = useParams();
    const [animationKey, setAnimationKey] = useState(0);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(setCardCollection(loadCardCollection()));
        dispatch(setCardPool(loadMerchantPresset(cardCollection, 'training', 'goblin', 0)));
        setLoading(false)
    }, [loading])

    useEffect(() => {
        setAnimationKey(prevKey => prevKey + 1);
    }, [shopKey]);

    // function ItemBlock() {
    //     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //     useEffect(() => {
    //         const handleResize = () => {
    //             setWindowWidth(window.innerWidth);
    //         };

    //         window.addEventListener('resize', handleResize);

    //         return () => {
    //             window.removeEventListener('resize', handleResize);
    //         };
    //     }, []);

    //     if (windowWidth <= 1150) {
    //         return (
    //             <div className='itemBlock Rot' style={{ backgroundImage: 'url(/images/itemBlock_backgroundRot.webp)' }}>
    //                 test
    //             </div>
    //         );
    //     } else {
    //         return (
    //             <div className='itemBlock' style={{ backgroundImage: 'url(/images/itemBlock_background.webp)' }}>
    //                 test
    //             </div>
    //         );
    //     }
    // }



    function drawCards() {


        if (!cardPool || cardPool.length === 0) {
            return <div className='nocards'>No cards available</div>;
        }

        return cardPool.map((card) => {
            if (card.type === 'character') {
                return (
                    <Card_character key={card.key} card={card} />
                );
            } else if (card.type === 'item') {
                return (
                    <Card_item key={card.key} card={card} />
                );
            } else {
                return (
                    <div key={card.id} className="card unknown-card">
                        <h3>{card.name}</h3>
                        <p>Type: Unknown</p>
                    </div>
                );
            }
        });
    }
    if (loading === true) {
        return (
            <div className='main shop'>LOADING...</div>
        )
    } else {
        return (
            <div className='main shop'>
                <div className='shopHead'>
                    <h2>Gobo`s Shop</h2>
                    <div className='showCart'>
                    Cart
                        {/* <div className='simpBat'>Cart</div> */}
                        <span className='cartCount'>1</span>
                    </div>
                </div>
                <div className='cards_container' style={{ backgroundImage: `url(/images/${shopKey}_background.webp)` }}>
                    {drawCards()}

                </div>
                <img key={animationKey} src={`/images/${shopKey}_merchant.webp`} alt={`${shopKey}_merchant`} className='merchantBlock' />

            </div>
        );
    }

}

export default Shop;
