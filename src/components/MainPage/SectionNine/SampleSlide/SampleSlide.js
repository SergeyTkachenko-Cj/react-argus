/* eslint-disable */
import React, { Component } from 'react';

export class SampleSlide extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { sample } = this.props;
        const imageData = sample.acf.obrazets;
        const data = {
            "items": [
                {
                    "type": imageData.type,
                    "_id": imageData.id,
                    "fileName": imageData.filename,
                    "origFileName": imageData.filename,
                    "width": imageData.width,
                    "height": imageData.height,
                    "fileSize": imageData.filesize,
                    "url": imageData.url
                }
            ]
        }
        if (this.props.sample) {
            return (
                <div className="w-slide">
                    <div className="div-in-slide-primeras">
                        <div className="col-in-slider primeras">
                            <div className="mama-obrazci new-mama">
                                <a href="#" className="_4-imgis pops no-shadows w-inline-block w-lightbox">
                                    <img src={imageData.url} alt={this.props.sample.title} className="image-16 extra sm-pic" />
                                    <script type="application/json" className="w-json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}></script>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default SampleSlide
