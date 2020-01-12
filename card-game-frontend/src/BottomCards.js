import React from "react";
import Target from "./Target";
import CardDeck from "./CardDeck";
import './style/BottomCards.css'
import './style/CardDeck.css'
import {idOfEmptyTarget} from "./Constants";

export default class BottomCards extends React.Component {
    render() {
        return (
            <div className="bottom-cards">
                {
                    this.props.gameManager.state.bottomCards.map((cardList, index) => (
                        <div key={index} className={"card-box"}>
                            <CardDeck
                                cards={cardList}/>
                            {
                                this.props.gameManager.state.bottomTargets[index]['id'] !== idOfEmptyTarget ?
                                    <div className={"target-box"} key={index}>
                                        <Target
                                            moveCard={(src, dst) => this.props.gameManager.moveCardToBottomColumn(src, dst)}
                                            id={index}/>
                                    </div> : <div/>
                            }
                        </div>))
                }
                <div onClick={this.props.gameManager.dealNextCards}>
                    <CardDeck className={"rest-of-cards"} cards={this.props.gameManager.state.restOfCardDeck}/></div>
            </div>)
    }
}