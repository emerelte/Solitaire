import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {formatReadableTimeFromMs} from "../../HelperFunctions";
import '../../style/TimeAndCounterIndicator.css';

const mapStateToProps = (state) => ({
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
                <div>{"Time: " + formatReadableTimeFromMs(passedTime)}</div>
            </div>
        </div>
    );
};

TimeAndCounterIndicator.propTypes = {
    begTime: PropTypes.number.isRequired,
    curTime: PropTypes.number.isRequired,
    movesDone: PropTypes.number.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeAndCounterIndicator)
