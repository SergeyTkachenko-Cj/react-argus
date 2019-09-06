import React, { Component, Fragment } from 'react'

export class LicensesContentBlocks extends Component {
    render() {
        const acf = this.props.acf;
        return (
            <Fragment>
                <div className="section">
                    <div className="wrapper">
                        <div className="row-3x w-row">
                            {acf.map(block => <div className="col-3x left w-clearfix w-col w-col-6" dangerouslySetInnerHTML={{ __html: block["blok_kontenta"] }}></div>)}
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

export default LicensesContentBlocks
