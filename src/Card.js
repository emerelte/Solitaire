import React from 'react';
import './style/Card.css';
import CardMiddle from './CardMiddle.js'
import CardSide from "./CardSide";
import {findFontColor} from "./HelperFunctions"

export default class Card extends React.Component {

    render = () => {
        if (this.props.card.hidden)
            return <div style={{color: findFontColor(this.props.card)}}
                        className={"card back"}>
            </div>;
        else
            return <div style={{color: findFontColor(this.props.card)}}
                        className={"card"}>
                <CardSide value={this.props.card.value} color={this.props.card.color}/>
                <CardMiddle value={this.props.card.value} color={this.props.card.color}/>
                <CardSide value={this.props.card.value} color={this.props.card.color}/>
            </div>;
    }
}
