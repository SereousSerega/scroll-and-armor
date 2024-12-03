export default function chooseRarityColor(rarity) {
    const rarityColors = {
        common:"#808080",          // Серый
        uncommon:"#2d772d",      // Зелёный
        rare: "#2c87febb",           // Синий
        very_rare:"#800080", // Фиолетовый
        epic:"#FF4500",    // Оранжевый
        legendary:"#FFD700",  // Золотой
        mythical: "#FF69B4"    // Розовый
    };
    return rarityColors[rarity] || "#000000";
}