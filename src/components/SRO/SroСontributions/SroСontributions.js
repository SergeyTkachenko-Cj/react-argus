/* eslint-disable */
import React, { Component, Fragment } from 'react'

export class SroСontributions extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }
    render() {
        const { acf, quote } = this.props;
        if (acf) {
            return (
                <Fragment>
                    {acf.map((block, index) => <div key={index} className="section">
                        <div className={`wrapper no-wrappers-padding ${quote.zagolovok ? 'table_class' : null}`}>
                        <div className="in-wrapper">
                            <div className="small-h">{block["blok_s_tablitsey"]["melkiy_zagolovok"]}</div>
                            <h2 className="h2">{block["blok_s_tablitsey"]["zagolovok_bloka"]}</h2>
                        </div>
                        <div className="logos-clients" style={{ overflowX: 'auto' }} dangerouslySetInnerHTML={{ __html: block["blok_s_tablitsey"]["tablitsa"] }}></div>
                        </div>
                        <div className="vertical-line _50">
                        </div>
                        <div className="fon-green right">
                        </div>
                    </div>)}
                </Fragment>
            )
        }
        return null;
    }
}

export default SroСontributions
