import React from 'react';
import './style/CardSide.css';
import Card from "./components/Presentional/Card.js";
import {connect} from "react-redux";
import restOfCardDeck from "./reducers/restOfCardDeck";

// const mapStateToProps = (state) => ({
//     restOfCardDeck: state.restOfCardDeck
// });

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

// export default connect(
//     mapStateToProps,
// )(CardDeck)
