export const initGame = (gameLevel, tableauPiles, stock) => ({
    type: "INIT_GAME",
    gameLevel: gameLevel,
    tableauPiles: tableauPiles,
    stock: stock
});

export const dealNextCards = () => ({
    type: "DEAL_CARDS"
});

export const createTargets = (cardToMove) => ({
    type: "CREATE_TARGETS",
    cardToMove: cardToMove
});

export const deleteTargets = () => ({
    type: "DELETE_TARGETS"
});

export const moveCardToFoundation = (cardToMove, foundationIndex) => ({
    type: "MOVE_TO_FOUNDATION",
    cardToMove: cardToMove,
    foundationIndex: foundationIndex
});

export const moveCardBetweenPiles = (cardToMove, destPileIdx) => ({
    type: "MOVE_BETWEEN_PILES",
    cardToMove: cardToMove,
    destPileIdx: destPileIdx
});

export const updateTimer = () => ({
    type: "UPDATE_TIMER"
});
