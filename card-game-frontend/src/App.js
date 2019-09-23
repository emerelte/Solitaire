import React from 'react';
import './style/App.css';
import Card from "./Card";


export default class App extends React.Component {

    createCardDeck = () => {
        let cardDeck = [];
        const listOfColors = ['spades', 'clubs', 'hearts', 'diams'];
        for (const color of listOfColors) {
            for (let val = 1; val < 14; ++val) {
                cardDeck.push({'color': color, 'value': val});
            }
        }
        return cardDeck;
    };

    shuffle = (a) => {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    };

    createSolitaireColumns() {
        let cardDeck = this.createCardDeck();
        cardDeck = this.shuffle(cardDeck);
        let cardsPlacedInColumns = cardDeck.slice(0,7*4);
        const elements = [];
        for (let i=0; i<7; ++i) {
            let cardsInColumn = cardsPlacedInColumns.slice(i*4, (i+1)*4);
            elements.push(cardsInColumn);
        }
        const solitaireColumns = [];
        for (const [colIndex, solitaire_column] of elements.entries()) {
            const innItem = [];
            for (const [cardIndex, card] of solitaire_column.entries()) {
                if (cardIndex === solitaire_column.length - 1)
                    innItem.push(<div key={10*colIndex + cardIndex} style={{height: '20px'}}>
                        <Card hidden={false} value={card['value']} color={card['color']}/>
                    </div>);
                else
                    innItem.push(<div key={10*colIndex + cardIndex} style={{height: '20px'}}>
                        <Card hidden={false} value={card['value']} color={card['color']}/>
                    </div>);
            }
            solitaireColumns.push(<div key={colIndex} className={"solitaire-column"}>{innItem}</div>);
        }
        return solitaireColumns;
    }

    render = () => {
        const solitaireColumns = this.createSolitaireColumns();
        return (
            <div className="card-game-table">
                <div className="wide-row">
                    {solitaireColumns}
                </div>
                <div className="narrow-row">
                </div>
            </div>
        );
    };
}
