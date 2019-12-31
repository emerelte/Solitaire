import React from 'react';
import './style/CardSide.css';
import CardColor from "./CardColor";
import CardValue from "./CardValue";
import Card from "./CardStack";
import {isHiddenCard} from "./HelperFunctions";


export default class CardDeck extends React.Component {

    state = {
        hiddenCards: [],
        shownCards: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            hiddenCards: this.props.hiddenCards,
            shownCards: []
        }
    }

    render = () => {
        return (
            <div className={"card-deck"}>
                {
                    this.props.hiddenCards.map((card, index) => (
                        <div onClick={this.showNextCard} key={card['id']} style={{zIndex: index + 1}}
                             className={"card-in-deck-box"}>
                            <Card deleteTargets={() => this.deleteTargets()}
                                  createTargets={() => this.createTargets(card)}
                                  id={card['id']}
                                  item={card}
                                  isHidden={isHiddenCard(card)}
                                  value={card['value']}
                                  color={card['color']}/>
                        </div>
                    ))
                }
            </div>
        )
    };

    showNextCard = () => {
        this.setState(prevState => {
            return {
                hiddenCards: prevState.hiddenCards,
                shownCards: prevState.shownCards.append(prevState.hiddenCards.first)
            }
        });
        console.log(this.state.hiddenCards);
        console.log(this.state.shownCards);
    };
}
