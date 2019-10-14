/* eslint-disable */
import React, { Component, Fragment } from 'react'

export class SroTableColumn extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }
    render() {
        return (
            <Fragment>
                <div className="table-col">
                    <div className="table-col-item tops">{this.props.col["zagolovok_stolbtsya"]}</div>
                    {this.props.col["telo_stolbtsya"].map((item, index) => <div key={index} className="table-col-item" style={{ height: this.props.height }}>{item.yacheyka}</div>)}
                </div>
            </Fragment>
        )
    }
}

export default SroTableColumn
