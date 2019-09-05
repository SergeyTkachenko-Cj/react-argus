import React, { Component } from 'react'

export class SroСontributions extends Component {
    render() {
        const lines = this.props.acf.liniya;
        const result = this.props.acf.chlenskiye_vznosy;
        return (
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
                                        <strong>Уровень ответственности</strong>
                                    </div>
                                </div>
                                <div className="col-co tops">
                                    <div>
                                        <strong>Стоимость работ по одному договору, в рублях</strong>
                                    </div>
                                </div>
                                <div className="col-co tops">
                                    <div>
                                        <strong>Размер взноса в компенсиционный фонд возмещения вреда, руб</strong>
                                    </div>
                                </div>
                                <div className="col-co tops">
                                    <div>
                                        <strong>Размер взноса в Компенсационный фонд обеспечения договорных обязательств, в рублях</strong>
                                    </div>
                                </div>
                            </div>
                            {lines.map(line => <div className="row-col">
                                <div className="col-co">
                                    <div>{line.uroven_otvetstvennosti}</div>
                                </div>
                                <div className="col-co">
                                    <div>{line.Stoimost_rabot_po_odnomu_dogovoru}</div>
                                </div>
                                <div className="col-co">
                                    <div>{line.razmer_vznosa_v_kompensitsionnyy_fond_vozmeshcheniya_vreda}</div>
                                </div>
                                <div className="col-co">
                                    <div>{line.razmer_vznosa_v_kompensatsionnyy_fond_obespecheniya_dogovornykh_obyazatelstv}</div>
                                </div>
                            </div>)}
                            <div className="row-col">
                                <div className="col-co">
                                    <div>Членские взносы</div>
                                </div>
                                <div className="col-co">
                                    <div>{result}</div>
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
        )
    }
}

export default SroСontributions
