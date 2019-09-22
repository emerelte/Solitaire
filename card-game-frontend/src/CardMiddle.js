import React from 'react';
import './style/CardMiddle.css';
import CardColor from "./CardColor";
import jackClubs from "./images/jackClubs.png"
import jackHearts from "./images/jackHearts.png"
import jackDiams from "./images/jackDiams.png"
import jackSpades from "./images/jackSpades.png"
import queenClubs from "./images/queenClubs.png"
import queenHearts from "./images/queenHearts.png"
import queenDiams from "./images/queenDiams.png"
import queenSpades from "./images/queenSpades.png"
import kingClubs from "./images/kingClubs.png"
import kingHearts from "./images/kingHearts.png"
import kingDiams from "./images/kingDiams.png"
import kingSpades from "./images/kingSpades.png"


export default class CardMiddle extends React.Component {
    render = () => {
        switch (this.props.value) {
            case 1:
                return (
                    <div className={"card-middle-column"}>
                        <div className={"div-middle"} style={{fontSize: '5vw'}}><CardColor color={this.props.color}/>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className={"card-middle-column"}>
                        <div className={"div-two"}><CardColor color={this.props.color}/></div>
                        <div className={"div-two"}><CardColor color={this.props.color}/></div>
                    </div>
                );
            case 3:
                return (
                    <div className={"card-middle-column"}>
                        <div className={"div-three"}><CardColor color={this.props.color}/>
                        </div>
                        <div className={"div-three"}><CardColor color={this.props.color}/>
                        </div>
                        <div className={"div-three"}><CardColor color={this.props.color}/>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className={"card-middle-column"}>
                        <div className={"div-four-outer"}>
                            <div className={"div-four-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-four-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                        <div className={"div-four-outer"}>
                            <div className={"div-four-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-four-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className={"card-middle-column"}>
                        <div className={"div-five-outer"}>
                            <div className={"div-five-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-five-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                        <div className={"div-five-outer"}>
                            <div className={"div-five-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                        <div className={"div-five-outer"}>
                            <div className={"div-five-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-five-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div className={"card-middle-column"}>
                        <div className={"div-six-outer"}>
                            <div className={"div-six-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-six-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                        <div className={"div-six-outer"}>
                            <div className={"div-six-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-six-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                        <div className={"div-six-outer"}>
                            <div className={"div-six-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-six-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                    </div>
                );
            case 7:
                return (
                    <div className={"card-middle-row"}>
                        <div className={"div-seven-outer"}>
                            <div className={"div-seven-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-seven-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-seven-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                        <div className={"div-seven-outer"}>
                            <div className={"div-seven-inner down-shifted"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                        <div className={"div-seven-outer"}>
                            <div className={"div-seven-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-seven-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-seven-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                    </div>
                );
            case 8:
                return (
                    <div className={"card-middle-row"}>
                        <div className={"div-eight-outer"}>
                            <div className={"div-eight-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-eight-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-eight-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                        <div className={"div-eight-outer"}>
                            <div className={"div-eight-inner down-shifted"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-eight-inner up-shifted"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                        <div className={"div-eight-outer"}>
                            <div className={"div-eight-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-eight-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-eight-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                    </div>
                );
            case 9:
                return (
                    <div className={"card-middle-row"}>
                        <div className={"div-nine-outer"}>
                            <div className={"div-nine-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-nine-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-nine-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-nine-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                        <div className={"div-nine-outer"}>
                            <div className={"div-nine-inner down-shifted"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                        <div className={"div-nine-outer"}>
                            <div className={"div-nine-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-nine-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-nine-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-nine-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                    </div>
                );
            case 10:
                return (
                    <div className={"card-middle-row"}>
                        <div className={"div-ten-outer"}>
                            <div className={"div-ten-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-ten-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-ten-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-ten-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                        <div className={"div-ten-outer"}>
                            <div className={"div-ten-inner down-shifted"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-ten-inner down-shifted"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                        <div className={"div-ten-outer"}>
                            <div className={"div-ten-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-ten-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-ten-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                            <div className={"div-ten-inner"}>
                                <CardColor color={this.props.color}/>
                            </div>
                        </div>
                    </div>
                );
            case 11:
                switch (this.props.color) {
                    case "spades":
                        return (
                            <div className={"card-middle-column"}>
                                <img style={{width: '100%', height: '100%'}} src={jackSpades}>
                                </img>
                            </div>
                        );
                    case "diams":
                        return (
                            <div className={"card-middle-column"}>
                                <img style={{width: '100%', height: '100%'}} src={jackDiams}>
                                </img>
                            </div>
                        );
                    case "hearts":
                        return (
                            <div className={"card-middle-column"}>
                                <img style={{width: '100%', height: '100%'}} src={jackHearts}>
                                </img>
                            </div>
                        );
                    case "clubs":
                        return (
                            <div className={"card-middle-column"}>
                                <img style={{width: '100%', height: '100%'}} src={jackClubs}>
                                </img>
                            </div>
                        );
                }
                break;
            case 12:
                switch (this.props.color) {
                    case "spades":
                        return (
                            <div className={"card-middle-column"}>
                                <img style={{width: '100%', height: '100%'}} src={queenSpades}>
                                </img>
                            </div>
                        );
                    case "diams":
                        return (
                            <div className={"card-middle-column"}>
                                <img style={{width: '100%', height: '100%'}} src={queenDiams}>
                                </img>
                            </div>
                        );
                    case "hearts":
                        return (
                            <div className={"card-middle-column"}>
                                <img style={{width: '100%', height: '100%'}} src={queenHearts}>
                                </img>
                            </div>
                        );
                    case "clubs":
                        return (
                            <div className={"card-middle-column"}>
                                <img style={{width: '100%', height: '100%'}} src={queenClubs}>
                                </img>
                            </div>
                        );
                }
                break;
            case 13:
                switch (this.props.color) {
                    case "spades":
                        return (
                            <div className={"card-middle-column"}>
                                <img style={{width: '100%', height: '100%'}} src={kingSpades}>
                                </img>
                            </div>
                        );
                    case "diams":
                        return (
                            <div className={"card-middle-column"}>
                                <img style={{width: '100%', height: '100%'}} src={kingDiams}>
                                </img>
                            </div>
                        );
                    case "hearts":
                        return (
                            <div className={"card-middle-column"}>
                                <img style={{width: '100%', height: '100%'}} src={kingHearts}>
                                </img>
                            </div>
                        );
                    case "clubs":
                        return (
                            <div className={"card-middle-column"}>
                                <img style={{width: '100%', height: '100%'}} src={kingClubs}>
                                </img>
                            </div>
                        );
                }
                break;
            default:
                return (
                    <div className={"card-middle-column"}>
                        <div>3</div>
                    </div>
                );
        }

    }
}
