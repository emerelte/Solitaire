import React from 'react';
import './style/App.css';
import Card from "./Card";


function App() {
    return (
        <div className="card-game-table">
            <div className="narrow-row">
                <div className="column narrow-column">
                </div>
                <div className="horizontal-player-part">
                    <Card value={1} color={"clubs"}/>
                    <Card value={2} color={"clubs"}/>
                    <Card value={3} color={"clubs"}/>
                    <Card value={4} color={"clubs"}/>
                    <Card value={5} color={"clubs"}/>
                    <Card value={6} color={"clubs"}/>
                    <Card value={7} color={"clubs"}/>
                    <Card value={8} color={"clubs"}/>
                </div>
                <div className="narrow-column"></div>
            </div>
            <div className="wide-row">
                <div className="vertical-player-part"></div>
                <div className="middle-part">
                </div>
                <div className="vertical-player-part"></div>
            </div>
            <div className="narrow-row">
                <div className="narrow-column"></div>
                <div className="horizontal-player-part">
                    <Card value={10} color={"clubs"}/>
                    <Card value={11} color={"clubs"}/>
                    <Card value={12} color={"clubs"}/>
                    <Card value={13} color={"clubs"}/>
                </div>
                <div className="narrow-column"></div>
            </div>
        </div>
    );
}

export default App;
