import React from 'react';
import './style/Card.css';
import CardMiddle from './CardMiddle.js'
import CardSide from "./CardSide";
import {DragSource} from "react-dnd";
import PropTypes from 'prop-types';

const itemSource = {
    beginDrag(props) {
        props.createTargets();
        return props.item;
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

class Card extends React.Component {

    static propTypes = {
        createTargets: PropTypes.func.isRequired,
        deleteTargets: PropTypes.func.isRequired
    };

    findFontColor = (color) => {
        return this.props.color === 'spades' || this.props.color === 'clubs' ? 'black' : 'red';
    };

    state = {
        fontCol: this.findFontColor(this.props.color),
    };

    render = () => {
        const {isDragging, connectDragSource, item} = this.props;

        if (this.props.isHidden)
            return <div style={{color: this.state.fontCol}}
                                          className={"card back"}>
            </div>;
        else
            return connectDragSource(<div style={{color: this.state.fontCol}}
                                          className={"card draggable"}>
                <CardSide value={this.props.value} color={this.props.color}/>
                <CardMiddle value={this.props.value} color={this.props.color}/>
                <CardSide value={this.props.value} color={this.props.color}/>
            </div>);
    }
}

export default DragSource('item', itemSource, collect)(Card)