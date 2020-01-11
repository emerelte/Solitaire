import React from "react";
import CardStack from "./CardStack";
import Target from "./Target";
import {idOfEmptyTarget} from "./Constants.js";

export default class CardColumn extends React.Component {


    render() {
        return (
            <div className="row-with-card-columns">
                {this.props.gameManager.state.columnsOfCards.map((column, colInd) => (
                    <div key={colInd} style={{position: "relative", height: "0px"}}
                         className={"solitaire-column"}>
                        <CardStack
                            deleteTargets={() => this.props.gameManager.deleteTargets()}
                            createTargets={this.props.gameManager.createTargets}
                            cardsInColumn={column}/>
                        {
                            this.props.gameManager.state.columnTargets[colInd]['id'] !== idOfEmptyTarget ?
                                <div className={"card-box"}
                                     style={{
                                         position: "relative",
                                         top: "" + ((column.length - 1) * 9.8 * 15 / 100) + "vw"
                                     }}>
                                    <Target
                                        moveCard={(src, dst) => this.props.gameManager.moveCardsToDestColumn(src, dst)}
                                        id={colInd}/></div>
                                : <div/>
                        }
                    </div>
                ))}
            </div>
        );
    }
}