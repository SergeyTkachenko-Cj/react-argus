/* eslint-disable */
import React, { Component } from 'react';

const LitsaCarouselItem = props => {
    
    const litsa = props.serv;
        const { type, id, filename, width, height, filesize, url } = litsa.acf.kartinka;
        const data = {
            "items": [
                {
                    "type": type,
                    "_id": id,
                    "fileName": filename,
                    "origFileName": filename,
                    "width": width,
                    "height": height,
                    "fileSize": filesize,
                    "url": url
                }
            ]
        }

        if (litsa.acf) {
            return (
                <div className="w-slide">
                    <div className="div-in-otzivas no-border" style={{background : 'none'}}>
                        <div className="col-otzivas">
                            <div className="img-people-otzivas in-home">
                                <a href="#" className="_4-imgis pops w-inline-block w-lightbox litsa_pops">
                                    <img src={url} alt="" />
                                    <script type="application/json" className="w-json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}></script>
                                </a>
                            </div>
                        </div>
                        <div className="col-otzivas _50-proc paper-otzvs">
                            <div className="small-h">{litsa.title}</div>
                            <blockquote className="itatas" dangerouslySetInnerHTML={{ __html: litsa.content }}></blockquote>
                        </div>
                    </div>
                </div>
            )
        }
        return null
}

export default LitsaCarouselItem
