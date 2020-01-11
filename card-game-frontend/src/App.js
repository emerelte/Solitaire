import React from 'react';
import './style/App.css';
import './style/CardDeck.css';
import GameStatusForm from "./GameStatusForm"
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
import {
    createShuffledCardDeck,
    isKing,
    mapGameLevelToGameSetup,
    showCard,
    isPossibleToMoveCardBetweenColumns
} from "./HelperFunctions"
import CardColumns from "./CardColumns";
import {idOfEmptyTarget, idOfTargetOfEmptyColumn} from "./Constants.js";
import BottomCards from "./BottomCards";
import TimeAndCounterIndicator from "./TimeAndCounterIndicator";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasGameStarted: false,
            gameMode: {},
            columnsOfCards: [],
            bottomCards: [],
            restOfCardDeck: [],
            columnTargets: [],
            bottomTargets: [],
            movesCounter: 0
        };
    }

    initializeGame = (p_gameLevel) => {
        const gameMode = mapGameLevelToGameSetup(p_gameLevel);
        let cardDeck = createShuffledCardDeck(gameMode.nrOfSuites);
        let cardsPlacedInColumns = cardDeck.slice(0, gameMode.nrOfCols * gameMode.nrOfCardsInColumn);
        let restOfCards = cardDeck.slice(gameMode.nrOfCols * gameMode.nrOfCardsInColumn, cardDeck.length);
        let colOfCards = [];
        for (let i = 0; i < gameMode.nrOfCols; ++i) {
            let cardsInColumn = cardsPlacedInColumns.slice(i * gameMode.nrOfCardsInColumn, (i + 1) * gameMode.nrOfCardsInColumn);
            showCard(cardsInColumn[cardsInColumn.length - 1]);
            colOfCards.push(cardsInColumn);
        }

        //TODO bottom targets should appear only if it's possible to move card there
        this.setState({
            hasGameStarted: true,
            gameMode: gameMode,
            columnsOfCards: colOfCards,
            bottomCards: Array.from({length: gameMode.nrOfSuites}, e => []),
            restOfCardDeck: restOfCards,
            columnTargets: Array(gameMode.nrOfCols).fill({'id': idOfEmptyTarget}),
            bottomTargets: Array(gameMode.nrOfSuites).fill({'id': idOfEmptyTarget})
        });
    };

    moveCardToBottomColumnIfIsNextInOrder(cardToMove, destCol) {
        if (!this.isNextCardInOrder(cardToMove, destCol)) {
            return;
        }
        this.setState(prevState => {
            return {
                columnsOfCards: prevState.columnsOfCards.map(k => k.filter(e => e.id !== cardToMove.id))
            }
        });
        this.setState(prevState => {
            prevState.bottomCards[destCol].push(cardToMove);
            return {
                bottomCards: prevState.bottomCards
            }
        });
        this.incrementMovesCounter();
    }

    isNextCardInOrder(cardToMove, destCol) {
        if (this.state.bottomCards[destCol].length === 0) {
            if (cardToMove.value === 1)
                return true;
        } else {
            if (cardToMove.color === this.state.bottomCards[destCol][this.state.bottomCards[destCol].length - 1].color
                && cardToMove.value === this.state.bottomCards[destCol][this.state.bottomCards[destCol].length - 1].value + 1)
                return true;
        }
        return false;
    }

    dealNextCards = () => {
        this.setState(prevState => {
            for (let i = 0; i < prevState.columnsOfCards.length; ++i) {
                let nextCardFromDeck = prevState.restOfCardDeck.pop();
                if (nextCardFromDeck === undefined)
                    break;
                showCard(nextCardFromDeck);
                prevState.columnsOfCards[i].push(nextCardFromDeck);
            }
            return {
                columnsOfCards: prevState.columnsOfCards
            }
        });
    };

    createTargets = (card) => {
        let columnTargets = [];
        this.state.columnsOfCards.forEach((column, index) => {
                if (column.length === 0) {
                    if (isKing(card))
                        columnTargets.push({'id': idOfTargetOfEmptyColumn});
                    else
                        columnTargets.push({'id': idOfEmptyTarget});
                } else if (isPossibleToMoveCardBetweenColumns(card, column[column.length - 1]))
                    columnTargets.push({'id': column[column.length - 1].id});
                else
                    columnTargets.push({'id': idOfEmptyTarget});
            }
        );

        this.setState({
            columnTargets: columnTargets,
        })
    };

    deleteTargets = () => {
        this.setState(
            {
                columnTargets: Array(this.state.gameMode.nrOfCols).fill({'id': idOfEmptyTarget}),
                bottomTargets: Array(this.state.gameMode.nrOfSuites).fill({'id': idOfEmptyTarget})
            }
        )
    };

    moveCardsToDestColumn = (startingCard, destCol) => {
        let cardsToMove = this.getListOfBoundCards(startingCard);
        for (let i = 0; i < cardsToMove.length; ++i) {
            this.moveCardToColumn(cardsToMove[i], destCol);
        }
        this.deleteTargets();
        this.incrementMovesCounter();
        console.log(this.state.movesCounter);
    };

    incrementMovesCounter() {
        this.setState(prevState => {
            return ({
                movesCounter: prevState.movesCounter + 1
            })
        });
    }

    getListOfBoundCards(card) {
        let sourceCardCoords = this.getCardCoords(card);
        let column = sourceCardCoords.column;
        let row = sourceCardCoords.row;
        let boundCards = [];
        while (row < this.state.columnsOfCards[column].length) {
            boundCards.push(this.getCardAt(column, row));
            row++;
        }
        return boundCards;
    }

    getCardCoords = (card) => {
        for (let i = 0; i < this.state.columnsOfCards.length; ++i) {
            if (this.state.columnsOfCards[i].indexOf(card) !== -1)
                return {"column": i, "row": this.state.columnsOfCards[i].indexOf(card)};
        }
        return {"column": -1, "row": -1};
    };

    getCardAt = (colIdx, rowIdx) => {
        return this.state.columnsOfCards[colIdx][rowIdx];
    };

    moveCardToColumn = (card, dest) => {
        this.setState(prevState => {
            return {
                columnsOfCards: prevState.columnsOfCards.map(k => k.filter(e => e.id !== card.id))
            }
        });
        this.setState(prevState => {
            prevState.columnsOfCards[dest].push(card);
            return {
                columnsOfCards: prevState.columnsOfCards
            }
        });
    };

    render = () => {
        return (
            !this.state.hasGameStarted ? <GameStatusForm notify={this.initializeGame}/> :
                <div className="card-game-table">
                    <CardColumns gameManager={this}/>
                    <div className="bottom-row" style={{position: "relative", bottom: "20px"}}>
                        <TimeAndCounterIndicator movesCounter={this.state.movesCounter}/>
                        <BottomCards gameManager={this}/>
                    </div>
                </div>
        );
    };
}

export default DragDropContext(HTML5Backend)(App);