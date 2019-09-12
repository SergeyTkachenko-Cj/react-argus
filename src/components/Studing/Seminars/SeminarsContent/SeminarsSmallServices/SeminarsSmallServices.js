import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import playarrow from '../../../../../img/play-arrow.svg';

export class SeminarsSmallServices extends Component {
    render() {
        console.log(this.props);
        let date = `${this.props.date}Z`;
        let normalDate = new Date(date).toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric' });
        return (
            <Fragment>
                <div className="card-obuchenie w-clearfix">
                    <div className="small-h">СЕМИНАР - {normalDate}</div>
                    <h3>{this.props.title}</h3>
                    <div className="p-class" dangerouslySetInnerHTML={{ __html: this.props.excerpt }}></div>
                    <Link to={`/studing/seminars/${this.props.slug}`} className="link w-inline-block" data-ix="line-arrow" >
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
