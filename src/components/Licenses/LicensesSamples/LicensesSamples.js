import React, { Component, Fragment } from 'react'
import SampleLightbox from './SampleLightbox/SampleLightbox';

export class LicensesSamples extends Component {
    render() {
        const acf = this.props.acf;
        return (
            <Fragment>
                <div className="section">
                    <div className="wrapper no-paddings">
                        <div className="in-wrapper">
                            <div className="small-h">документы</div>
                            <h2 className="h2">{acf["zagolovok_bloka"]}</h2>
                        </div>
                        <div className="news page-news">
                            <div className="div-in-otzivas">
                                {acf.obraztsi.map(sample => <SampleLightbox key={sample.obrazets.ID} img={sample.obrazets}/>)}
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
}

export default LicensesSamples
