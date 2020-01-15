/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';

export class ReviewItem extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { review } = this.props;
        const { type, id, filename, width, height, filesize, url } = review.acf.kartinka;
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
        if (review.acf) {
            return (
                <div className="w-slide">
                    <div className="div-in-otzivas no-border" style={{background : 'none'}}>
                        <div className="col-otzivas">
                            <div className="img-people-otzivas in-home">
                                <a href="#" className="_4-imgis pops w-inline-block w-lightbox">
                                    <img src={url} alt="" className="glitch__img otziv" />
                                    <script type="application/json" className="w-json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}></script>
                                </a>
                            </div>
                        </div>
                        <div className="col-otzivas _50-proc paper-otzvs">
                            <div className="small-h">{review.title}</div>
                            <blockquote className="itatas" dangerouslySetInnerHTML={{ __html: review.content }}></blockquote>
                        </div>
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default ReviewItem
