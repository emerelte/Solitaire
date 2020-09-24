import React from "react";
import {connect} from "react-redux";
import PropTypes, {arrayOf} from "prop-types";
import Target from "./Target";
import {CardDeck} from "../presentional/CardDeck";
import {CardType, idOfInvalidTarget} from "../../Constants";
import {dealNextCards, moveCardToFoundation} from "../../actions";
import '../../style/BottomCards.css'
import '../../style/CardDeck.css'

const mapStateToProps = (state) => ({
    foundations: state.cardsOnTheTable.present.foundations,
    stock: state.cardsOnTheTable.present.stock,
    foundationsTargets: state.cardsOnTheTable.present.foundationsTargets
});

const mapDispatchToProps = (dispatch) => ({
    dealNextCards: () => dispatch(dealNextCards()),
    moveCardToFoundations: (src, dst) => dispatch(moveCardToFoundation(src, dst))
});

const FoundationsAndStock = ({foundations, stock, foundationsTargets, dealNextCards, moveCardToFoundations}) => {
    return (
        <div className="bottom-cards">
            {
                foundations.map((cardList, index) => (
                    <div key={index} className={"card-box"}>
                        <CardDeck
                            cards={cardList}/>
                        {
                            foundationsTargets[index]['id'] !== idOfInvalidTarget ?
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

FoundationsAndStock.propTypes = {
    foundations: PropTypes.arrayOf(PropTypes.arrayOf(arrayOf(CardType))).isRequired,
    stock: PropTypes.arrayOf(CardType).isRequired,
    foundationsTargets: PropTypes.arrayOf(CardType),
    dealNextCards: PropTypes.func.isRequired,
    moveCardToFoundations: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoundationsAndStock)