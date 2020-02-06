const restOfCardDeck = (state = [], action) => {
    switch (action.type) {
        case 'INIT_GAME':
            return [
                action.restOfCardDeck
            ];
        default:
            return state
    }
};

export default restOfCardDeck