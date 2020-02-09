import PropTypes from "prop-types";
import {
    createFoundationsTargets,
    createTableauTargets,
    getListOfBoundCards,
    mapGameLevelToGameSetup
} from "../HelperFunctions";
import {idOfEmptyTarget} from "../Constants";

const cardsOnTheTable = (state = {}, action) => {
    console.log(action.type);
    switch (action.type) {
        case "INIT_GAME":
            return {
                tableauPiles: action.tableauPiles,
                foundations: Array.from({length: 4}, e => []),
                stock: action.stock,
                tableauTargets: Array(mapGameLevelToGameSetup(action.gameLevel).nrOfCols).fill({'id': idOfEmptyTarget}),
                foundationsTargets: Array(4).fill({'id': idOfEmptyTarget})
            };
        case "DEAL_CARDS":
            return {
                tableauPiles: state.tableauPiles.map((column, index) => (
                    index < state.stock.length ? [...column, state.stock[index]] : [...column]
                )),
                foundations: state.foundations,
                stock: state.stock.slice(state.tableauPiles.length, state.stock.length),
                tableauTargets: state.tableauTargets,
                foundationsTargets: state.foundationsTargets
            };
        case "CREATE_TARGETS":
            return {
                tableauPiles: state.tableauPiles,
                foundations: state.foundations,
                stock: state.stock,
                tableauTargets: createTableauTargets(action.cardToMove, state.tableauPiles),
                foundationsTargets: createFoundationsTargets(action.cardToMove, state.foundations, state.foundationsTargets)
            };
        case "DELETE_TARGETS":
            return {
                tableauPiles: state.tableauPiles,
                foundations: state.foundations,
                stock: state.stock,
                tableauTargets: Array(state.tableauPiles.length).fill({'id': idOfEmptyTarget}),
                foundationsTargets: Array(state.foundations.length).fill({'id': idOfEmptyTarget})
            };
        case "MOVE_TO_FOUNDATIONS":
            return {
                tableauPiles: state.tableauPiles.map(k => k.filter(e => e.id !== action.cardToMove.id)),
                foundations: state.foundations.map((column, index) => (
                    index === action.foundationIndex ? [...column, action.cardToMove] : [...column]
                )),
                stock: state.stock,
                tableauTargets: Array(state.tableauPiles.length).fill({'id': idOfEmptyTarget}),
                foundationsTargets: Array(state.foundations.length).fill({'id': idOfEmptyTarget})
            };
        case "MOVE_BETWEEN_PILES":
            const boundCards = getListOfBoundCards(action.cardToMove, state.tableauPiles);
            return {
                tableauPiles: state.tableauPiles.map(k => k.filter(e => !boundCards.includes(e)))
                                                .map((pile, index) => (
                    index === action.destPileIdx ? [...pile, ...boundCards] : [...pile]
                )),
                foundations: state.foundations,
                stock: state.stock,
                tableauTargets: Array(state.tableauPiles.length).fill({'id': idOfEmptyTarget}),
                foundationsTargets: Array(state.foundations.length).fill({'id': idOfEmptyTarget})
            };
        default:
            return {tableauPiles: [], foundations: [], stock: [], tableauTargets: [], foundationsTargets: []}
    }
};




export default cardsOnTheTable
