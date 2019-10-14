/* eslint-disable */
import React, { Component } from 'react'

export class SroContent extends Component {
    componentDidUpdate(){
        Webflow.destroy();
        Webflow.ready();
    }
    render() {
        const acf = this.props.acf
        if (acf) {
            return (
                <div className="section">
                    <div className="wrapper no-wrappers-padding">
                        <div className="row-3x w-row">
                            {acf.map((item, index) => <div key={index} className="col-3x left w-clearfix w-col w-col-6" dangerouslySetInnerHTML={{ __html: item.kontent }}></div>)}
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
            )
        }
        return null;
    }
}

export default SroContent
