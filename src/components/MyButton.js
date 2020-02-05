import React from "react";
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import {addCard} from "../actions";

const MyButton = ({ dispatch }) => {
    return (<Button color="primary" onClick={e => {
        dispatch(addCard())
    }}>Default</Button>)
};

export default connect(
)(MyButton)