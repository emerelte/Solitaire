import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';
import './style/Target.css'
import PropTypes from "prop-types";


const cardTarget = {
    drop(props, monitor, component) {
        props.showCardBehind(monitor.getItem());
        props.moveCard(monitor.getItem(), props.id);
    }
};

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
    }
};

class Target extends Component {
    static propTypes = {
        moveCard: PropTypes.func.isRequired,
        showCardBehind: PropTypes.func.isRequired
    };

    render() {
        const {connectDropTarget, hovered} = this.props;
        const borderColor = hovered ? 'red' : 'black';

        return connectDropTarget(
            <div className="target" style={{borderColor: borderColor}}>
                Target
            </div>
        );
    }
}

export default DropTarget('item', cardTarget, collect)(Target);
