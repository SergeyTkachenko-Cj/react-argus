/* eslint-disable */
import React from 'react';
import LitsaItem from './LitsaItem';

const LitsaCarouselItem = props => {
        const litsaArr = [...new Array(props.step)];
        const litsaArrLength = litsaArr.map((i, index) => props.serv[index])

            return (
                <div className="w-slide">
                    <div className="div-in-otzivas no-border" style={{background : 'none'}}>
                        {litsaArrLength.map(service => service ? 
                                                    <LitsaItem key={service.id} serv={service} /> 
                                                    : null)}
                    </div>
                </div>
            )
}

export default LitsaCarouselItem
