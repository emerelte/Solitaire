import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import './style/Target.css'
import PropTypes from "prop-types";

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
    }
};

const cardTarget = {
    drop(props, monitor, component) {
        // monitor.getItem().deleteTargets();
        props.showCard(monitor.getItem());
        props.moveCard(monitor.getItem(), props.id);
    }
};


class Target extends Component {
    static propTypes = {
        moveCard: PropTypes.func.isRequired,
        showCard: PropTypes.func.isRequired
    };

    render() {
        const { connectDropTarget, hovered, item } = this.props;
        const borderColor = hovered ? 'red' : 'black';

        return connectDropTarget(
            <div className="target" style={{ borderColor: borderColor }}>
                Target
            </div>
        );
    }
}

export default DropTarget('item', cardTarget, collect)(Target);
