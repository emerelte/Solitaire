const hasGameStarted = (state = false, action) => {
    switch (action.type) {
        case 'INIT_GAME':
            return true;
        case 'GO_TO_MENU':
            return false;
        default:
            return state
    }
};

export default hasGameStarted