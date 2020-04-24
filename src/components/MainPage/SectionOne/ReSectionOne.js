/* eslint-disable */
import React, { Component } from 'react';
import playarrow from '../../../img/play-arrow.svg';
import SlideItem from './SlideItem/SlideItem';
import axios from 'axios';

class ReSectionOne extends Component {
    _isMounted = false;

    state = {
        services: [],
        isLoaded: false
    }

    componentDidMount() {
        this._isMounted = true;

        axios.get('https://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/services?per_page=150')
            .then(res => {
                if (this._isMounted) {
                    this.setState({
                        services: res.data.filter(item => item.acf ? item.acf["dovavit_v_karusel"] : null),
                        isLoaded: true
                    })
                }
            })
            .catch(err => console.log(err))
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { services, isLoaded } = this.state;
        if (isLoaded) {
            const order = (a, b) => {
                if (a.date < b.date) return 1
                if (a.date > b.date) return -1
                return 0
            }
            return (
                <div className="section">
                    <div data-delay="10000" data-autoplay="1" data-animation="slide" data-duration="500" data-infinite="1" className="slider w-slider">
                        <div className="w-slider-mask">
                            {services.sort((a, b) => order(a, b)).map(slide => <SlideItem key={slide.id} title={slide.title} desc={slide.excerpt} image={slide.media} term={slide.terms[0].slug} slug={slide.slug} />)}
                        </div>
                        <div className="left-arrow w-slider-arrow-left" data-ix="line-arrow">
                            <div className="before-txt-link revers">
                                <div className="fon-arrow">
                                    <img src={playarrow} alt="" className="arrow-line" />
                                    <div className="line-arrow">
                                    </div>
                                </div>
                            </div>
                            <div>назад</div>
                        </div>
                        <div className="right-arrow w-slider-arrow-right" data-ix="line-arrow">
                            <div>далее</div>
                            <div className="before-txt-link">
                                <div className="fon-arrow">
                                    <img src={playarrow} alt="" className="arrow-line" />
                                    <div className="line-arrow">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-nav w-slider-nav w-num">
                        </div>
                    </div>
                    <div className="fon-greeer">
                    </div>
                    <div className="fon-green right">
                    </div>
                    <div className="vertical-line _50">
                    </div>
                    <div className="vertical-line">
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default ReSectionOne
