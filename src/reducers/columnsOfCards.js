const columnsOfCards = (state = [], action) => {
    switch (action.type) {
        case 'INIT_GAME':
            return action.columnsOfCards;
        default:
            return state
    }
};

export default columnsOfCards