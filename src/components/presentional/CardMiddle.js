import React from 'react';
import '../../style/CardMiddle.css';
import CardColor from "./CardColor";
import jackClubs from "../../images/jackClubs.png"
import jackHearts from "../../images/jackHearts.png"
import jackDiamonds from "../../images/jackDiams.png"
import jackSpades from "../../images/jackSpades.png"
import queenClubs from "../../images/queenClubs.png"
import queenHearts from "../../images/queenHearts.png"
import queenDiamonds from "../../images/queenDiams.png"
import queenSpades from "../../images/queenSpades.png"
import kingClubs from "../../images/kingClubs.png"
import kingHearts from "../../images/kingHearts.png"
import kingDiamonds from "../../images/kingDiams.png"
import kingSpades from "../../images/kingSpades.png"


export default class CardMiddle extends React.Component {
    render = () => {
        switch (this.props.value) {
            case 1:
                return (
                    <div className={"card-middle-column"}>
                        <div className={"div-middle"} style={{fontSize: '5vw'}}><CardColor shape={this.props.shape}/>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className={"card-middle-column"}>
                        <div className={"div-two"}><CardColor shape={this.props.shape}/></div>
                        <div className={"div-two"}><CardColor shape={this.props.shape}/></div>
                    </div>
                );
            case 3:
                return (
                    <div className={"card-middle-column"}>
                        <div className={"div-three"}><CardColor shape={this.props.shape}/>
                        </div>
                        <div className={"div-three"}><CardColor shape={this.props.shape}/>
                        </div>
                        <div className={"div-three"}><CardColor shape={this.props.shape}/>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className={"card-middle-column"}>
                        <div className={"div-four-outer"}>
                            <div className={"div-four-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-four-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                        <div className={"div-four-outer"}>
                            <div className={"div-four-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-four-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className={"card-middle-column"}>
                        <div className={"div-five-outer"}>
                            <div className={"div-five-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-five-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                        <div className={"div-five-outer"}>
                            <div className={"div-five-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                        <div className={"div-five-outer"}>
                            <div className={"div-five-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-five-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div className={"card-middle-column"}>
                        <div className={"div-six-outer"}>
                            <div className={"div-six-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-six-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                        <div className={"div-six-outer"}>
                            <div className={"div-six-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-six-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                        <div className={"div-six-outer"}>
                            <div className={"div-six-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-six-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                    </div>
                );
            case 7:
                return (
                    <div className={"card-middle-row"}>
                        <div className={"div-seven-outer"}>
                            <div className={"div-seven-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-seven-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-seven-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                        <div className={"div-seven-outer"}>
                            <div className={"div-seven-inner down-shifted"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                        <div className={"div-seven-outer"}>
                            <div className={"div-seven-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-seven-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-seven-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                    </div>
                );
            case 8:
                return (
                    <div className={"card-middle-row"}>
                        <div className={"div-eight-outer"}>
                            <div className={"div-eight-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-eight-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-eight-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                        <div className={"div-eight-outer"}>
                            <div className={"div-eight-inner down-shifted"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-eight-inner up-shifted"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                        <div className={"div-eight-outer"}>
                            <div className={"div-eight-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-eight-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-eight-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                    </div>
                );
            case 9:
                return (
                    <div className={"card-middle-row"}>
                        <div className={"div-nine-outer"}>
                            <div className={"div-nine-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-nine-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-nine-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-nine-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                        <div className={"div-nine-outer"}>
                            <div className={"div-nine-inner down-shifted"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                        <div className={"div-nine-outer"}>
                            <div className={"div-nine-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-nine-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-nine-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-nine-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                    </div>
                );
            case 10:
                return (
                    <div className={"card-middle-row"}>
                        <div className={"div-ten-outer"}>
                            <div className={"div-ten-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-ten-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-ten-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-ten-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                        <div className={"div-ten-outer"}>
                            <div className={"div-ten-inner down-shifted"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-ten-inner down-shifted"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                        <div className={"div-ten-outer"}>
                            <div className={"div-ten-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-ten-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-ten-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                            <div className={"div-ten-inner"}>
                                <CardColor shape={this.props.shape}/>
                            </div>
                        </div>
                    </div>
                );
            case 11:
            switch (this.props.shape) {
                case "spades":
                    return (
                        <div className={"card-middle-column"}>
                            <img alt='jackSpades' style={{width: '100%', height: '100%'}} src={jackSpades}>
                            </img>
                        </div>
                    );
                case "diams":
                    return (
                        <div className={"card-middle-column"}>
                            <img alt='jackDiamonds' style={{width: '100%', height: '100%'}} src={jackDiamonds}>
                            </img>
                        </div>
                    );
                case "hearts":
                    return (
                        <div className={"card-middle-column"}>
                            <img alt='jackHearts' style={{width: '100%', height: '100%'}} src={jackHearts}>
                            </img>
                        </div>
                    );
                case "clubs":
                    return (
                        <div className={"card-middle-column"}>
                            <img alt='jackClubs' style={{width: '100%', height: '100%'}} src={jackClubs}>
                            </img>
                        </div>
                    );
                default:
                    return (
                        <div className={"card-middle-column"}/>
                    )
            }
            case 12:
                switch (this.props.shape) {
                    case "spades":
                        return (
                            <div className={"card-middle-column"}>
                                <img alt='queenSpades' style={{width: '100%', height: '100%'}} src={queenSpades}>
                                </img>
                            </div>
                        );
                    case "diams":
                        return (
                            <div className={"card-middle-column"}>
                                <img alt='queenDiamonds' style={{width: '100%', height: '100%'}} src={queenDiamonds}>
                                </img>
                            </div>
                        );
                    case "hearts":
                        return (
                            <div className={"card-middle-column"}>
                                <img alt='queenHearts' style={{width: '100%', height: '100%'}} src={queenHearts}>
                                </img>
                            </div>
                        );
                    case "clubs":
                        return (
                            <div className={"card-middle-column"}>
                                <img alt='queenClubs' style={{width: '100%', height: '100%'}} src={queenClubs}>
                                </img>
                            </div>
                        );
                    default:
                        return (
                            <div className={"card-middle-column"}/>
                        )
                }
            case 13:
                switch (this.props.shape) {
                    case "spades":
                        return (
                            <div className={"card-middle-column"}>
                                <img alt='kingSpades' style={{width: '100%', height: '100%'}} src={kingSpades}>
                                </img>
                            </div>
                        );
                    case "diams":
                        return (
                            <div className={"card-middle-column"}>
                                <img alt='kingDiamonds' style={{width: '100%', height: '100%'}} src={kingDiamonds}>
                                </img>
                            </div>
                        );
                    case "hearts":
                        return (
                            <div className={"card-middle-column"}>
                                <img alt='kingHearts' style={{width: '100%', height: '100%'}} src={kingHearts}>
                                </img>
                            </div>
                        );
                    case "clubs":
                        return (
                            <div className={"card-middle-column"}>
                                <img alt='kingClubs' style={{width: '100%', height: '100%'}} src={kingClubs}>
                                </img>
                            </div>
                        );
                    default:
                        return (
                            <div className={"card-middle-column"}/>
                        )
                }
            default:
                return (
                    <div className={"card-middle-column"}>
                        <div></div>
                    </div>
                );
        }

    }
}
