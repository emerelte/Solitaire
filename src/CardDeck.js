import React from 'react';
import './style/CardSide.css';
import Card from "./components/Card.js";

export default class CardDeck extends React.Component {

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
