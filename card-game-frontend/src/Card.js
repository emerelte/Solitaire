import React from 'react';
import './style/Card.css';
import CardMiddle from './CardMiddle.js'
import CardSide from "./CardSide";
import {findFontColor} from "./HelperFunctions"

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: props.card,
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.card !== state.card) {
            return {
                card: props.card
            };
        }
        return null;
    }

    render = () => {
        if (this.state.card.hidden)
            return <div style={{color: findFontColor(this.state.card)}}
                        className={"card back"}>
            </div>;
        else
            return <div style={{color: findFontColor(this.state.card)}}
                        className={"card"}>
                <CardSide value={this.state.card.value} color={this.state.card.color}/>
                <CardMiddle value={this.state.card.value} color={this.state.card.color}/>
                <CardSide value={this.state.card.value} color={this.state.card.color}/>
            </div>;
    }
}
