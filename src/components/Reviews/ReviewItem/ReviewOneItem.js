import React, { Component, Fragment } from 'react'

export class ReviewOneItem extends Component {
    render() {
        const video = this.props.video;
        console.log(this.props);
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
                    <div className="div-in-otzivas">
                        <div className="col-otzivas _50-proc">
                            <div className="img-people-otzivas otzivas">
                                <div style={{ paddingTop: '56.17021276595745%' }} id="w-node-2b06150b0dbb-264ea538" className="w-video w-embed">
                                    <iframe className="embedly-embed" src={`https://www.youtube.com/embed/${video}`} scrolling="no" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-otzivas _50-proc left">
                            <div className="small-h">{this.props.title}</div>
                            <blockquote className="itatas" dangerouslySetInnerHTML={{__html: this.props.content}}></blockquote>
                        </div>
                    </div>
                </Fragment>
            )
        }
        return (
            <Fragment>
                <div className="div-in-otzivas">
                    <div className="col-otzivas _50-proc">
                        <a href="#" className="img-people-otzivas otzivas w-inline-block w-lightbox">
                            <img src={url} alt="" className="img-otziv" />
                            <script type="application/json" className="w-json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}></script>
                        </a>
                    </div>
                    <div className="col-otzivas _50-proc left">
                        <div className="small-h">{this.props.title}</div>
                        <blockquote className="itatas" dangerouslySetInnerHTML={{__html: this.props.content}}></blockquote>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ReviewOneItem
