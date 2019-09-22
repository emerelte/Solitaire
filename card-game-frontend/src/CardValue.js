import React from 'react';
import './style/CardValue.css';


export default class CardValue extends React.Component {

    render = () => {
        switch (this.props.value) {
            case 1:
                return (
                    <div className={"card-corner"}><span className={"span-middle"}>A</span></div>
                );
            case 2:
                return (
                    <div className={"card-corner"}><span className={"span-middle"}>2</span></div>
                );
            case 3:
                return (
                    <div className={"card-corner"}><span className={"span-middle"}>3</span></div>
                );

            case 4:
                return (
                    <div className={"card-corner"}><span className={"span-middle"}>4</span></div>
                );

            case 5:
                return (
                    <div className={"card-corner"}><span className={"span-middle"}>5</span></div>
                );

            case 6:
                return (
                    <div className={"card-corner"}><span className={"span-middle"}>6</span></div>
                );

            case 7:
                return (
                    <div className={"card-corner"}><span className={"span-middle"}>7</span></div>
                );

            case 8:
                return (
                    <div className={"card-corner"}><span className={"span-middle"}>8</span></div>
                );
            case 9:
                return (
                    <div className={"card-corner"}><span className={"span-middle"}>9</span></div>
                );
            case 10:
                return (
                    <div className={"card-corner"}><span className={"span-middle"}>10</span></div>
                );
            case 11:
                return (
                    <div className={"card-corner"}><span className={"span-middle"}>J</span></div>
                );
            case 12:
                return (
                    <div className={"card-corner"}><span className={"span-middle"}>D</span></div>
                );
            case 13:
                return (
                    <div className={"card-corner"}><span className={"span-middle"}>K</span></div>
                );
        }
    }
}
