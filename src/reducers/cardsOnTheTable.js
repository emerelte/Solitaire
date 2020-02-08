const cardsOnTheTable = (state = {}, action) => {
    switch (action.type) {
        case 'INIT_GAME':
            return {
                tableauPiles: action.tableauPiles,
                foundations: Array.from({length: 4}, e => []),
                stock: action.stock
            };
        default:
            return {tableauPiles: [], foundations: [], stock: []}
    }
};

export default cardsOnTheTable
