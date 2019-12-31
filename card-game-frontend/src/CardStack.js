import React from 'react';
import './style/Card.css';
import Card from './Card.js'
import {DragSource} from "react-dnd";
import PropTypes from 'prop-types';

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

    findFontColor = () => {
        return this.props.cardsInColumn[0]['color'] === 'spades' || this.props.cardsInColumn[0]['color'] === 'clubs' ? 'black' : 'red';
    };

    constructor(props) {
        super(props);
        this.state = {
            column: this.props.cardsInColumn,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            column: nextProps.cardsInColumn
        });
    }

    isEmptyStack() {
        return this.state.column.length === 0;
    }

    render = () => {
        const {connectDragSource} = this.props;

        if (this.isEmptyStack()) {
            return <div style={{display: "none"}}/>;
        }

        let bottomCard = this.state.column[0];
        let fontCol = this.findFontColor();
        if (bottomCard.hidden)
            return <div style={{position: "absolute", top: "15%"}}>
                <Card fontCol={fontCol} isHidden={bottomCard.hidden} value={bottomCard.value} color={bottomCard.color}/>
                <DragItemContainer deleteTargets={() => this.props.deleteTargets()}
                                   createTargets={this.props.createTargets}
                                   cardsInColumn={this.state.column.slice(1, this.state.column.length)}/>
            </div>;
        else {
            return connectDragSource(
                <div style={{position: "absolute", top: "15%"}}>
                    <Card fontCol={fontCol} isHidden={bottomCard.hidden} value={bottomCard.value} color={bottomCard.color}/>
                    <DragItemContainer deleteTargets={() => this.props.deleteTargets()}
                                       createTargets={this.props.createTargets}
                                       cardsInColumn={this.state.column.slice(1, this.state.column.length)}/>
                </div>);
        }
    };
}

export default DragSource('item', itemSource, collect)(CardStack)

const DragItemContainer = DragSource('item', itemSource, collect)(CardStack);