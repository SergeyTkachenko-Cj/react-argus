import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import ReviewItem from '../MainPage/SectionEight/ReviewItem/ReviewItem';
import ReviewOneItem from './ReviewItem/ReviewOneItem';

export class Reviews extends Component {
    state = {
        page: {},
        reviews: [],
        isLoaded: false
    }

    componentDidMount() {
        let getSlug = this.props.location.pathname.replace('/', '');
        const getPage = axios.get(`http://a0325522.xsph.ru/wp-json/better-rest-endpoints/v1/page/${getSlug}`);
        const getReviews = axios.get('http://a0325522.xsph.ru/wp-json/better-rest-endpoints/v1/reviews');
        Promise.all([getPage, getReviews])
            .then(res => this.setState({
                page: res[0].data,
                reviews: res[1].data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state);
        const { page, reviews, isLoaded } = this.state;
        if (isLoaded && reviews) {
            return (
                <Fragment>
                    <div className="paddinger">
                    </div>
                    <div className="section">
                        <div className="wrapper head-wrapper">
                            <div className="row-3x w-row">
                                <div className="col-3x left w-clearfix w-col w-col-6">
                                    <div className="small-h">{page.title}</div>
                                    <h1>Вот что о нас говорят</h1>
                                    <div className="p-class _100" dangerouslySetInnerHTML={{ __html: page.content }}></div>
                                </div>
                                <div className="col-3x right _4-img-right w-col w-col-6">
                                    <div className="top-for-brads lefts">
                                        <div className="brads">
                                            <div className="small-h brads">главная</div>
                                            <img src={playarrow} alt="" className="brads-arrow" />
                                            <div className="small-h brads">о нас</div>
                                            <img src={playarrow} alt="" className="brads-arrow" />
                                            <div className="small-h brads">{page.title}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vertical-line">
                            </div>
                            <div className="vertical-line-25">
                            </div>
                        </div>
                        <div className="fon-greeer">
                        </div>
                        <div className="vertical-line _50">
                        </div>
                    </div>
                    <div className="section">
                        <div className="wrapper no-paddings">
                            <div className="news page-news">
                                {reviews.map(item => {
                                    if (item.acf["id_video"]) {
                                        return <ReviewOneItem key={item.id} image={item.acf.kartinka} video={item.acf["id_video"]} title={item.title} content={item.content}/>
                                    } else {
                                        return <ReviewOneItem key={item.id} image={item.acf.kartinka} title={item.title} content={item.content}/>
                                    }
                                })}
                            </div>
                            <div className="vertical-line-25">
                            </div>
                            <div className="vertical-line">
                            </div>
                        </div>
                        <div className="vertical-line _50">
                        </div>
                        <div className="fon-greeer">
                        </div>
                    </div>
                </Fragment>
            )
        }
        return null;
    }
}

export default Reviews
