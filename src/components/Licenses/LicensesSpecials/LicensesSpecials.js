import React, { Component, Fragment } from 'react'

export class LicensesSpecials extends Component {
    render() {
        const acf = this.props.acf;
        console.log(acf);
        if (acf["tekst_spetspredlojenia"]) {
            return (
                <Fragment>
                    <div className="section">
                        <div className="wrapper single actions w-clearfix">
                            <div className="vertical-line-25">
                            </div>
                            <div className="vertical-line">
                            </div>
                            <h2 className="h2 ac">СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ!</h2>
                            <div className="p-class ac">
                                <strong>{acf["tekst_spetspredlojenia"]}<br /></strong>
                                <br />
                                <span className="span-ogo">{acf.tsena}</span>
                                <a href="tel:+74955850982">
                                    <br />
                                </a>
                            </div>
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

export default LicensesSpecials
