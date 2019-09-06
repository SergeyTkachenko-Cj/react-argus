import React, { Component, Fragment } from 'react'

export class TableDocuments extends Component {
    render() {
        const acf = this.props.acf;
        return (
            <Fragment>
                <div className="section">
                    <div className="wrapper">
                        <div className="in-wrapper">
                            <div className="small-h">документы</div>
                            <h2 className="h2">{acf["zagolovok_bloka"]}</h2>
                        </div>
                        <div className="logos-clients">
                            <div className="div-in-tab">
                                <div className="row-col">
                                    <div className="col-co tops">
                                        <div>
                                            <strong>{acf["zagolovok_v_tablitse"]}</strong>
                                        </div>
                                    </div>
                                </div>
                                {acf["telo_tablitsy"].map(line => <div className="row-col">
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
                                </div>
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
}

export default TableDocuments
