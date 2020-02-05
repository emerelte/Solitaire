import React from "react";
import CardStack from "../CardStack";
import Target from "../Target";
import {idOfEmptyTarget} from "../Constants.js";
import {calculateTopPositionOfColumnTarget} from "../HelperFunctions";
import Card from "./Card";
import {arrayOf} from "prop-types";
import PropTypes from 'prop-types'


const CardColumns = ({columnsOfCards}) => (
    <div className="row-with-card-columns">
        <ul>
            {columnsOfCards.map(card => (
                <Card card={card}/>
            ))}</ul>
        {/*{columnsOfCards.map((column, colInd) => (*/}
        {/*    <div key={colInd} style={{position: "relative", height: "0px"}}*/}
        {/*         className={"solitaire-column"}>*/}
        {/*<CardStack*/}
        {/*    deleteTargets={() => this.props.gameManager.deleteTargets()}*/}
        {/*    createTargets={this.props.gameManager.createTargets}*/}
        {/*    cardsInColumn={column}/>*/}
        {/*{*/}
        {/*    this.props.gameManager.state.columnTargets[colInd]['id'] !== idOfEmptyTarget ?*/}
        {/*        <div className={"card-box"}*/}
        {/*             style={{*/}
        {/*                 position: "relative",*/}
        {/*                 top: "" + calculateTopPositionOfColumnTarget(column.length) + "vw"*/}
        {/*             }}>*/}
        {/*            <Target*/}
        {/*                moveCard={(src, dst) => this.props.gameManager.moveCardsToDestColumn(src, dst)}*/}
        {/*                id={colInd}/></div>*/}
        {/*        : <div/>*/}
        {/*}*/}
        {/*</div>*/}
        {/*))}*/}
    </div>
);

CardColumns.propTypes = {
    columnsOfCards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
};

export default CardColumns