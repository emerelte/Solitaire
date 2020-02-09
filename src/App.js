import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
import './style/App.css';
import './style/CardDeck.css';
import CardColumns from "./components/logical/TableauPiles";
import Foundations from "./components/logical/Foundations";
import TimeAndCounterIndicator from "./components/logical/TimeAndCounterIndicator";
import MyButton from "./components/MyButton";
import {connect} from "react-redux";
import GameStatusForm from "./GameStatusForm";
import {initGame} from "./actions";

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
                    <Foundations/>
                </div>
                <MyButton/>
            </div>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DragDropContext(HTML5Backend)(App));