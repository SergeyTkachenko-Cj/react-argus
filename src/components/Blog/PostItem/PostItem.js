/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import playarrow from '../../../img/play-arrow.svg';

export class PostItem extends Component {
    state = {
        img: '',
        isLoaded: false
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }
    
    render() {
        const { title, excerpt, date, slug, cat } = this.props;
        const dateExtraZero = dt => dt < 10 ? '0' + dt : dt;

        const normalDateDay = dateExtraZero(new Date(date).getDate());
        const normalDateMonth = dateExtraZero(new Date(date).getMonth() + 1);
        const normalDateYear = new Date(date).getFullYear();

        return (
            <Fragment>
                <div className="card-news w-clearfix">
                    <div className="small-h">{cat[0]} - {normalDateDay}/{normalDateMonth}/{normalDateYear}</div>
                    <h3>{title}</h3>
                    <div className="p-class" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                    <Link to={`/blog/${slug}`} className="link w-inline-block" data-ix="line-arrow">
                        <div>читать полностью</div>
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

export default PostItem
