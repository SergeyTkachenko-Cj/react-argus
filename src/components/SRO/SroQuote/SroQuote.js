/* eslint-disable */
import React, { Component } from 'react'

export class SroQuote extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }
    render() {
        const acf = this.props.acf;
        if (acf && acf.zagolovok !== '') {
            return (
                <div className="section">
                    <div className="wrapper paddings">
                        <div className="small-h">{acf.zagolovok}</div>
                        <blockquote>{acf.tsitata}</blockquote>
                    </div>
                    <div className="fon-green right">
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default SroQuote
