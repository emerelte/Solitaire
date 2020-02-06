import React from "react";
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import {initGame} from "../actions";
import {initializeGame} from "../HelperFunctions";

const MyButton = ({ dispatch }) => {
    return (<Button color="primary" onClick={e => {
        const gameLevel = 1;
        const dealedCards = initializeGame(gameLevel);
        dispatch(initGame(gameLevel, dealedCards.colOfCards, dealedCards.restOfCards))
    }}>Start game</Button>)
};

export default connect(
)(MyButton)