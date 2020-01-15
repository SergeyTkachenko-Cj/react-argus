/* eslint-disable */
import React, { Component, Fragment } from 'react'

export class AboutSection extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }
    
    render() {
        const { keyId, img, text } = this.props;
        return (
            <Fragment>
                <div className="section">
                    <div className="wrapper">
                        <div className="row-3x w-row">
                            <div id={`aboutColI${keyId}`} data-w-id="1138766e-dc1a-b71e-9c8f-f4555f73015b" className="col-3x left _4-img w-col w-col-6">
                                <div className="_4-imgis">
                                    <img src={img} alt="" className="glitch__img" />
                                    <img src={img} alt="" className="glitch__img" />
                                    <img src={img} alt="" className="glitch__img" />
                                    <img src={img} alt="" className="glitch__img" />
                                    <img src={img} alt="" className="glitch__img" />
                                </div>
                                <div className="line-gens">
                                    <div className="green-line">
                                    </div>
                                    <div className="green-line">
                                    </div>
                                    <div className="green-line">
                                    </div>
                                </div>
                            </div>
                            <div id={`aboutColII${keyId}`} className="col-3x left w-clearfix w-col w-col-6">
                                <div className="p-class" dangerouslySetInnerHTML={{ __html: text }}></div>
                            </div>
                        </div>
                        <div className="vertical-line">
                        </div>
                        <div className="vertical-line-25">
                        </div>
                    </div>
                    <div className="fon-greeer">
                    </div>
                    <div className="vertical-line _50">
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AboutSection
