import React from 'react';
import '../../style/CardSide.css';
import Card from "../presentional/Card.js";

export const CardDeck = ({cards, className}) => {
    return (
        <div className={"card-deck " + className}>
            {
                cards.map((card, index) => (
                    <div key={card['id']} style={{zIndex: index + 1}}
                         className={"card-in-deck-box"}>
                        <Card card={card}/>
                    </div>
                ))
            }
        </div>
    )
};
