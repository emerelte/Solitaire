import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import {initializeGame} from "../../HelperFunctions";
import "../../style/GameStatusForm.css";

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
        const dealedCards = initializeGame(this.gameLevel);
        this.props.notify(this.gameLevel, dealedCards.tableauPiles, dealedCards.stock);
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
                onChange={(e, val) => this.gameLevel = val}
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
                Play
            </Button>
        </div>
    };
}
