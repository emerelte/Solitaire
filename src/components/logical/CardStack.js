import React from 'react';
import {DragSource} from "react-dnd";
import PropTypes from 'prop-types';
import Card from '../presentional/Card.js'
import {areCardsInRightOrder, showCard} from '../../HelperFunctions'
import '../../style/Card.css';
import {CardType} from "../../Constants";
import '../../style/CardStack.css';

const itemSource = {
    beginDrag(props) {
        props.createTargets(props.cardsInStack[0]);
        return props.cardsInStack[0];
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
        deleteTargets: PropTypes.func.isRequired,
        cardsInStack: PropTypes.arrayOf(CardType).isRequired
    };

    isEmptyStack() {
        return this.props.cardsInStack.length === 0;
    }

    isStackOfOneCard() {
        return this.props.cardsInStack.length === 1;
    }

    render = () => {
        const {connectDragSource} = this.props;

        if (this.isEmptyStack()) {
            return <div style={{display: "none"}}/>;
        }

        let bottomCard = this.props.cardsInStack[0];

        if (this.isStackOfOneCard())
            showCard(bottomCard);

        if (bottomCard.hidden)
            return <div className={"card-in-stack"}>
                <Card card={bottomCard}/>
                <DragItemContainer deleteTargets={() => this.props.deleteTargets()}
                                   createTargets={this.props.createTargets}
                                   cardsInStack={this.props.cardsInStack.slice(1, this.props.cardsInStack.length)}/>
            </div>;
        else {
            if (areCardsInRightOrder(this.props.cardsInStack))
                return connectDragSource(
                    <div className={"draggable card-in-stack"}>
                        <Card card={bottomCard}/>
                        <DragItemContainer deleteTargets={() => this.props.deleteTargets()}
                                           createTargets={this.props.createTargets}
                                           cardsInStack={this.props.cardsInStack.slice(1, this.props.cardsInStack.length)}/>
                    </div>);
            else {
                return <div className={"card-in-stack"}>
                    <Card card={bottomCard}/>
                    <DragItemContainer deleteTargets={() => this.props.deleteTargets()}
                                       createTargets={this.props.createTargets}
                                       cardsInStack={this.props.cardsInStack.slice(1, this.props.cardsInStack.length)}/>
                </div>
            }
        }
    };
}

export default DragSource('item', itemSource, collect)(CardStack)

const DragItemContainer = DragSource('item', itemSource, collect)(CardStack);
