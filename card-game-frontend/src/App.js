import React from 'react';
import './style/App.css';
import CardStack from "./CardStack";
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
import Target from "./Target";
import CardDeck from "./CardDeck";
import {findFontColor, createCardDeck, shuffleArray} from "./HelperFunctions"

const emptyTarget = -1;
const nrOfCols = 7;
const nrOfCardsInColumn = 4;
const idOfEmptyColumnTarget = 0;

class App extends React.Component {

    constructor(props) {
        super(props);
        let cardDeck = createCardDeck();
        cardDeck = shuffleArray(cardDeck);
        let cardsPlacedInColumns = cardDeck.slice(0, nrOfCols * nrOfCardsInColumn);
        let restOfCards = cardDeck.slice(nrOfCols * nrOfCardsInColumn, cardDeck.length);
        let colOfCards = [];
        for (let i = 0; i < nrOfCols; ++i) {
            let cardsInColumn = cardsPlacedInColumns.slice(i * nrOfCardsInColumn, (i + 1) * nrOfCardsInColumn);
            cardsInColumn[cardsInColumn.length - 1].hidden = false;
            colOfCards.push(cardsInColumn);
        }
        this.state = {
            columnsOfCards: colOfCards,
            restOfCardDeck: restOfCards,
            bottomCards: [[], [], [], []],
            columnTargets: [{'id': emptyTarget}, {'id': emptyTarget}, {'id': emptyTarget}, {'id': emptyTarget}, {'id': emptyTarget}, {'id': emptyTarget}, {'id': emptyTarget}],
            bottomTargets: [{'id': emptyTarget}, {'id': emptyTarget}, {'id': emptyTarget}, {'id': emptyTarget}]
        };
    }

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

    moveCardsToBottomColumn = (startingCard, destCol) => {
        let cardsToMove = this.getListOfBoundCards(startingCard);
        for (let i = 0; i < cardsToMove.length; ++i) {
            this.moveCardToBottomColumn(cardsToMove[i], destCol);
        }
    };

    moveCardToBottomColumn(cardToMove, destCol) {
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

    moveCardToColumn = (card, dest) => {
        console.log(card, dest);
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
        console.log(card);
        let columnTargets = [];
        this.state.columnsOfCards.forEach((column, index) => {
                if (column.length === 0)
                    columnTargets.push({'id': idOfEmptyColumnTarget});
                else if (this.isPossibleToMoveCardBetweenColumns(card, column[column.length - 1]))
                    columnTargets.push({'id': column[column.length - 1].id});
                else
                    columnTargets.push({'id': emptyTarget});
            }
        );

        this.setState(prevState => {
            return {
                columnTargets: columnTargets,
                bottomTargets: [{'id': 0}, {'id': 0}, {'id': 0}, {'id': 0}]
            }
        })
    };

    deleteTargets = () => {
        console.log('delete');
        this.setState(
            {
                'columnTargets': [{'id': emptyTarget}, {'id': emptyTarget}, {'id': emptyTarget}, {'id': emptyTarget}, {'id': emptyTarget}, {'id': emptyTarget}, {'id': emptyTarget}],
                'bottomTargets': [{'id': emptyTarget}, {'id': emptyTarget}, {'id': emptyTarget}, {'id': emptyTarget}]
            }
        )
    };

    showCardBehind = (card) => {
        let tempColOfCards = this.state.columnsOfCards;
        for (let val of tempColOfCards) {
            if (val.indexOf(card) > 0)
                val[val.indexOf(card) - 1].hidden = false;
        }
        this.setState(
            {'columnsOfCards': tempColOfCards}
        );
    };

    render = () => {
        console.log(this.state.columnsOfCards);
        return (
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
                                    <div className={"card-box"} style={{position: "absolute", top: column.length*15}}>
                                        <Target
                                            showCardBehind={(card) => this.showCardBehind(card)}
                                            moveCard={(src, dst) => this.moveCardsToDestColumn(src, dst)}
                                            id={colInd}/></div>
                                    : <div/>
                            }
                        </div>
                    ))}
                </div>
                <div className="narrow-row">
                    {
                        this.state.bottomCards.map((cardList, index) => (
                            <div key={index} className={"solitaire-column"}>
                                {
                                    <CardStack
                                        deleteTargets={() => this.deleteTargets}
                                        createTargets={() => this.createTargets}
                                        cardsInColumn={cardList}/>
                                }
                                {
                                    <div style={{zIndex: 1}} key={index} className={"target-box"}>
                                        <Target
                                            showCardBehind={(card) => this.showCardBehind(card)}
                                            moveCard={(src, dst) => this.moveCardsToBottomColumn(src, dst)}
                                            id={index}/>

                                    </div>
                                }
                            </div>))
                    }
                    {/*<CardDeck hiddenCards={this.state.restOfCardDeck}/>*/}
                </div>
            </div>
        );
    };
}

export default DragDropContext(HTML5Backend)(App);