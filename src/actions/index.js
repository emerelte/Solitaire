export const initGame = (gameLevel, columnsOfCards, restOfCardDeck) => ({
    type: 'INIT_GAME',
    gameLevel: gameLevel,
    columnsOfCards: columnsOfCards,
    restOfCardDeck: restOfCardDeck
});
