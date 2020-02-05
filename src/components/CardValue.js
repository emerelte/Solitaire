import React from 'react';
import '../style/CardValue.css';
import {convertValueOfCardToDisplayedSymbol} from "../HelperFunctions";


export default class CardValue extends React.Component {

    render = () => {
        return (<div className={"card-value"}><span
            className={"span-middle"}>{convertValueOfCardToDisplayedSymbol(this.props.value)}</span></div>)
    }
}
