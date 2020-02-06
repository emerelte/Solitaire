export const initGame = (p_gameLevel, p_columnsOfCards, p_restOfCardDeck) => ({
    type: 'INIT_GAME',
    gameLevel: p_gameLevel,
    columnsOfCards: p_columnsOfCards,
    restOfCardDeck: p_restOfCardDeck
});

export const addCard = text => ({
    type: 'ADD_CARD',
    text
});
