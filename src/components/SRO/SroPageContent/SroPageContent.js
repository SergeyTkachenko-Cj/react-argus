/* eslint-disable */
import React, { Component, Fragment } from 'react'

export class SroPageContent extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }
    render() {
        const acf = this.props.acf;
        if (acf) {
            return (
                <Fragment>
                    <div className="section">
                        <div className="wrapper no-paddings">
                            <div className="vertical-line">
                            </div>
                            <div className="vertical-line-25">
                            </div>
                            <div className="row-3x w-row">
                                {acf.map((block, index) => <div key={index} className="col-3x left w-clearfix w-col w-col-6" dangerouslySetInnerHTML={{ __html: block["blok_kontenta"] }}></div>)}
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
        return null;
    }
}

export default SroPageContent
