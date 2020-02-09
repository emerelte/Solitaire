import React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types'
// import Target from "../../Target";
// import {idOfEmptyTarget} from "../../Constants.js";
// import {calculateTopPositionOfColumnTarget} from "../../HelperFunctions";
// import Card from "./Card";
// import {arrayOf} from "prop-types";
// import PropTypes from 'prop-types'
import CardStack from "./CardStack";
import {idOfEmptyTarget} from "../../Constants";
import {calculateTopPositionOfColumnTarget} from "../../HelperFunctions";
import Target from "../../Target";
import {createTargets, deleteTargets, moveCardBetweenPiles, moveCardToFoundations} from "../../actions";

const mapStateToProps = (state) => ({
    tableauPiles: state.cardsOnTheTable.tableauPiles,
    tableauTargets: state.cardsOnTheTable.tableauTargets
});

const mapDispatchToProps = (dispatch) => ({
    createTargets: (card) => dispatch(createTargets(card)),
    deleteTargets: () => dispatch(deleteTargets()),
    moveCardBetweenPiles: (card, dstPileIdx) => dispatch(moveCardBetweenPiles(card, dstPileIdx))
});

const TableauPiles = ({tableauPiles, tableauTargets, createTargets, deleteTargets, moveCardBetweenPiles}) => (
    <div className="row-with-card-columns">
        {tableauPiles.map((column, colInd) => (
            <div key={colInd} style={{position: "relative", height: "0px"}}
                 className={"solitaire-column"}>
        <CardStack
            deleteTargets={deleteTargets}
            createTargets={(card) => createTargets(card)}
            cardsInColumn={column}/>
        {
            tableauTargets[colInd]['id'] !== idOfEmptyTarget ?
                <div className={"card-box"}
                     style={{
                         position: "relative",
                         top: "" + calculateTopPositionOfColumnTarget(column.length) + "vw"
                     }}>
                    <Target
                        moveCard={(card, dstPileIdx) => moveCardBetweenPiles(card, dstPileIdx)}
                        id={colInd}/></div>
                : <div/>
        }
        </div>
        ))}
    </div>
);

TableauPiles.propTypes = {
    tableauPiles: PropTypes.arrayOf(PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string.isRequired,
            hidden: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
            value: PropTypes.number.isRequired
        }))),
    tableauTargets: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string.isRequired,
            hidden: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
            value: PropTypes.number.isRequired
        }))
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableauPiles)