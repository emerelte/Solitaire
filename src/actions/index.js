export const initGame = (p_columnsOfCards, p_restOfCardDeck) => ({
    type: 'INIT_GAME',
    columnsOfCards: p_columnsOfCards,
    restOfCardDeck: p_restOfCardDeck
});

export const addCard = text => ({
    type: 'ADD_CARD',
    text
});
