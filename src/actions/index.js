export const initGame = (gameLevel, tableauPiles, stock) => ({
    type: "INIT_GAME",
    gameLevel: gameLevel,
    tableauPiles: tableauPiles,
    stock: stock
});

export const dealNextCards = () => ({
    type: "DEAL_CARDS"
});