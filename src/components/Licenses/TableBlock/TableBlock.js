/* eslint-disable */
import React, { Component, Fragment } from 'react'

export class TableBlock extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        if (this.props.acf) {
            return (
                <Fragment>
                    {this.props.acf.map((block, index) => <div key={index} className="section">
                        <div className="wrapper no-wrappers-padding">
                            <div className="in-wrapper">
                                <div className="small-h">{block["blok_s_tablitsey"]["melkiy_zagolovok"]}</div>
                                <h2 className="h2">{block["blok_s_tablitsey"]["zagolovok_bloka"]}</h2>
                            </div>
                            <div className="logos-clients">
                                <div className={`${block.blok_s_tablitsey.zagolovok_bloka === 'Реквизиты для оплаты' ? 'mchska div-in-tab' : 'div-in-tab'}`} 
                                     style={{overflowX: 'auto'}} 
                                     dangerouslySetInnerHTML={{__html: block["blok_s_tablitsey"]["tablitsa"]}}>
                                </div>
                            </div>
                            <div className="vertical-line-25">
                            </div>
                            <div className="vertical-line">
                            </div>
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

export default TableBlock
