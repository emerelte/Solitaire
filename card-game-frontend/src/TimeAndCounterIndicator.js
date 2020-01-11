import React from "react";
import './style/TimeAndCounterIndicator.css';
import {formatReadableTimeFromMiliseconds} from "./HelperFunctions";


export default class TimeAndCounterIndicator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            begTime: new Date().getTime(),
            curTime: null,
        };
    }

    render() {
        setInterval(function () {
            this.setState({curTime: new Date().getTime()});
        }.bind(this), 1000);
        const passedTime = new Date(this.state.curTime - this.state.begTime);
        return (
            <div className={"indicator"}>
                <div>{"Moves: " + this.props.movesCounter}</div>
                <div>{"Time: " + formatReadableTimeFromMiliseconds(passedTime)}</div>
            </div>
        );
    }

}