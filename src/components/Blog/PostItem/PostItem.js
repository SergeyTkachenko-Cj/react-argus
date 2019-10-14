/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
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
        const { img, title, excerpt, date, slug, cat } = this.props;
        let normalDate = new Date(date).toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric' });
        if (img) {
            return (
                <Fragment>
                    <div className="card-news w-clearfix">
                        <div className="small-h">{cat[0]} - {normalDate}</div>
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
                        <div className="img-in-news newser">
                            <div className="_4-imgis">
                                <img src={img} alt={title} className="glitch__img" />
                                <img src={img} alt={title} className="glitch__img" />
                                <img src={img} alt={title} className="glitch__img" />
                                <img src={img} alt={title} className="glitch__img" />
                                <img src={img} alt={title} className="glitch__img" />
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        }
        return (
            <Fragment>
                <div className="card-news w-clearfix">
                    <div className="small-h">{cat[0]} - {normalDate}</div>
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
