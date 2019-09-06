import React, { Component, Fragment } from 'react'

export class TableСontributions extends Component {
    render() {
        const acf = this.props.acf;
        return (
            <Fragment>
                <div className="section">
                    <div className="wrapper">
                        <div className="in-wrapper">
                            <div className="small-h">cтоимость</div>
                            <h2 className="h2">Взносы</h2>
                        </div>
                        <div className="logos-clients">
                            <div className="div-in-tab">
                                <div className="row-col">
                                    <div className="col-co tops">
                                        <div>
                                            <strong>№п/п</strong>
                                        </div>
                                    </div>
                                    <div className="col-co tops">
                                        <div>
                                            <strong>Лаборатория напряжением до:</strong>
                                        </div>
                                    </div>
                                    <div className="col-co tops">
                                        <div>
                                            <strong>до 1000В</strong>
                                        </div>
                                    </div>
                                    <div className="col-co tops">
                                        <div>
                                            <strong>до 10 кВ
                      <br />до 20 кВ
                      <br />до 35 кВ</strong>
                                        </div>
                                    </div>
                                    <div className="col-co tops">
                                        <div>
                                            <strong>до 110 кВ
                      <br />до 220 кВ
                      <br />до 500 кВ
                      <br />до 750 кВ</strong>
                                        </div>
                                    </div>
                                </div>
                                {acf.map(line => <div className="row-col">
                                    <div className="col-co">
                                        <div>{line.number}</div>
                                    </div>
                                    <div className="col-co">
                                        <div>{line["labolatoiya_napryajeniem_do"]}</div>
                                    </div>
                                    <div className="col-co">
                                        <div>{line["do_1000v"]}</div>
                                    </div>
                                    <div className="col-co">
                                        <div>{line["do_10_kv_do_20_kv_do_35_kv"]}</div>
                                    </div>
                                    <div className="col-co">
                                        <div>{line["do_110_kv_do_220_kv_do_500_kv_do_750_kv"]}</div>
                                    </div>
                                </div>)}
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

export default TableСontributions
