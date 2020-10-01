/* eslint-disable */
import React, {Fragment} from 'react';
import playarrow from '../../../img/play-arrow.svg';
import LitsaCarouselDiffLength from './LitsaCarouselDiffLength';

const LitsaCarousel = props => {
    return (
        <Fragment>
            <div className="section otzvs lisa_carousel">
                <div className="wrapper no-paddings">
                            <LitsaCarouselDiffLength prps={props} lng={3} />
                            <LitsaCarouselDiffLength prps={props} lng={2} />
                            <LitsaCarouselDiffLength prps={props} lng={1} />
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
