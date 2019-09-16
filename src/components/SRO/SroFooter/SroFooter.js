import React, { Component, Fragment } from 'react'

export class SroFooter extends Component {
    render() {
        const acf = this.props.acf;
        if (acf) {
            return (
                <Fragment>
                    <div className="section">
                        <div className="wrapper single w-clearfix">
                            <div className="news page-news">
                            </div>
                            <div className="vertical-line-25">
                            </div>
                            <div className="vertical-line">
                            </div>
                            <div dangerouslySetInnerHTML={{__html: acf}}></div>
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

export default SroFooter
