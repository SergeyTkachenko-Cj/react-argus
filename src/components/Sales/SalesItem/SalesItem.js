/* eslint-disable */
import React, { Component, Fragment } from 'react'

export class SalesItem extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
        Webflow.require('ix2').init();
    }

    render() {
        const { image, content } = this.props;
        return (
            <Fragment>
                <div className="news page-news">
                    <div className="div-in-otzivas">
                        <div className="col-otzivas _50-proc aciya-page">
                            <div className="img-people-otzivas otzivas">
                                <img src={image} alt="" className="img-aciya" />
                            </div>
                        </div>
                        <div className="col-otzivas _50-proc left w-clearfix">
                            <div className="p-class" dangerouslySetInnerHTML={{ __html: content }}>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default SalesItem
