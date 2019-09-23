import React from 'react';
import './style/Card.css';
import CardMiddle from './CardMiddle.js'
import CardSide from "./CardSide";

export default class Card extends React.Component {
    findFontColor = (color) => {
        return this.props.color === 'spades' || this.props.color === 'clubs' ? 'black' : 'red';
    };

    state = {
        fontCol: this.findFontColor(this.props.color),
        hidden: this.props.hidden
    };

    flipCard = () => {
        const currState = this.state.hidden;
        this.setState({'hidden': !currState});
    };

    hideCard = () => {
        this.setState({'hidden': true});
    };

    render = () => {
        if (this.state.hidden)
            return <div style={{color: this.state.fontCol}}
                        className={"card back"}>
            </div>;
        else
            return <div style={{color: this.state.fontCol}}
                        className={"card"}>
                <CardSide value={this.props.value} color={this.props.color}/>
                <CardMiddle value={this.props.value} color={this.props.color}/>
                <CardSide value={this.props.value} color={this.props.color}/>
            </div>;
    }
}
