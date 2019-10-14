/* eslint-disable */
import React, { Component, Fragment } from 'react'

export class LIcensesBottomContent extends Component {
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
                        <div className="wrapper no-wrappers-padding single ac w-clearfix" dangerouslySetInnerHTML={{ __html: this.props.acf }}>
                        </div>
                        <div className="vertical-line _50">
                        </div>
                        <div className="fon-green">
                        </div>
                        <div className="fon-green right">
                        </div>
                    </div>
                </Fragment>
            )
        }
        return null;
    }
}

export default LIcensesBottomContent
