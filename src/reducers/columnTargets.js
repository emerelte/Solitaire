import {idOfEmptyTarget} from "../Constants";
import {mapGameLevelToGameSetup} from "../HelperFunctions";

const columnTargets = (state = [], action) => {
    switch (action.type) {
        case 'INIT_GAME':
            return Array(mapGameLevelToGameSetup(action.gameLevel).nrOfCols).fill({'id': idOfEmptyTarget});
        default:
            return state
    }
};

export default columnTargets