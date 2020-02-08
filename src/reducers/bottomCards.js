const bottomCards = (state = [], action) => {
    switch (action.type) {
        case 'INIT_GAME':
            return Array.from({length: 4}, e => []); //todo hardcode
        default:
            return state
    }
};

export default bottomCards