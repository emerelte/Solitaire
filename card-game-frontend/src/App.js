import React from 'react';
import './style/App.css';
import './style/CardDeck.css';
import CardStack from "./CardStack";
import GameStatusForm from "./GameStatusForm"
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
import Target from "./Target";
import CardDeck from "./CardDeck";
import {findFontColor, createCardDeck, shuffleArray, isKing, mapGameLevelToGameSetup} from "./HelperFunctions"

const emptyTarget = -1;
const idOfEmptyColumnTarget = 0;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasGameStarted: false,
            gameMode: {},
            columnsOfCards: [],
            restOfCardDeck: [],
            bottomCards: [],
            columnTargets: [],
            bottomTargets: []
        };
    }

    initializeGame = (p_gameLevel) => {
        const gameMode = mapGameLevelToGameSetup(p_gameLevel);
        let cardDeck = createCardDeck(gameMode.nrOfSuites);
        cardDeck = shuffleArray(cardDeck);
        let cardsPlacedInColumns = cardDeck.slice(0, gameMode.nrOfCols * gameMode.nrOfCardsInColumn);
        let restOfCards = cardDeck.slice(gameMode.nrOfCols * gameMode.nrOfCardsInColumn, cardDeck.length);
        let colOfCards = [];
        for (let i = 0; i < gameMode.nrOfCols; ++i) {
            let cardsInColumn = cardsPlacedInColumns.slice(i * gameMode.nrOfCardsInColumn, (i + 1) * gameMode.nrOfCardsInColumn);
            cardsInColumn[cardsInColumn.length - 1].hidden = false;
            colOfCards.push(cardsInColumn);
        }
        this.setState({
            gameMode: gameMode,
            hasGameStarted: true,
            columnsOfCards: colOfCards,
            restOfCardDeck: restOfCards,
            bottomCards: Array.from({length: gameMode.nrOfSuites}, e => []),
            columnTargets: Array(gameMode.nrOfCols).fill({'id': emptyTarget}),
            bottomTargets: Array(gameMode.nrOfSuites).fill({'id': emptyTarget})
        });
    };

    moveCardsToDestColumn = (startingCard, destCol) => {
        let cardsToMove = this.getListOfBoundCards(startingCard);
        for (let i = 0; i < cardsToMove.length; ++i) {
            this.moveCardToColumn(cardsToMove[i], destCol);
        }
        this.deleteTargets();
    };

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

    moveCardToBottomColumn(cardToMove, destCol) {
        if (!this.isNextCardInOrder(cardToMove, destCol))
            return;
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

    isPossibleToMoveCardBetweenColumns = (movingCard, targetCard) => {
        return findFontColor(movingCard) !== findFontColor(targetCard) &&
            movingCard.value === targetCard.value - 1;
    };

    createTargets = (card) => {
        let columnTargets = [];
        this.state.columnsOfCards.forEach((column, index) => {
                if (column.length === 0) {
                    if (isKing(card))
                        columnTargets.push({'id': idOfEmptyColumnTarget});
                    else
                        columnTargets.push({'id': emptyTarget});
                } else if (this.isPossibleToMoveCardBetweenColumns(card, column[column.length - 1]))
                    columnTargets.push({'id': column[column.length - 1].id});
                else
                    columnTargets.push({'id': emptyTarget});
            }
        );

        this.setState(prevState => {
            return {
                columnTargets: columnTargets,
                bottomTargets: Array(this.state.gameMode.nrOfSuites).fill({'id': emptyTarget})
            }
        })
    };

    deleteTargets = () => {
        this.setState(
            {
                columnTargets: Array(this.state.gameMode.nrOfCols).fill({'id': emptyTarget}),
                bottomTargets: Array(this.state.gameMode.nrOfSuites).fill({'id': emptyTarget})
            }
        )
    };

    dealNextCards = () => {
        this.setState(prevState => {
            for (let i = 0; i < prevState.columnsOfCards.length; ++i) {
                let nextCardFromDeck = prevState.restOfCardDeck.pop();
                if (nextCardFromDeck === undefined)
                    break;
                nextCardFromDeck.hidden = false;
                prevState.columnsOfCards[i].push(nextCardFromDeck);
            }
            return {
                columnsOfCards: prevState.columnsOfCards
            }
        });
    };

    render = () => {
        return (
            !this.state.hasGameStarted ? <GameStatusForm notify={this.initializeGame}/> :
                <div className="card-game-table">
                    <div className="wide-row">
                        {this.state.columnsOfCards.map((column, colInd) => (
                            <div key={colInd} style={{position: "relative", height: "0px"}}
                                 className={"solitaire-column"}>
                                <CardStack
                                    deleteTargets={() => this.deleteTargets()}
                                    createTargets={this.createTargets}
                                    cardsInColumn={column}/>
                                {
                                    this.state.columnTargets[colInd]['id'] !== emptyTarget ?
                                        <div className={"card-box"}
                                             style={{
                                                 position: "relative",
                                                 top: "" + ((column.length - 1) * 9.8 * 15 / 100) + "vw"
                                             }}>
                                            <Target
                                                moveCard={(src, dst) => this.moveCardsToDestColumn(src, dst)}
                                                id={colInd}/></div>
                                        : <div/>
                                }
                            </div>
                        ))}
                    </div>
                    <div className="narrow-row" style={{position: "relative", bottom: "20px"}}>
                        {
                            this.state.bottomCards.map((cardList, index) => (
                                <div key={index} className={"card-box"}>
                                    <CardDeck
                                        cards={cardList}/>
                                    <div style={{zIndex: 1}} key={index} className={"target-box"}>
                                        <Target
                                            moveCard={(src, dst) => this.moveCardToBottomColumn(src, dst)}
                                            id={index}/>
                                    </div>
                                </div>))
                        }
                        <div onClick={this.dealNextCards}>
                            <CardDeck cards={this.state.restOfCardDeck} className={"card-deck"}/></div>
                    </div>
                </div>
        );
    };
}

export default DragDropContext(HTML5Backend)(App);