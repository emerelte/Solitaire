let movesDone = 0;

const counter = (state = [], action) => {
    switch (action.type) {
        case "INIT_GAME":
            return {
                movesDone: 0,
                begTime: new Date().getTime(),
                passedTime: new Date(0)
            };
        case "MOVE_TO_FOUNDATION":
        case "MOVE_BETWEEN_PILES":
            ++movesDone;
            return {
                ...state,
                movesDone: movesDone
            };
        case "UPDATE_TIMER":
            return {
                ...state,
                passedTime: new Date(new Date().getTime() - state.begTime)
            };
        default:
            return state;
    }
};

export default counter