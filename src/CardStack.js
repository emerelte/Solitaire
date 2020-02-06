import React from 'react';
import './style/Card.css';
import Card from './components/Presentional/Card.js'
import {DragSource} from "react-dnd";
import PropTypes from 'prop-types';
import {areCardsInRightOrder, showCard} from './HelperFunctions'

const itemSource = {
    beginDrag(props) {
        props.createTargets(props.cardsInColumn[0]);
        return props.cardsInColumn[0];
    },
    endDrag(props) {
        props.deleteTargets();
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

class CardStack extends React.Component {

    static propTypes = {
        createTargets: PropTypes.func.isRequired,
        deleteTargets: PropTypes.func.isRequired
    };

    isEmptyStack() {
        return this.props.cardsInColumn.length === 0;
    }

    render = () => {
        const {connectDragSource} = this.props;

        if (this.isEmptyStack()) {
            return <div style={{display: "none"}}/>;
        }

        let bottomCard = this.props.cardsInColumn[0];
        if (this.isLastCardInStack())
            showCard(bottomCard);
        if (bottomCard.hidden)
            return <div style={{position: "absolute", top: "15%"}}>
                <Card card={bottomCard}/>
                <DragItemContainer deleteTargets={() => this.props.deleteTargets()}
                                   createTargets={this.props.createTargets}
                                   cardsInColumn={this.props.cardsInColumn.slice(1, this.props.cardsInColumn.length)}/>
            </div>;
        else {
            if (areCardsInRightOrder(this.props.cardsInColumn))
                return connectDragSource(
                    <div className={"draggable"} style={{position: "absolute", top: "15%"}}>
                        <Card card={bottomCard}/>
                        <DragItemContainer deleteTargets={() => this.props.deleteTargets()}
                                           createTargets={this.props.createTargets}
                                           cardsInColumn={this.props.cardsInColumn.slice(1, this.props.cardsInColumn.length)}/>
                    </div>);
            else {
                return <div style={{position: "absolute", top: "15%"}}>
                    <Card card={bottomCard}/>
                    <DragItemContainer deleteTargets={() => this.props.deleteTargets()}
                                       createTargets={this.props.createTargets}
                                       cardsInColumn={this.props.cardsInColumn.slice(1, this.props.cardsInColumn.length)}/>
                </div>
            }
        }
    };

    isLastCardInStack() {
        return this.props.cardsInColumn.length === 1;
    }
}

export default DragSource('item', itemSource, collect)(CardStack)

const DragItemContainer = DragSource('item', itemSource, collect)(CardStack);