/* eslint-disable */
import React from 'react';
import LitsaItem from './LitsaItem';

const LitsaCarouselItem = props => {
    
        const litsaArr = [props.servI, props.servII, props.servIII];

            return (
                <div className="w-slide">
                    <div className="div-in-otzivas no-border" style={{background : 'none'}}>
                        {/* <div className="col-otzivas">
                            <div className="img-people-otzivas in-home">
                                <a href="#" className="_4-imgis pops w-inline-block w-lightbox litsa_pops">
                                    <img src={url} alt="" />
                                    <script type="application/json" className="w-json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}></script>
                                </a>
                            </div>
                            <div className="col-otzivas _50-proc paper-otzvs">
                                <div className="small-h">{litsa.title}</div>
                                <blockquote className="itatas" dangerouslySetInnerHTML={{ __html: litsa.content }}></blockquote>
                            </div>
                        </div> */}
                        {/* <div className="col-otzivas _50-proc paper-otzvs">
                            <div className="small-h">{litsa.title}</div>
                            <blockquote className="itatas" dangerouslySetInnerHTML={{ __html: litsa.content }}></blockquote>
                        </div> */}
                        {litsaArr.map(service => service ? <LitsaItem key={service.id} serv={service} /> : null)}
                    </div>
                </div>
            )
}

export default LitsaCarouselItem
