import React from "react";
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import {initGame} from "../actions";
import {initializeGame} from "../HelperFunctions";

const MyButton = ({ dispatch }) => {
    return (<Button color="primary" onClick={e => {
        const dealedCards = initializeGame(1); // todo name
        dispatch(initGame(dealedCards.colOfCards, dealedCards.restOfCards))
    }}>Default</Button>)
};

export default connect(
)(MyButton)