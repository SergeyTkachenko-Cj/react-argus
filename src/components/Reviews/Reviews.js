/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import ReviewItem from '../MainPage/SectionEight/ReviewItem/ReviewItem';
import ReviewOneItem from './ReviewItem/ReviewOneItem';
import NotFound from '../Error/NotFound';
import ReviewItemContainer from './ReviewItemContainer/ReviewItemContainer';

export class Reviews extends Component {
    state = {
        page: {},
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let getSlug = this.props.location.pathname.replace('/', '');
        axios.get(`http://a0325522.xsph.ru/wp-json/better-rest-endpoints/v1/page/${getSlug}`)
            .then(res => this.setState({
                page: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { page, isLoaded } = this.state;
        if (isLoaded) {
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
                    <ReviewItemContainer />
                </Fragment>
            )
        }
        return <NotFound />;
    }
}

export default Reviews
