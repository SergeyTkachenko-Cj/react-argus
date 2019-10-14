/* eslint-disable */
import React, { Component, PureComponent } from 'react'
import { Link } from 'react-router-dom';
import playarrow from '../../../../img/play-arrow.svg';

export class SlideItem extends PureComponent {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const service = this.props;
        let term = service.term;
        if (term === 'learning-programs') {
            term = 'training-and-seminars/seminars';
        }
        if (service) {
            return (
                <div className="w-slide">
                    <div className="div-in-slide">
                        <div className="col-in-slider _1 w-clearfix">
                            <div className="h2 slider-h">{service.title}</div>
                            <div className="p-class">{service.desc}</div>
                            <Link to={`/${term}/${service.slug}`} className="link w-inline-block" data-ix="line-arrow">
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
                        <div className="col-in-slider _4-img">
                            <div className="div-block-32">
                                <div className="_4-imgis">
                                    {service.image ? <img src={service.image["post-thumbnail"]} alt="" className="glitch__img" /> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return null
    }
}

export default SlideItem