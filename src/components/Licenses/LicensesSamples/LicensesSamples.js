/* eslint-disable */
import React, { Component, Fragment } from 'react'
import SampleLightbox from './SampleLightbox/SampleLightbox';

export class LicensesSamples extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const acf = this.props.acf;
        if (acf.obraztsi) {
            return (
                <Fragment>
                    <div className="section">
                        <div className="wrapper no-wrappers-padding">
                            <div className="in-wrapper">
                                <div className="small-h">документы</div>
                                <h2 className="h2">{acf["zagolovok_bloka"]}</h2>
                            </div>
                            <div className="news page-news">
                                <div className="div-in-otzivas">
                                    {acf.obraztsi.map((sample, index) => <SampleLightbox key={index} img={sample.obrazets} />)}
                                </div>
                            </div>
                            <div className="vertical-line-25">
                            </div>
                            <div className="vertical-line">
                            </div>
                        </div>
                        <div className="vertical-line _50">
                        </div>
                    </div>
                </Fragment>
            )
        }
        return null;
    }
}

export default LicensesSamples
