import React, { Component, Fragment } from 'react'

export class LIcensesBottomContent extends Component {
    render() {
        const acf = this.props.acf;
        if (acf) {
            return (
                <Fragment>
                    <div className="section">
                        <div className="wrapper single ac w-clearfix" dangerouslySetInnerHTML={{ __html: this.props.acf}}>
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
