/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import NotFoundPosts from '../../Error/NotFoundPosts';
import ReviewOneItem from '../ReviewItem/ReviewOneItem';

export class ReviewItemContainer extends Component {
    state = {
        reviews: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://a0325522.xsph.ru/wp-json/better-rest-endpoints/v1/reviews')
            .then(res => this.setState({
                reviews: res.data,
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
                            <div className="news page-news">
                                {reviews.map(item => item.acf["id_video"]
                                    ? <ReviewOneItem key={item.id} image={item.acf.kartinka} video={item.acf["id_video"]} title={item.title} content={item.content} />
                                    : <ReviewOneItem key={item.id} image={item.acf.kartinka} title={item.title} content={item.content} />
                                )}
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
        return <NotFoundPosts />
    }
}

export default ReviewItemContainer
