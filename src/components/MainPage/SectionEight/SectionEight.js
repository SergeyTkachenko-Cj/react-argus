/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import playarrow from '../../../img/play-arrow.svg';
import ReviewItem from './ReviewItem/ReviewItem';

export class SectionEight extends Component {
    state = {
        reviews: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get('https://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/reviews')
            .then(res => this.setState({
                reviews: res.data.filter(item => item.acf.kartinka),
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { reviews, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="section">
                        <div className="wrapper no-paddings">
                            <div className="left-div">
                                <div className="small-h">отзывы</div>
                                <h2>Вот что о нас говорят</h2>
                            </div>
                            <div className="vertical-line"></div>
                            <div className="vertical-line-25"></div>
                        </div>
                        <div className="fon-greeer"></div>
                        <div className="fon-green"></div>
                        <div className="vertical-line _50"></div>
                    </div>
                    <div className="section otzvs">
                        <div className="wrapper no-paddings">
                            <div data-animation="slide" data-duration="500" data-infinite="1" className="slider-otzivi w-slider">
                                <div className="w-slider-mask">
                                    {reviews.map(review => <ReviewItem key={review.id} review={review} />)}
                                </div>
                                <div className="left-arrow otzivas w-slider-arrow-left" data-ix="line-arrow">
                                    <div className="before-txt-link revers">
                                        <div className="fon-arrow">
                                            <img src={playarrow} alt="" className="arrow-line" />
                                            <div className="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                    <div>назад</div>
                                </div>
                                <div className="right-arrow otzivas w-slider-arrow-right" data-ix="line-arrow">
                                    <div>Далее</div>
                                    <div className="before-txt-link">
                                        <div className="fon-arrow">
                                            <img src={playarrow} alt="" className="arrow-line" />
                                            <div className="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-nav-3 w-slider-nav w-round">
                                </div>
                            </div>
                            <div className="vertical-line">
                            </div>
                            <div className="in-wrapper entres reviews_padding border-no">
                                <Link to="/otzyvy" className="link-menu w-inline-block" data-ix="link-hover">
                                    <div>Посмотреть все отзывы</div>
                                    <div className="left-link-line">
                                    </div>
                                    <div className="right-link-line">
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="fon-green">
                        </div>
                    </div>
                </Fragment>
            )
        }
        return null;
    }
}

export default SectionEight
