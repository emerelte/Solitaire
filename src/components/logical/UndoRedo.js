import React from "react";
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {ActionCreators as UndoActionCreators} from 'redux-undo'


let UndoRedo = ({canUndo, canRedo, onUndo, onRedo}) => (
    <p>
        <Button onClick={onUndo} disabled={!canUndo}>
            Undo
        </Button>
        <Button onClick={onRedo} disabled={!canRedo}>
            Redo
        </Button>
    </p>
)

const mapStateToProps = state => {
    return {
        canUndo: state.cardsOnTheTable.past.length > 0,
        canRedo: state.cardsOnTheTable.future.length > 0
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUndo: () => dispatch(UndoActionCreators.undo()),
        onRedo: () => dispatch(UndoActionCreators.redo())
    }
}

UndoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedo)

export default UndoRedo
