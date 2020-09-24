import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
import {connect} from "react-redux";
import CardColumns from "./components/logical/TableauPiles";
import FoundationsAndStock from "./components/logical/FoundationsAndStock";
import TimeAndCounterIndicator from "./components/logical/TimeAndCounterIndicator";
import UndoRedo from "./components/logical/UndoRedo";
import MenuButton from "./components/logical/MenuButton";
import GameStatusForm from "./components/logical/GameStatusForm";
import {goToMenu, initGame} from "./actions";
import './style/App.css';
import './style/CardDeck.css';
import {ActionCreators as UndoActionCreators} from 'redux-undo'


const mapStateToProps = (state) => ({
    hasGameStarted: state.hasGameStarted
});

const mapDispatchToProps = (dispatch) => ({
    initGame: (gameLevel, tableauPiles, stock) => {
        dispatch(initGame(gameLevel, tableauPiles, stock));
        dispatch(UndoActionCreators.clearHistory())
    },
    goToMenu: () => dispatch(goToMenu())
});

const App = ({hasGameStarted, initGame, goToMenu}) => {
    return (
        !hasGameStarted ?
            <GameStatusForm notify={(gameLevel, tableauPiles, stock) => initGame(gameLevel, tableauPiles, stock)}/> :
            <div className="card-game-table">
                <CardColumns/>
                <div className="bottom-row" style={{position: "relative", bottom: "20px"}}>
                    <TimeAndCounterIndicator/>
                    <FoundationsAndStock/>
                </div>
                <div>
                    <MenuButton goToMenuCallback={() => goToMenu()}/>
                    <UndoRedo/>
                </div>
            </div>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DragDropContext(HTML5Backend)(App));
