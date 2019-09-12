import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import playarrow from '../../../../../img/play-arrow.svg';

export class SeminarBigService extends Component {
    render() {
        const service = this.props.service;
        if (service) {
            let date = `${service.date}Z`;
            let normalDate = new Date(date).toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric' });
            return (
                <Fragment>
                    <div className="card-obuchenie w-clearfix">
                        <div className="small-h">СЕМИНАР - {normalDate}</div>
                        <h3>{service.title.rendered}</h3>
                        <div className="p-class" dangerouslySetInnerHTML={{ __html: service.excerpt.rendered }}></div>
                        <Link to={`/studing/seminars/${service.slug}`} className="link w-inline-block" data-ix="line-arrow" >
                            <div>подробнее</div>
                            <div className="before-txt-link">
                                <div className="fon-arrow">
                                    <img src={playarrow} alt="" className="arrow-line" />
                                    <div className="line-arrow">
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="img-in-news">
                        </div>
                    </div>
                </Fragment>
            )
        }
        return <h3>Loading...</h3>;
    }
}

export default SeminarBigService
