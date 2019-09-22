import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';

export class Contacts extends Component {
    state = {
        page: {},
        options: [],
        isLoaded: false
    }

    componentDidMount() {
        let getSlug = this.props.location.pathname.replace('/', '');
        const getPage = axios.get(`http://a0325522.xsph.ru/wp-json/better-rest-endpoints/v1/page/${getSlug}`);
        const getOptions = axios.get('http://a0325522.xsph.ru/wp-json/acf/v3/options/options');

        Promise.all([getPage, getOptions])
            .then(res => this.setState({
                page: res[0].data,
                options: res[1].data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        const { page, options, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="paddinger">
                    </div>
                    <div className="section">
                        <div className="wrapper paddings-all">
                            <div className="top-for-brads">
                                <div className="small-h">мы на связи всегда</div>
                                <div className="brads">
                                    <div className="small-h brads">главная</div>
                                    <img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">о нас</div>
                                    <img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">{page.title}</div>
                                </div>
                            </div>
                            <h1>{page.title}</h1>
                            <div className="vertical-line">
                            </div>
                            <div className="vertical-line-25">
                            </div>
                        </div>
                        <div className="fon-greeer">
                        </div>
                        <div className="vertical-line _50">
                        </div>
                    </div>
                    <div className="section">
                        <div className="wrapper no-paddings">
                            <div className="row-3x w-row">
                                <div className="col-3x left top-padding w-clearfix w-col w-col-6">
                                    <div className="p-class">Наш адрес: {options.acf.adres}
                                        <br />‍
                                        <br />Телефон/факс: {options.acf.telefon} - многоканальный
                                        <br />Телефон: <a href={`tel:${options.acf["telefon_2"]}`}>{options.acf["telefon_2"]}</a>
                                        <br />Почта: <a href={`mailto:${options.acf.email}`}>{options.acf.email}</a>
                                        <br />
                                        <br />
                                        {options.acf["sotsyalnie_seti"].map((link, index) => <Fragment key={index}><a href={link.ssylka}>{link.nazvanie}</a><br /></Fragment>)}
                                        <br />
                                        <br />
                                    </div>
                                </div>
                                <div className="col-3x w-col w-col-6">
                                    <div className="html-embed w-embed w-iframe">
                                        <iframe style={{ border: '0', width: '100%' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.9043487276413!2d37.504297979164775!3d55.7775330853892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5490bde922317%3A0x2597de16b5c4f8a!2z0JDQoNCT0KPQoS3QrdCa0J4sINC60L7QvNC_0LDQvdC40Y8g0L_QviDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INGN0LvQtdC60YLRgNC-0LvQsNCx0L7RgNCw0YLQvtGA0LjQuQ!5e0!3m2!1sru!2sru!4v1559634254635!5m2!1sru!2sru" width="600" height="450" frameBorder="0" allowFullScreen="allowfullscreen">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="vertical-line">
                            </div>
                            <div className="vertical-line-25">
                            </div>
                        </div>
                        <div className="vertical-line _50">
                        </div>
                    </div>
                </Fragment>
            )
        }
        return null;
    }
}

export default Contacts
