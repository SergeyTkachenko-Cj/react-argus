/* eslint-disable */
import React, { Component, Fragment } from 'react'

export class ReviewOneItem extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const video = this.props.video;
        const { url, type, filesize, id, width, height, filename } = this.props.image;
        let data = {
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
        if (video) {
            return (
                <Fragment>
                    <div className="div-in-otzivas div-feedback">
                        <div className="col-otzivas _50-proc video-feedback">
                            <div className="img-people-otzivas otzivas iframe-feedback">
                                <div style={{ paddingTop: '56.17021276595745%' }} id="w-node-2b06150b0dbb-264ea538" className="w-video w-embed">
                                    <iframe className="embedly-embed" src={`https://www.youtube.com/embed/${video}`} scrolling="no" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen={true}>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-otzivas _50-proc left text-feedback">
                            <div className="small-h h-feedback">{this.props.title}</div>
                            <blockquote className="itatas txt-body-feedback" dangerouslySetInnerHTML={{ __html: this.props.content }}></blockquote>
                        </div>
                    </div>
                </Fragment>
            )
        }
        return (
            <Fragment>
                <div className="div-in-otzivas div-feedback">
                    <div className="col-otzivas _50-proc contest-feedback">
                        <a href="#" className="img-people-otzivas otzivas w-inline-block w-lightbox">
                            <img src={url} alt="" className="img-otziv" />
                            <script type="application/json" className="w-json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}></script>
                        </a>
                    </div>
                    <div className="col-otzivas _50-proc left text-content-feedback">
                        <div className="small-h h-content-feedback">{this.props.title}</div>
                        <blockquote className="itatas" dangerouslySetInnerHTML={{ __html: this.props.content }}></blockquote>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ReviewOneItem
