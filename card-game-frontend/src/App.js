import React from 'react';
import './style/App.css';
import Card from "./Card";
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'


class App extends React.Component {

    createCardDeck = () => {
        let cardDeck = [];
        const listOfColors = ['spades', 'clubs', 'hearts', 'diams'];
        let i=0;
        for (const color of listOfColors) {
            for (let val = 1; val < 14; ++val) {
                cardDeck.push({'color': color, 'value': val, 'id': i});
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

    createSolitaireColumns = () => {
        let cardDeck = this.createCardDeck();
        cardDeck = this.shuffleArray(cardDeck);
        let cardsPlacedInColumns = cardDeck.slice(0, 7 * 4);
        let colOfCards = [];
        for (let i = 0; i < 7; ++i) {
            let cardsInColumn = cardsPlacedInColumns.slice(i * 4, (i + 1) * 4);
            colOfCards.push(cardsInColumn);
        }
        return colOfCards;
    };

    state = {
        columnsOfCards: this.createSolitaireColumns()
    };

    deleteItem = id => {
        this.setState(prevState => {
            return {
                columnsOfCards: prevState.columnsOfCards.filter(item => item.id !== id)
            }
        })
    };

    render = () => {
        return (
            <div className="card-game-table">
                <div className="wide-row">
                    {this.state.columnsOfCards.map((item, index) => (
                        <div key={index} className={"solitaire-column"}>
                            {item.map((item, index) => (
                                <div key = {item['id']} className={"card-box"}>
                                    <Card item={item} handleDrop={(id) => this.deleteItem(id)} hidden={false} value={item['value']}
                                          color={item['color']}/>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="narrow-row">
                    <Card/>
                </div>
            </div>
        );
    };
}

export default DragDropContext(HTML5Backend)(App);