import React from 'react';
import '../../style/CardSide.css';
import CardColor from "./CardColor";
import CardValue from "./CardValue";


export default class CardSide extends React.Component {
    render = () => {
        return (
            <div className={"card-side-part"}>
                <CardValue value={this.props.value}/>
                <CardColor fontSize={'1.5vw'} shape={this.props.shape}/>
                <div className={"card-side-middle"}/>
                <CardColor fontSize={'1.5vw'} shape={this.props.shape}/>
                <CardValue value={this.props.value}/>
            </div>
        )
    }
}
