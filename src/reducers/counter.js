let movesDone = 0;

const counter = (state = [], action) => {
    switch (action.type) {
        case 'INIT_GAME':
            return {
                movesDone: 0,
                begTime: 1,//todo implementation
                curTime: 1
            };
        case 'MOVE_TO_FOUNDATION':
        case 'MOVE_BETWEEN_PILES':
            ++movesDone;
            return {
                ...state,
                movesDone: movesDone
            };
        default:
            return state
    }
};

export default counter