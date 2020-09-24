import React from "react";
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";

export default class MenuButton extends React.Component {
    static propTypes = {
        goToMenuCallback: PropTypes.func.isRequired,
    };
    render = () => {
        return <Button color="primary" onClick={e => {
            this.props.goToMenuCallback();
        }}>Menu</Button>
    }
};