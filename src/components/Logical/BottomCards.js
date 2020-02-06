import React from "react";
import Target from "../../Target";
import CardDeck from "../../CardDeck";
import '../../style/BottomCards.css'
import '../../style/CardDeck.css'
import {idOfEmptyTarget} from "../../Constants";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    bottomCards: state.bottomCards
});

const bottomCards = ({bottomCards}) => {
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
            {/*<div onClick={this.props.gameManager.dealNextCards}>*/}
            {/*    <CardDeck className={"rest-of-cards"} cards={this.restOfCardDeck}/></div>*/}
        </div>)
};

export default connect(
    mapStateToProps
)(bottomCards)