import { combineReducers } from 'redux'
import counter from "./counter";
import gameMode from "./gameMode";
import cardsOnTheTable from "./cardsOnTheTable";

export default combineReducers({
    cardsOnTheTable,
    counter,
    gameMode
})