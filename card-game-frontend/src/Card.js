import React from 'react';
import './style/Card.css';
import CardMiddle from './CardMiddle.js'
import CardSide from "./CardSide";
import {DragSource} from "react-dnd";

const itemSource = {
    beginDrag(props) {
        console.log('dragging');
        return props.item;
    },
    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }

        return props.handleDrop(props.item.id);
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

class Card extends React.Component {
    findFontColor = (color) => {
        return this.props.color === 'spades' || this.props.color === 'clubs' ? 'black' : 'red';
    };

    state = {
        fontCol: this.findFontColor(this.props.color),
        hidden: this.props.hidden
    };

    flipCard = () => {
        const currState = this.state.hidden;
        this.setState({'hidden': !currState});
    };

    hideCard = () => {
        this.setState({'hidden': true});
    };

    render = () => {
        const { isDragging, connectDragSource, item } = this.props;
        const opacity = isDragging ? 0 : 1;


        if (this.state.hidden)
            return connectDragSource(<div style={{color: this.state.fontCol}}
                        className={"card back"}>
            </div>);
        else
            return connectDragSource(<div style={{color: this.state.fontCol}}
                        className={"card"}>
                <CardSide value={this.props.value} color={this.props.color}/>
                <CardMiddle value={this.props.value} color={this.props.color}/>
                <CardSide value={this.props.value} color={this.props.color}/>
            </div>);
    }
}

export default DragSource('item', itemSource, collect)(Card)