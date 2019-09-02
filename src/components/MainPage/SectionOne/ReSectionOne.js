import React, { Component } from 'react';
import playarrow from '../../../img/play-arrow.svg';
import SlideItem from './SlideItem/SlideItem';
import axios from 'axios';

class ReSectionOne extends Component {
    state = {
        services: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/services')
            .then(res => this.setState({
                services: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        const { services, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div className="section">
                    <div data-animation="slide" data-duration="500" data-infinite="1" className="slider w-slider">
                        <div className="w-slider-mask">
                            {services.map(slide => <SlideItem key={slide.id} title={slide.title.rendered} desc={slide.excerpt.rendered} image={slide.featured_media} />)}
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
        return <h3>Loading...</h3>
    }
}

export default ReSectionOne
