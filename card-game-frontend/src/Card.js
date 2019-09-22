import React from 'react';
import './style/Card.css';
import CardMiddle from './CardMiddle.js'
import CardSide from "./CardSide";

export default class Card extends React.Component {
    state = {
        fontCol: 'black',
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
        switch (this.props.color) {
            case "spades":
            case "clubs":
                this.state.fontCol = 'black';
                break;
            case "diams":
            case "hearts":
                this.state.fontCol = 'red';
                break;
            default:
                this.state.fontCol = 'black';
        }
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
