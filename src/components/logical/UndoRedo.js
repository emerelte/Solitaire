import React from "react";
import {connect} from 'react-redux'
import {ActionCreators as UndoActionCreators} from 'redux-undo'


let UndoRedo = ({canUndo, canRedo, onUndo, onRedo}) => (
    <p>
        <button onClick={onUndo} disabled={!canUndo}>
            Undo
        </button>
        <button onClick={onRedo} disabled={!canRedo}>
            Redo
        </button>
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
