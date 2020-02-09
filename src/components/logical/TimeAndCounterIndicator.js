import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {formatReadableTimeFromMs} from "../../HelperFunctions";
import {updateTimer} from "../../actions";
import '../../style/TimeAndCounterIndicator.css';

const mapStateToProps = (state) => ({
    begTime: state.counter.begTime,
    passedTime: state.counter.passedTime,
    movesDone: state.counter.movesDone
});

const mapDispatchToProps = (dispatch) => ({
    updateTimer: () => dispatch(updateTimer())
});

class TimeAndCounterIndicator extends React.Component {
    componentDidMount = () => {
        setInterval(
            () => {
                this.props.updateTimer()
            }, 1000);
    };

    componentWillUnmount() {
        clearInterval();
    }

    render() {
        return (
            <div className={"indicator-positioner"}>
                <div className={"indicator"}>
                    <div>{"Moves: " + this.props.movesDone}</div>
                    <div>{"Time: " + formatReadableTimeFromMs(this.props.passedTime)}</div>
                </div>
            </div>
        );
    }
}

TimeAndCounterIndicator.propTypes = {
    begTime: PropTypes.number.isRequired,
    curTime: PropTypes.number.isRequired,
    movesDone: PropTypes.number.isRequired,
    updateTimer: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeAndCounterIndicator)
