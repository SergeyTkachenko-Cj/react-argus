/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import playarrow from '../../../../img/play-arrow.svg';
import axios from 'axios';

export class BigServices extends Component {
    state = {
        isLoaded: false
    }

    componentDidMount() {
        if (this.props.taxonomy) {
            this.setState({
                isLoaded: true
            })
        }
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="row-3x w-row">
                        <div className="col-3x left w-clearfix w-col w-col-6">
                            <div className="small-h">услуги</div>
                            <h2>{this.props.taxonomy.name}</h2>
                            <div className="p-class">{this.props.taxonomy.description}</div>
                            <Link to={`/${this.props.taxonomy.slug}`} className="link w-inline-block" data-ix="line-arrow">
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
                        <div data-w-id="993aea3e-9b8b-d73b-c149-126b2f39bdad" className="col-3x right _4-img-right w-col w-col-6">
                            <div className="_4-imgis">
                                <img src={this.props.taxonomy.acf.icon.sizes["post-thumbnail"]} srcSet={`${this.props.taxonomy.acf.icon.sizes["medium"]} 479w, ${this.props.taxonomy.acf.icon.sizes["medium_large"]} 768w, ${this.props.taxonomy.acf.icon.sizes["post-thumbnail"]} 1280w`} sizes="(max-width: 479px) 88vw, (max-width: 767px) 92vw, (max-width: 991px) 44vw, 48vw" alt="" className="glitch__img" />
                            </div>
                            <div className="line-gens">
                                <div className="green-line">
                                </div>
                                <div className="green-line">
                                </div>
                                <div className="green-line">
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        }
        return null;
    }
}

export default BigServices
