import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
import {connect} from "react-redux";
import CardColumns from "./components/logical/TableauPiles";
import FoundationsAndStock from "./components/logical/FoundationsAndStock";
import TimeAndCounterIndicator from "./components/logical/TimeAndCounterIndicator";
import UndoButton from "./components/logical/UndoButton";
import GameStatusForm from "./components/logical/GameStatusForm";
import {initGame} from "./actions";
import './style/App.css';
import './style/CardDeck.css';

const mapStateToProps = (state) => ({
    hasGameStarted: state.hasGameStarted
});

const mapDispatchToProps = (dispatch) => ({
    initGame: (gameLevel, tableauPiles, stock) => dispatch(initGame(gameLevel, tableauPiles, stock))
});

const App = ({hasGameStarted, initGame}) => {
    //TODO start timer when the game begins
    // if (this.state.hasGameStarted) {
    //     setInterval(function () {
    //         this.setState({curTime: new Date().getTime()});
    //     }.bind(this), 1000);
    // }
    return (
        !hasGameStarted ?
            <GameStatusForm notify={(gameLevel, tableauPiles, stock) => initGame(gameLevel, tableauPiles, stock)}/> :
            <div className="card-game-table">
                <CardColumns/>
                <div className="bottom-row" style={{position: "relative", bottom: "20px"}}>
                    <TimeAndCounterIndicator/>
                    <FoundationsAndStock/>
                </div>
                <UndoButton/>
            </div>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DragDropContext(HTML5Backend)(App));
