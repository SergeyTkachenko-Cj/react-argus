import React, { Component } from 'react';
import playarrow from '../../../img/play-arrow.svg';

export class NewsCart extends Component {
    render() {
        return (
            <div className="card-news w-clearfix">
                <div className="small-h">{ this.props.date }</div>
                <h3>{ this.props.title }</h3>
                <div className="pclass" dangerouslySetInnerHTML={{__html: this.props.excerpt}}></div>
                <a href="#" className="link w-inline-block" data-ix="line-arrow">
                    <div>читать полностью</div>
                    <div className="before-txt-link">
                        <div className="fon-arrow">
                            <img src={playarrow} alt="" className="arrow-line" />
                            <div className="line-arrow">
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default NewsCart
