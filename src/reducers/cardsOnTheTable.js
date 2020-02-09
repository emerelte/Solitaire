import {
    createFoundationsTargets,
    createTableauTargets,
    getListOfBoundCards,
    mapGameLevelToGameSetup
} from "../HelperFunctions";
import {idOfInvalidTarget} from "../Constants";

const cardsOnTheTable = (state = {}, action) => {
    switch (action.type) {
        case "INIT_GAME":
            return {
                tableauPiles: action.tableauPiles,
                foundations: Array.from({length: mapGameLevelToGameSetup(action.gameLevel).nrOfSuites}, e => []),
                stock: action.stock,
                tableauTargets: Array(mapGameLevelToGameSetup(action.gameLevel).nrOfCols).fill({'id': idOfInvalidTarget}),
                foundationsTargets: Array(mapGameLevelToGameSetup(action.gameLevel).nrOfSuites).fill({'id': idOfInvalidTarget})
            };
        case "DEAL_CARDS":
            return {
                ...state,
                tableauPiles: state.tableauPiles.map((column, index) => (
                    index < state.stock.length ? [...column, state.stock[index]] : [...column]
                )),
                stock: state.stock.slice(state.tableauPiles.length, state.stock.length),
            };
        case "CREATE_TARGETS":
            return {
                ...state,
                tableauTargets: createTableauTargets(action.cardToMove, state.tableauPiles),
                foundationsTargets: createFoundationsTargets(action.cardToMove, state.foundations)
            };
        case "DELETE_TARGETS":
            return {
                ...state,
                tableauTargets: Array(state.tableauPiles.length).fill({'id': idOfInvalidTarget}),
                foundationsTargets: Array(state.foundations.length).fill({'id': idOfInvalidTarget})
            };
        case "MOVE_TO_FOUNDATION":
            return {
                ...state,
                tableauPiles: state.tableauPiles.map(k => k.filter(e => e.id !== action.cardToMove.id)),
                foundations: state.foundations.map((column, index) => (
                    index === action.foundationIndex ? [...column, action.cardToMove] : [...column]
                )),
            };
        case "MOVE_BETWEEN_PILES":
            const boundCards = getListOfBoundCards(action.cardToMove, state.tableauPiles);
            return {
                ...state,
                tableauPiles: state.tableauPiles.map(k => k.filter(e => !boundCards.includes(e)))
                                                .map((pile, index) => (
                    index === action.destPileIdx ? [...pile, ...boundCards] : [...pile]
                )),
            };
        default:
            return {tableauPiles: [], foundations: [], stock: [], tableauTargets: [], foundationsTargets: []}
    }
};




export default cardsOnTheTable
