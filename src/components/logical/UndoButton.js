import React from "react";
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';

//TODO implement undoing
const UndoButton = ({dispatch}) => {
    return (<Button color="primary" onClick={e => {
    }}>Undo</Button>)
};

export default connect(
)(UndoButton)
