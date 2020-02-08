import { combineReducers } from 'redux'
import counter from "./counter";
import tableauTargets from "./tableauTargets";
import gameMode from "./gameMode";
import cardsOnTheTable from "./cardsOnTheTable";

export default combineReducers({
    cardsOnTheTable,
    counter,
    tableauTargets,
    gameMode
})