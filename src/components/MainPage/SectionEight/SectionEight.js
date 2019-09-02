import React, { Component } from 'react';
import axios from 'axios';
import playarrow from '../../../img/play-arrow.svg';
import ReviewItem from './ReviewItem/ReviewItem';

export class SectionEight extends Component {
    state = {
        reviews: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/reviews')
            .then(res => this.setState({
                reviews: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }
    render() {
        const { reviews, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div className="section">
                    <div className="wrapper no-paddings">
                        <div data-animation="slide" data-duration="500" data-infinite="1" className="slider-otzivi w-slider">
                            <div className="w-slider-mask">
                                { reviews.map(review => <ReviewItem key={review.id} title={review.title.rendered} content={review.content.rendered} image={review.featured_media}/>) }
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
                    </div>
                    <div className="fon-green">
                    </div>
                </div>
            )
        }
        return <h3>Loading...</h3>
    }
}

export default SectionEight
