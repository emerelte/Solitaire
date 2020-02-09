import {mapGameLevelToGameSetup} from "../HelperFunctions";

const columnTargets = (state = {}, action) => {
    switch (action.type) {
        case 'INIT_GAME':
            return mapGameLevelToGameSetup(action.gameLevel);
        default:
            return state
    }
};

export default columnTargets
