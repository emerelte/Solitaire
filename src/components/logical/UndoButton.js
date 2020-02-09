import React from "react";
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import {initGame} from "../../actions";
import {initializeGame} from "../../HelperFunctions";

//TODO implement undoing
const UndoButton = ({ dispatch }) => {
    return (<Button color="primary" onClick={e => {
        const gameLevel = 1;
        const cards = initializeGame(gameLevel);
        dispatch(initGame(gameLevel, cards.tableauPiles, cards.stock))
    }}>Undo</Button>)
};

export default connect(
)(UndoButton)
