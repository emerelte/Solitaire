import React from "react";
import './style/TimeAndCounterIndicator.css';
import {formatReadableTimeFromMiliseconds} from "./HelperFunctions";


export default class TimeAndCounterIndicator extends React.Component {

    render() {
        const passedTime = new Date(this.props.curTime - this.props.begTime);
        return (
            <div className={"indicator-positioner"}>
                <div className={"indicator"}>
                    <div>{"Moves: " + this.props.movesCounter}</div>
                    <div>{"Time: " + formatReadableTimeFromMiliseconds(passedTime)}</div>
                </div>
            </div>
        );
    }

}