import React from "react";
import Target from "./Target";
import CardDeck from "./CardDeck";
import './style/BottomCards.css'

export default class BottomCards extends React.Component {
    render() {
        return (
            <div className="bottom-cards">
                {
                    this.props.gameManager.state.bottomCards.map((cardList, index) => (
                        <div key={index} className={"card-box"}>
                            <CardDeck
                                cards={cardList}/>
                            <div style={{zIndex: 1}} key={index} className={"target-box"}>
                                <Target
                                    moveCard={(src, dst) => this.props.gameManager.moveCardToBottomColumnIfIsNextInOrder(src, dst)}
                                    id={index}/>
                            </div>
                        </div>))
                }
                <div onClick={this.props.gameManager.dealNextCards}>
                    <CardDeck cards={this.props.gameManager.state.restOfCardDeck} className={"card-deck"}/></div>
            </div>)
    }
}