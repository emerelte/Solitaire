import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';
import './style/Target.css'
import PropTypes from "prop-types";


const cardTarget = {
    drop(props, monitor, component) {
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
    };

    render() {
        const {connectDropTarget, hovered} = this.props;
        const l_opacity = hovered ? 1 : 0;

        return connectDropTarget(
            <div className="target" style={{opacity: l_opacity}}>
            </div>
        );
    }
}

export default DropTarget('item', cardTarget, collect)(Target);
