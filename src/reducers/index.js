import { combineReducers } from 'redux'
import columnsOfCards from "./columnsOfCards";
import bottomCards from "./bottomCards";
import restOfCardDeck from "./restOfCardDeck";
import counter from "./counter";
import columnTargets from "./columnTargets";
import gameMode from "./gameMode";

export default combineReducers({
    columnsOfCards,
    bottomCards,
    restOfCardDeck,
    counter,
    columnTargets,
    gameMode
})