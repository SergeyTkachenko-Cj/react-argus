/* eslint-disable */
import React, { Component, Fragment } from 'react'

export class TableDocuments extends Component {
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
                        <div className="wrapper">
                            <div className="in-wrapper">
                                <div className="small-h">{acf["blok_s_tablitsey"]["melkiy_zagolovok"]}</div>
                                <h2 className="h2">{acf["blok_s_tablitsey"]["zagolovok_bloka"]}</h2>
                            </div>
                            <div className="logos-clients">
                                <div className="div-in-tab" dangerouslySetInnerHTML={{__html: acf["blok_s_tablitsey"]["tablotsya"]}}>
                                    {/* <div className="row-col">
                                        <div className="col-co tops">
                                            <div>
                                                <strong>{acf["tablitsa_dokumentov"]["zagolovok_v_tablitse"]}</strong>
                                            </div>
                                        </div>
                                    </div>
                                    {acf["tablitsa_dokumentov"]["telo_tablitsy"].map((line, index) => <div key={index} className="row-col">
                                        <div className="col-co">
                                            <div>{line["nazvanie_dokumenta"]}</div>
                                        </div>
                                        <div className="col-co">
                                            <div>{line["ekzemplyar_dokumenta"]}</div>
                                        </div>
                                    </div>)}
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>* {acf["tekst_v_podvale"]}</div>
                                        </div>
                                    </div>
                                    <div className="div-block-13">
                                    </div> */}
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
                    </div>
                </Fragment>
            )
        }
        return null;
    }
}

export default TableDocuments
