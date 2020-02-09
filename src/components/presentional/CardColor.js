import React from 'react';
import '../../style/CardColor.css';
import {decodeHtml} from '../../HelperFunctions'

export default class CardColor extends React.Component {

    render = () => {
        return (
            <div style={{fontSize: this.props.fontSize}} className={'color-div'}><span className={"color-span"}>
                {decodeHtml("&" + this.props.shape + ";")}
                             </span>
            </div>
        )
    }
}
