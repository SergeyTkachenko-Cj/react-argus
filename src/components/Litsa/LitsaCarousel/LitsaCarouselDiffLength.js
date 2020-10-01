/* eslint-disable */
import React, {Fragment} from 'react';
import playarrow from '../../../img/play-arrow.svg';
import LitsaCarouselItem from './LitsaCarouselItem';

const LitsaCarouselDiffLength = props => {
    const services = [...props.prps.serv]; 
    const servLng = [];

        for (let i = 0; i < services.length; services.splice(0, props.lng)) {        
            servLng.push(<LitsaCarouselItem 
                                key={services[i].id} 
                                serv={[...services]} 
                                step={props.lng}
                        />);
        }

    return (
            <div data-animation="slide" data-duration="500" data-infinite="1" className={`w${props.lng}lng slider-otzivi w-slider`}>
                    <div className="w-slider-mask">
                        {servLng}
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
    )
}

export default LitsaCarouselDiffLength