let id = 0;

const columnsOfCards = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case 'INIT_GAME':
            return [
                action.columnsOfCards
            ];
        default:
            return state
    }
};

export default columnsOfCards