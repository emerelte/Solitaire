import React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import CardStack from "./CardStack";
import {CardType, idOfInvalidTarget} from "../../Constants";
import {calculatePositionOfColumnTarget} from "../../HelperFunctions";
import Target from "./Target";
import {createTargets, deleteTargets, moveCardBetweenPiles} from "../../actions";

const mapStateToProps = (state) => ({
    tableauPiles: state.cardsOnTheTable.present.tableauPiles,
    tableauTargets: state.cardsOnTheTable.present.tableauTargets
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
                    cardsInStack={column}/>
                {
                    tableauTargets[colInd]['id'] !== idOfInvalidTarget ?
                        <div className={"card-box"}
                             style={{
                                 position: "relative",
                                 top: calculatePositionOfColumnTarget(column.length)
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
    tableauPiles: PropTypes.arrayOf(PropTypes.arrayOf(CardType)),
    tableauTargets: PropTypes.arrayOf(CardType),
    createTargets: PropTypes.func.isRequired,
    deleteTargets: PropTypes.func.isRequired,
    moveCardBetweenPiles: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableauPiles)