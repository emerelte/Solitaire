import React from "react";
import '../../style/TimeAndCounterIndicator.css';
import {formatReadableTimeFromMiliseconds} from "../../HelperFunctions";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => ({
    begTime: state.counter.begTime,
    curTime: state.counter.curTime,
    movesDone: state.counter.movesDone
});

//todo set interval
const mapDispatchToProps = (dispatch, ownProps) => ({
    // setInterval(() => {
    //     console.log(interval);
    // }, 3000);
});

const TimeAndCounterIndicator = ({begTime, curTime, movesDone}) => {
    const passedTime = new Date(curTime - begTime);
    return (
        <div className={"indicator-positioner"}>
            <div className={"indicator"}>
                <div>{"Moves: " + movesDone}</div>
                <div>{"Time: " + formatReadableTimeFromMiliseconds(passedTime)}</div>
            </div>
        </div>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeAndCounterIndicator)