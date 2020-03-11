/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import playarrow from '../../../../../img/play-arrow.svg';

export class SeminarsSmallServices extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        let date = `${this.props.date}Z`;
        let normalDate = new Date(date).toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric' });
        const dateExtraZero = dt => dt < 10 ? '0' + dt : dt;

        const normalDateDay = dateExtraZero(new Date(date).getDate());
        const normalDateMonth = dateExtraZero(new Date(date).getMonth() + 1);
        const normalDateYear = new Date(date).getFullYear();

        const titleDate = this.props.catslug === 'learning-programs' ? 'ОБУЧЕНИЕ В АРГУС' : `СЕМИНАР - ${normalDateDay}/${normalDateMonth}/${normalDateYear}`;
        return (
            <Fragment>
                <div className="card-obuchenie w-clearfix">
                <div className="small-h">{titleDate}</div>
                    <h3>{this.props.title}</h3>
                    <div className="p-class" dangerouslySetInnerHTML={{ __html: this.props.excerpt }}></div>
                    <Link to={`/training-and-seminars/${this.props.catslug}/${this.props.slug}`} className="link w-inline-block" data-ix="line-arrow" >
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
}

export default SeminarsSmallServices
