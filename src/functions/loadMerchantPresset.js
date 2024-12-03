import { v4 as uuidv4 } from 'uuid';

export default function loadMerchantPresset(collection, stage, merchant, lvl,) {

    if (stage === 'training' && merchant === 'goblin') {
        const presset = [
            "potion_of_healing",
            "potion_of_healing", 
            "living_bones",
            "goblin_slob",
            "goblin_slob",
            "goblin_stinky",
            "poison_arrow"
        ]
        // const newCollection = collection.filter((card) => ["potion_of_healing", "living_bones","goblin_slob","goblin_stinky","poison_arrow"].includes(card.nameKey))
        const pool = []
        presset.forEach((cardName) => {
            const card = collection.find((collect) => collect.nameKey === cardName);
            if (card) {
                pool.push({
                    ...card,
                    key: uuidv4()
                });
            }
        });

        return pool;
    }
}