/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';

export class LicensesSpecials extends Component {
    state = {
        tel: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://admin.argus-eko.ru/wp-json/acf/v3/options/options')
            .then(res => this.setState({
                tel: res.data.acf.telefon,
                isLoaded: true
            }))
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const acf = this.props.acf;
        const tel = this.state.tel;
        if (acf["tekst_spetspredlojenia"] && tel) {
            return (
                <Fragment>
                    <div className="section">
                        <div className="wrapper no-wrappers-padding single actions w-clearfix">
                            <div className="vertical-line-25">
                            </div>
                            <div className="vertical-line">
                            </div>
                            <h2 className="h2 ac">СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ!</h2>
                            <div className="p-class ac">
                                <strong>{acf["tekst_spetspredlojenia"]}<br /></strong>
                                <br />
                                <span className="span-ogo">{acf.tsena}<br /><br /></span>
                                <a href={`tel:${tel}`}>{tel}
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
