import React from "react";
import "./style/GameStatusForm.css";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const marks = [
    {
        value: 0,
        label: "easy",
    },
    {
        value: 1,
        label: "medium",
    },
    {
        value: 2,
        label: "hard",
    },
];

export default class GameStatusForm extends React.Component {
    constructor(props) {
        super(props);
        this.gameLevel = 1;
    }

    static propTypes = {
        notify: PropTypes.func.isRequired,
    };

    handleClick = () => {
        this.props.notify(this.gameLevel);
    };

    render = () => {
        return <div className={"central-div"}>
            <Typography id="discrete-slider" gutterBottom>
                Level
            </Typography>
            <Slider
                style={{
                    width: "10%",
                    left: "45%"
                }}
                onChange={ (e, val) => this.gameLevel = val }
                defaultValue={1}
                aria-labelledby="discrete-slider"
                step={1}
                marks={marks}
                max={2}
                valueLabelDisplay="off"
            />
            <Button style={{
                width: "10%",
                left: "45%"
            }}
                    onClick={this.handleClick}>
                Submit
            </Button>
        </div>
    };
}