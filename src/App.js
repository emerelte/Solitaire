import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import './style/App.css';
import './style/CardDeck.css';
import GameStatusForm from "./GameStatusForm"
import {DragDropContext} from 'react-dnd'
import {
    createShuffledCardDeck,
    isKing,
    mapGameLevelToGameSetup,
    showCard,
    isPossibleToMoveCardBetweenColumns, isRightCardToPlaceInTarget
} from "./HelperFunctions"
import CardColumns from "./components/Presentional/CardColumns";
import {idOfEmptyTarget, idOfTargetOfEmptyColumn} from "./Constants.js";
import BottomCards from "./components/Logical/BottomCards";
import TimeAndCounterIndicator from "./components/Logical/TimeAndCounterIndicator";
import { initGame } from './actions'
import CardValue from "./components/Presentional/CardValue";
import VisibleCardColumns from "./components/VisibleCardColumns";
import MyButton from "./components/MyButton";

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         hasGameStarted: false,
    //         gameMode: {},
    //         columnsOfCards: [],
    //         bottomCards: [],
    //         restOfCardDeck: [],
    //         columnTargets: [],
    //         bottomTargets: [],
    //         movesCounter: 0,
    //         begTime: null,
    //         curTime: null
    //     };
    // }
    //
    // initializeGame = (p_gameLevel) => {
    //     const gameMode = mapGameLevelToGameSetup(p_gameLevel);
    //     let cardDeck = createShuffledCardDeck(gameMode.nrOfSuites);
    //     let cardsPlacedInColumns = cardDeck.slice(0, gameMode.nrOfCols * gameMode.nrOfCardsInColumn);
    //     let restOfCards = cardDeck.slice(gameMode.nrOfCols * gameMode.nrOfCardsInColumn, cardDeck.length);
    //     let colOfCards = [];
    //     for (let i = 0; i < gameMode.nrOfCols; ++i) {
    //         let cardsInColumn = cardsPlacedInColumns.slice(i * gameMode.nrOfCardsInColumn, (i + 1) * gameMode.nrOfCardsInColumn);
    //         showCard(cardsInColumn[cardsInColumn.length - 1]);
    //         colOfCards.push(cardsInColumn);
    //     }
    //
    //     this.setState({
    //         hasGameStarted: true,
    //         gameMode: gameMode,
    //         columnsOfCards: colOfCards,
    //         bottomCards: Array.from({length: gameMode.nrOfSuites}, e => []),
    //         restOfCardDeck: restOfCards,
    //         columnTargets: Array(gameMode.nrOfCols).fill({'id': idOfEmptyTarget}),
    //         bottomTargets: Array(gameMode.nrOfSuites).fill({'id': idOfEmptyTarget})
    //     });
    // };
    //
    // moveCardToBottomColumn(cardToMove, destCol) {
    //     this.setState(prevState => {
    //         return {
    //             columnsOfCards: prevState.columnsOfCards.map(k => k.filter(e => e.id !== cardToMove.id))
    //         }
    //     });
    //     this.setState(prevState => {
    //         prevState.bottomCards[destCol].push(cardToMove);
    //         return {
    //             bottomCards: prevState.bottomCards
    //         }
    //     });
    //     this.incrementMovesCounter();
    // }
    //
    // dealNextCards = () => {
    //     this.setState(prevState => {
    //         for (let i = 0; i < prevState.columnsOfCards.length; ++i) {
    //             let nextCardFromDeck = prevState.restOfCardDeck.pop();
    //             if (nextCardFromDeck === undefined)
    //                 break;
    //             showCard(nextCardFromDeck);
    //             prevState.columnsOfCards[i].push(nextCardFromDeck);
    //         }
    //         return {
    //             columnsOfCards: prevState.columnsOfCards
    //         }
    //     });
    // };
    //
    // createTargets = (p_card) => {
    //     let columnTargets = [];
    //     this.state.columnsOfCards.forEach((column, index) => {
    //             if (column.length === 0) {
    //                 if (isKing(p_card))
    //                     columnTargets.push({'id': idOfTargetOfEmptyColumn});
    //                 else
    //                     columnTargets.push({'id': idOfEmptyTarget});
    //             } else if (isPossibleToMoveCardBetweenColumns(p_card, column[column.length - 1]))
    //                 columnTargets.push({'id': column[column.length - 1].id});
    //             else
    //                 columnTargets.push({'id': idOfEmptyTarget});
    //         }
    //     );
    //
    //     let bottomTargets = [];
    //     this.state.bottomTargets.forEach((column, index) => {
    //         if (isRightCardToPlaceInTarget(p_card, this.state.bottomCards[index][this.state.bottomCards[index].length - 1])) {
    //             bottomTargets.push({'id': index});
    //         } else {
    //             bottomTargets.push({'id': idOfEmptyTarget})
    //         }
    //     });
    //
    //
    //     this.setState({
    //         columnTargets: columnTargets,
    //         bottomTargets: bottomTargets
    //     })
    // };
    //
    // deleteTargets = () => {
    //     this.setState(
    //         {
    //             columnTargets: Array(this.state.gameMode.nrOfCols).fill({'id': idOfEmptyTarget}),
    //             bottomTargets: Array(this.state.gameMode.nrOfSuites).fill({'id': idOfEmptyTarget})
    //         }
    //     )
    // };
    //
    // moveCardsToDestColumn = (startingCard, destCol) => {
    //     let cardsToMove = this.getListOfBoundCards(startingCard);
    //     for (let i = 0; i < cardsToMove.length; ++i) {
    //         this.moveCardToColumn(cardsToMove[i], destCol);
    //     }
    //     this.deleteTargets();
    //     this.incrementMovesCounter();
    // };
    //
    // incrementMovesCounter() {
    //     this.setState(prevState => {
    //         return ({
    //             movesCounter: prevState.movesCounter + 1
    //         })
    //     });
    // }
    //
    // getListOfBoundCards(card) {
    //     let sourceCardCoords = this.getCardCoords(card);
    //     let column = sourceCardCoords.column;
    //     let row = sourceCardCoords.row;
    //     let boundCards = [];
    //     while (row < this.state.columnsOfCards[column].length) {
    //         boundCards.push(this.getCardAt(column, row));
    //         row++;
    //     }
    //     return boundCards;
    // }
    //
    // getCardCoords = (card) => {
    //     for (let i = 0; i < this.state.columnsOfCards.length; ++i) {
    //         if (this.state.columnsOfCards[i].indexOf(card) !== -1)
    //             return {"column": i, "row": this.state.columnsOfCards[i].indexOf(card)};
    //     }
    //     return {"column": -1, "row": -1};
    // };
    //
    // getCardAt = (colIdx, rowIdx) => {
    //     return this.state.columnsOfCards[colIdx][rowIdx];
    // };
    //
    // moveCardToColumn = (card, dest) => {
    //     this.setState(prevState => {
    //         return {
    //             columnsOfCards: prevState.columnsOfCards.map(k => k.filter(e => e.id !== card.id))
    //         }
    //     });
    //     this.setState(prevState => {
    //         prevState.columnsOfCards[dest].push(card);
    //         return {
    //             columnsOfCards: prevState.columnsOfCards
    //         }
    //     });
    // };

    render = () => {
        //TODO start timer when the game begins
        // if (this.state.hasGameStarted) {
        //     setInterval(function () {
        //         this.setState({curTime: new Date().getTime()});
        //     }.bind(this), 1000);
        // }
        return (
            // !this.state.hasGameStarted ? <GameStatusForm notify={this.initializeGame}/> :
                <div className="card-game-table">
                    <CardColumns/>
                    <div className="bottom-row" style={{position: "relative", bottom: "20px"}}>
                        <TimeAndCounterIndicator/>
                        <BottomCards/>
                    </div>
                    <MyButton/>
                </div>
        );
    };
}

export default DragDropContext(HTML5Backend)(App);