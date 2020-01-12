import React from 'react';
import './style/CardSide.css';
import Card from "./Card.js";

export default class CardDeck extends React.Component {

    state = {
        cards: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            cards: this.props.cards,
        }
    }

    render = () => {
        return (
            <div className={"card-deck " + this.props.className}>
                {
                    this.props.cards.map((card, index) => (
                        <div key={card['id']} style={{zIndex: index + 1}}
                             className={"card-in-deck-box"}>
                            <Card card={card}/>
                        </div>
                    ))
                }
            </div>
        )
    };
}
