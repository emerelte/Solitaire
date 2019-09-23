import React from 'react';
import './style/CardColor.css';


export default class CardColor extends React.Component {

    render = () => {
        switch (this.props.color) {
            case "spades":
                return (
                    <div style={{fontSize: this.props.fontSize}} className={'color-div'}><span className={"color-span"}>
                        &spades;
                    </span>
                    </div>
                );
            case "diams":
                return (
                    <div style={{fontSize: this.props.fontSize}} className={'color-div'}><span className={"color-span"}>
                        &diams;
                    </span>
                    </div>
                );
            case "hearts":
                return (
                    <div style={{fontSize: this.props.fontSize}} className={'color-div'}><span className={"color-span"}>
                        &hearts;
                    </span>
                    </div>
                );
            case "clubs":
                return (
                    <div style={{fontSize: this.props.fontSize}} className={'color-div'}><span className={"color-span"}>
                        &clubs;
                    </span>
                    </div>
                );
            default:
                return (
                    <div style={{fontSize: this.props.fontSize}} className={'color-div'}/>
                )
        }

    }
}
