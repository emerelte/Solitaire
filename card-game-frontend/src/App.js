import React from 'react';
import './style/App.css';
import Card from "./Card";
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
import Target from "./Target";


class App extends React.Component {

    findFontColor = (card) => {
        return card.color === 'spades' || card.color === 'clubs' ? 'black' : 'red';
    };

    createCardDeck = () => {
        let cardDeck = [];
        const listOfColors = ['spades', 'clubs', 'hearts', 'diams'];
        let i = 0;
        for (const color of listOfColors) {
            for (let val = 1; val < 14; ++val) {
                cardDeck.push({'color': color, 'value': val, 'id': i, 'hidden': true});
                ++i;
            }
        }
        return cardDeck;
    };

    shuffleArray = (arr) => {
        let j, x, i;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
        return arr;
    };

    constructor(props) {
        super(props);
        let cardDeck = this.createCardDeck();
        cardDeck = this.shuffleArray(cardDeck);
        let cardsPlacedInColumns = cardDeck.slice(0, 7 * 4);
        let restOfCards = cardDeck.slice(7 * 4, cardDeck.length);
        let colOfCards = [];
        for (let i = 0; i < 7; ++i) {
            let cardsInColumn = cardsPlacedInColumns.slice(i * 4, (i + 1) * 4);
            cardsInColumn[cardsInColumn.length - 1].hidden = false;
            colOfCards.push(cardsInColumn);
        }
        this.state = {
            columnsOfCards: colOfCards,
            restOfCardDeck: restOfCards,
            bottomCards: [[], [], [], []],
            columnTargets: [{'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}],
            bottomTargets: [{'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}]
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
        return this.findFontColor(movingCard) !== this.findFontColor(targetCard) &&
            movingCard.value === targetCard.value - 1;
    };

    createTargets = (card) => {
        let columnTargets = [];
        this.state.columnsOfCards.forEach((column, index) => {
                if (column.length === 0)
                    columnTargets.push({'id': 0});
                else if (this.isPossibleToMoveCardBetweenColumns(card, column[column.length - 1]))
                    columnTargets.push({'id': column[column.length - 1].id});
                else
                    columnTargets.push({'id': -1});
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
        this.setState(
            {
                'columnTargets': [{'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}],
                'bottomTargets': [{'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}]
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

    isHiddenCard = (card) => {
        return card.hidden;
    };

    render = () => {
        return (
            <div className="card-game-table">
                <div className="wide-row">
                    {this.state.columnsOfCards.map((column, colInd) => (
                        <div key={colInd} className={"solitaire-column"}>
                            {column.map((card, index) => (
                                <div key={card['id']} className={"card-box"}>
                                    <Card deleteTargets={() => this.deleteTargets()}
                                          createTargets={() => this.createTargets(card)}
                                          id={card['id']}
                                          item={card}
                                          isHidden={this.isHiddenCard(card)}
                                          value={card['value']}
                                          color={card['color']}/>
                                </div>
                            ))}
                            {
                                this.state.columnTargets[colInd]['id'] !== -1 ?
                                    <div className={"card-box"}>
                                        <Target
                                            showCardBehind={(card) => this.showCardBehind(card)}
                                            moveCard={(src, dst) => this.moveCardsToDestColumn(src, dst)}
                                            id={colInd}/>
                                    </div> : <div/>
                            }
                        </div>
                    ))}
                </div>
                <div className="narrow-row">
                    {
                        this.state.bottomCards.map((cardList, index) => (
                            <div key={index} className={"solitaire-column"}>
                                {
                                    cardList.map((card, index) => (
                                        <div key={card['id']} className={"target-box"}>
                                            <Card deleteTargets={() => this.deleteTargets()}
                                                  createTargets={() => this.createTargets(card)}
                                                  id={card['id']}
                                                  item={card}
                                                  isHidden={this.isHiddenCard(card)}
                                                  value={card['value']}
                                                  color={card['color']}/>
                                        </div>
                                    ))
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
                    <div className={"card-deck"}>
                        {
                            this.state.restOfCardDeck.map((card, index) => (
                                <div key={card['id']} style={{zIndex: index + 1}} className={"card-in-deck-box"}>
                                    <Card deleteTargets={() => this.deleteTargets()}
                                          createTargets={() => this.createTargets(card)}
                                          id={card['id']}
                                          item={card}
                                          isHidden={this.isHiddenCard(card)}
                                          value={card['value']}
                                          color={card['color']}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    };


}

export default DragDropContext(HTML5Backend)(App);