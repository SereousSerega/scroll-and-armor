import characters from '../data/core/characters.json'
import items from '../data/core/items.json'

export default function loadCardCollection() {
    const charactersWithType = characters.map((character) => ({
        ...character,
        type: 'character',
    }));

    const itemsWithType = items.map((item) => ({
        ...item,
        type: 'item',
    }));

    const collection = [...charactersWithType, ...itemsWithType];

    return collection;
}