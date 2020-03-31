/* eslint-disable */
import React, { Component, Fragment } from 'react';
import playarrow from '../../../img/play-arrow.svg';
import LitsaCarouselItem from './LitsaCarouselItem';

const LitsaCarousel = props => {

    const services = props.serv;
    return (
        <Fragment>
            <div className="section otzvs lisa_carousel">
                <div className="wrapper no-paddings">
                    <div data-animation="slide" data-duration="500" data-infinite="1" className="slider-otzivi w-slider">
                        <div className="w-slider-mask">
                            {services.map(service => <LitsaCarouselItem key={service.id} serv={service} />)}
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
                    <div className="in-wrapper entres reviews_padding border-no"></div>
                </div>
                <div className="fon-green">
                </div>
            </div>
        </Fragment>
    )
}

export default LitsaCarousel
