let movesDone = 0;

const counter = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case 'INIT_GAME':
            return {
                movesDone: 0,
                begTime: 1,//todo implementation
                curTime: 1
            };
        case 'MOVE_DONE':
            return state; //todo implementation
        case 'UPDATE_TIME':
            return state; // todo implementation
        default:
            return state
    }
};

export default counter