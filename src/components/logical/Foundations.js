import React from "react";
import {connect} from "react-redux";

import Target from "../../Target";
import {CardDeck} from "../presentional/CardDeck";
import '../../style/BottomCards.css'
import '../../style/CardDeck.css'
import {idOfEmptyTarget} from "../../Constants";
import {dealNextCards, moveCardToFoundations} from "../../actions";

const mapStateToProps = (state) => ({
    foundations: state.cardsOnTheTable.foundations,
    stock: state.cardsOnTheTable.stock,
    foundationsTargets: state.cardsOnTheTable.foundationsTargets
});

const mapDispatchToProps = (dispatch) => ({
    dealNextCards: () => dispatch(dealNextCards()),
    moveCardToFoundations: (src, dst) => dispatch(moveCardToFoundations(src, dst))
});

const Foundations = ({foundations, stock, foundationsTargets, dealNextCards, moveCardToFoundations}) => {
    return (
        <div className="bottom-cards">
            {
                foundations.map((cardList, index) => (
                    <div key={index} className={"card-box"}>
                        <CardDeck
                            cards={cardList}/>
                        {
                            foundationsTargets[index]['id'] !== idOfEmptyTarget ?
                                <div className={"target-box"} key={index}>
                                    <Target
                                        moveCard={(src, dst) => moveCardToFoundations(src, dst)}
                                        id={index}/>
                                </div> : <div/>
                        }
                    </div>))
            }
            <div onClick={dealNextCards}>
                <CardDeck cards={stock} className={"rest-of-cards"}/></div>
        </div>)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Foundations)