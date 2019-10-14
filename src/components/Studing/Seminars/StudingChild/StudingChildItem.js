/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import playarrow from '../../../../img/play-arrow.svg'

export class StudingChildItem extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        return (
            <Fragment>
                <div className="card-news">
                    <h3>{this.props.title}</h3>
                    <div className="p-class">{this.props.excerpt}</div>
                    <Link to={`/training-and-seminars/${this.props.slug}`} className="link w-inline-block" data-ix="line-arrow" >
                        <div>Узнать подробнее</div>
                        <div className="before-txt-link">
                            <div className="fon-arrow">
                                <img src={playarrow} alt="" className="arrow-line" />
                                <div className="line-arrow">
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </Fragment>
        )
    }
}

export default StudingChildItem
