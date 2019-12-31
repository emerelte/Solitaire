import React from 'react';
import './style/Card.css';
import CardMiddle from './CardMiddle.js'
import CardSide from "./CardSide";

export default class Card extends React.Component {
    render = () => {
        if (this.props.isHidden)
            return <div style={{color: this.props.fontCol}}
                        className={"card back"}>
            </div>;
        else
            return <div style={{color: this.props.fontCol}}
                        className={"card draggable"}>
                <CardSide value={this.props.value} color={this.props.color}/>
                <CardMiddle value={this.props.value} color={this.props.color}/>
                <CardSide value={this.props.value} color={this.props.color}/>
            </div>;
    }
}
