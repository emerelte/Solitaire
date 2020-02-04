import {combineReducers} from 'redux'
import {createShuffledCardDeck, mapGameLevelToGameSetup, showCard} from "../HelperFunctions";
import {idOfEmptyTarget} from "../Constants";


const cards = (state = [], action) => {
    switch (action.type) {
        case 'INIT_GAME':
            const gameMode = mapGameLevelToGameSetup(1); //TODO magic number
            let cardDeck = createShuffledCardDeck(gameMode.nrOfSuites);
            let cardsPlacedInColumns = cardDeck.slice(0, gameMode.nrOfCols * gameMode.nrOfCardsInColumn);
            let restOfCards = cardDeck.slice(gameMode.nrOfCols * gameMode.nrOfCardsInColumn, cardDeck.length);
            let colOfCards = [];
            for (let i = 0; i < gameMode.nrOfCols; ++i) {
                let cardsInColumn = cardsPlacedInColumns.slice(i * gameMode.nrOfCardsInColumn, (i + 1) * gameMode.nrOfCardsInColumn);
                showCard(cardsInColumn[cardsInColumn.length - 1]);
                colOfCards.push(cardsInColumn);
            }

            return [
                ...state,
                {
                    hasGameStarted: true,
                    gameMode: gameMode,
                    columnsOfCards: colOfCards,
                    bottomCards: Array.from({length: gameMode.nrOfSuites}, e => []),
                    restOfCardDeck: restOfCards,
                    columnTargets: Array(gameMode.nrOfCols).fill({'id': idOfEmptyTarget}),
                    bottomTargets: Array(gameMode.nrOfSuites).fill({'id': idOfEmptyTarget})
                }
            ];
        default:
            return state
    }
};


export default combineReducers({
    cards
})