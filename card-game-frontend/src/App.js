import React from 'react';
import './style/App.css';
import Card from "./Card";


function App() {
    const elements = [{'color': 'clubs', 'value': 1}];
    const items = [];
    for (const [index, card] of elements.entries()) {
        items.push(<div className={"solitaire-column"}>
            <div style={{height: '20px'}}>
                <Card hidden={true} value={card['value']} color={card['color']}/>
            </div>
            <div style={{height: '20px'}}>
                <Card hidden={true} value={2} color={"clubs"}/>
            </div>
            <div style={{height: '20px'}}>
                <Card hidden={true} value={3} color={"clubs"}/>
            </div>
            <div style={{height: '20px'}}>
                <Card value={4} color={"clubs"}/>
            </div>
        </div>)
    }
    return (
        <div className="card-game-table">
            <div className="wide-row">
                {items}
            </div>
            <div className="narrow-row">
            </div>
        </div>
    );
}

export default App;
