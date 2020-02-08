import React from "react";
import {connect} from "react-redux";

import Target from "../../Target";
import {CardDeck} from "../presentional/CardDeck";
import '../../style/BottomCards.css'
import '../../style/CardDeck.css'
import {idOfEmptyTarget} from "../../Constants";

const mapStateToProps = (state) => ({
    foundations: state.cardsOnTheTable.foundations,
    stock: state.cardsOnTheTable.stock
});

const foundations = ({foundations, stock}) => {
    return (
        <div className="bottom-cards">
            {
                foundations.map((cardList, index) => (
                    <div key={index} className={"card-box"}>
                        <CardDeck
                            cards={cardList}/>
                        {
                            foundations[index]['id'] !== idOfEmptyTarget ?
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
                <CardDeck cards={stock} className={"rest-of-cards"}/></div>
        </div>)
};

export default connect(
    mapStateToProps
)(foundations)