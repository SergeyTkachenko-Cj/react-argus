/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import playarrow from '../../../img/play-arrow.svg';
import Icon from './SroServiceItemIcon';

export class SroServiceItem extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }
    render() {
        return (
            <Fragment>
                <div id={`service${this.props.id}`} className="card-news">
                    {this.props.izob ? <Icon url={this.props.izob.url} /> : null}
                    <h3>{this.props.title}</h3>
                    <div className="p-class" dangerouslySetInnerHTML={{ __html: this.props.excerpt }}></div>
                    <Link to={`/${this.props.catslug}/${this.props.slug}`} className="link w-inline-block" data-ix="line-arrow" >
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

export default SroServiceItem
