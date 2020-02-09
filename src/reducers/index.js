import { combineReducers } from 'redux'
import counter from "./counter";
import gameMode from "./gameMode";
import cardsOnTheTable from "./cardsOnTheTable";
import hasGameStarted from "./hasGameStarted";

export default combineReducers({
    cardsOnTheTable,
    counter,
    gameMode,
    hasGameStarted
})