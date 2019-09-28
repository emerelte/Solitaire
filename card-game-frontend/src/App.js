import React from 'react';
import './style/App.css';
import Card from "./Card";
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
import Target from "./Target";


class App extends React.Component {

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
        console.log('xd');
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
            targets: [{'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}]
        };
    }

    moveCard = (source, dest) => {
        this.setState(prevState => {
            return {
                columnsOfCards: prevState.columnsOfCards.map(k => k.filter(e => e.id !== source.id))
            }
        });
        this.setState(prevState => {
            prevState.columnsOfCards[dest].push(source);
            return {
                columnsOfCards: prevState.columnsOfCards
            }
        });
        this.deleteTargets();
    };

    createTargets = (cardId) => {
        let targets = this.state.columnsOfCards.map((item, index) => (
            item.length > 0 && item[item.length - 1].id !== cardId ? {'id': item[item.length - 1].id} : {'id': -1}
        ));
        this.setState(prevState => {
            return {
                targets: targets
            }
        })
    };

    deleteTargets = () => {
        this.setState(
            {'targets': [{'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}, {'id': -1}]}
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
                                          createTargets={() => this.createTargets(card.id)}
                                          id={card['id']}
                                          item={card}
                                          isHidden={this.isHiddenCard(card)}
                                          value={card['value']}
                                          color={card['color']}/>
                                </div>
                            ))}
                            {
                                this.state.targets[colInd]['id'] !== -1 ?
                                    <div className={"card-box"}>
                                        <Target
                                            showCardBehind={(card) => this.showCardBehind(card)}
                                            moveCard={(src, dst) => this.moveCard(src, dst)}
                                            id={colInd}/>
                                    </div> : <div/>
                            }
                        </div>
                    ))}
                </div>
                <div className="narrow-row">
                    <div className={"target-box"}>
                    </div>
                    <div className={"target-box"}>
                    </div>
                    <div className={"target-box"}>
                    </div>
                    <div className={"target-box"}>
                    </div>
                    <div className={"card-deck"}>
                        {
                            this.state.restOfCardDeck.map((card, index) => (
                                <div key={card['id']} style={{zIndex: index+1}} className={"card-in-deck-box"}>
                                    <Card deleteTargets={() => this.deleteTargets()}
                                          createTargets={() => this.createTargets(card.id)}
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