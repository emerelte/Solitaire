import React from "react";
// import Target from "../../Target";
// import {idOfEmptyTarget} from "../../Constants.js";
// import {calculateTopPositionOfColumnTarget} from "../../HelperFunctions";
// import Card from "./Card";
// import {arrayOf} from "prop-types";
// import PropTypes from 'prop-types'
import {connect} from "react-redux";
import CardStack from "./CardStack";
import {idOfEmptyTarget} from "../../Constants";
import {calculateTopPositionOfColumnTarget} from "../../HelperFunctions";
import Target from "../../Target";

const mapStateToProps = (state) => ({
    columnsOfCards: state.columnsOfCards,
    columnTargets: state.columnTargets
});

const CardColumns = ({columnsOfCards, columnTargets}) => (
    <div className="row-with-card-columns">
        {columnsOfCards.map((column, colInd) => (
            <div key={colInd} style={{position: "relative", height: "0px"}}
                 className={"solitaire-column"}>
        <CardStack
            deleteTargets={() => {}}
            createTargets={() => {}}
            cardsInColumn={column}/>
        {
            columnTargets[colInd]['id'] !== idOfEmptyTarget ?
                <div className={"card-box"}
                     style={{
                         position: "relative",
                         top: "" + calculateTopPositionOfColumnTarget(column.length) + "vw"
                     }}>
                    <Target
                        // moveCard={(src, dst) => this.props.gameManager.moveCardsToDestColumn(src, dst)}
                        moveCard={(src, dst) => {}}
                        id={colInd}/></div>
                : <div/>
        }
        </div>
        ))}
    </div>
);

// CardColumns.propTypes = {
//     columnsOfCards: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             completed: PropTypes.bool.isRequired
//         }).isRequired
//     ).isRequired
// };

export default connect(
    mapStateToProps
)(CardColumns)