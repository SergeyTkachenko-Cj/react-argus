/* eslint-disable */
import React, { Component, Fragment } from 'react'

export class SampleLightbox extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { url, type, filesize, id, width, height, filename } = this.props.img;
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
        return (
            <Fragment>
                <div className="col-otzivas _50-proc">
                    <a href="#" className="img-people-otzivas otzivas w-inline-block w-lightbox">
                        <img src={url} alt="" className="img-otziv" />
                        <script type="application/json" className="w-json" dangerouslySetInnerHTML={{
                            __html: JSON.stringify(data)
                        }}></script>
                    </a>
                </div>
            </Fragment>
        )
    }
}

export default SampleLightbox
