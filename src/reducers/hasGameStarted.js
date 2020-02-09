const hasGameStarted = (state = false, action) => {
    switch (action.type) {
        case 'INIT_GAME':
            return true;
        default:
            return state
    }
};

export default hasGameStarted