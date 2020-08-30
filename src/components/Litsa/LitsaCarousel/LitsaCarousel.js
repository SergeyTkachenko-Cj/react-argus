/* eslint-disable */
import React, {Fragment} from 'react';
import playarrow from '../../../img/play-arrow.svg';
import LitsaCarouselItem from './LitsaCarouselItem';

const LitsaCarousel = props => {

    const services = props.serv;
    const servThree = [];

        // three items per carousel card
        for (let i = 0; i < services.length; services.splice(0, 3)) {        
            servThree.push(<LitsaCarouselItem 
                                key={services[i].id} 
                                servI={services[i]} 
                                servII={services[i + 1]} 
                                servIII={services[i + 2]} 
                           />);
        }

    return (
        <Fragment>
            <div className="section otzvs lisa_carousel">
                <div className="wrapper no-paddings">
                    <div data-animation="slide" data-duration="500" data-infinite="1" className="slider-otzivi w-slider">
                        <div className="w-slider-mask">
                            {servThree}
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
