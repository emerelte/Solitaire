import React from "react";
import {connect} from "react-redux";

import Target from "../../Target";
import {CardDeck} from "../presentional/CardDeck";
import '../../style/BottomCards.css'
import '../../style/CardDeck.css'
import {idOfEmptyTarget} from "../../Constants";

const mapStateToProps = (state) => ({
    bottomCards: state.bottomCards,
    restOfCardDeck: state.restOfCardDeck
});

const bottomCards = ({bottomCards, restOfCardDeck}) => {
    return (
        <div className="bottom-cards">
            {
                bottomCards.map((cardList, index) => (
                    <div key={index} className={"card-box"}>
                        <CardDeck
                            cards={cardList}/>
                        {
                            bottomCards[index]['id'] !== idOfEmptyTarget ?
                                <div className={"target-box"} key={index}>
                                    <Target
                                        // moveCard={(src, dst) => this.props.gameManager.moveCardToBottomColumn(src, dst)}
                                        moveCard={(src, dst) => () => {}} // todo add functionality
                                        id={index}/>
                                </div> : <div/>
                        }
                    </div>))
            }
            <div>
                <CardDeck cards={restOfCardDeck} className={"rest-of-cards"}/></div>
        </div>)
};

export default connect(
    mapStateToProps
)(bottomCards)