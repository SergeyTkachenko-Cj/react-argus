/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import NotFound from '../Error/NotFound';

export class Contacts extends Component {
    state = {
        page: {},
        options: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let getSlug = this.props.location.pathname.replace('/', '');
        const getPage = axios.get(`https://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/page/${getSlug}`);
        const getOptions = axios.get('https://admin.argus-eko.ru/wp-json/acf/v3/options/options');

        Promise.all([getPage, getOptions])
            .then(res => this.setState({
                page: res[0].data,
                options: res[1].data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { page, options, isLoaded } = this.state;
        const socialNet = [
            {ssylka: "https://www.youtube.com/channel/UCki5LRGXPm2X1yrWoEQC6pA", nazvanie: "YouTube"},
            {ssylka: "https://instagram.com/gk_argus?igshid=2yng5geom75p", nazvanie: "Instagram"},
            {ssylka: "https://www.facebook.com/arguseko/", nazvanie: "Facebook"}
        ];

        if (isLoaded) {
            return (
                <Fragment>
                    <div className="paddinger">
                    </div>
                    <div className="section">
                        <div className="wrapper paddings-all">
                            <div className="top-for-brads">
                                <Link to={`/about-us-page`} className="link w-inline-block" data-ix="line-arrow">
                                    <div className="before-txt-link revers">
                                        <div className="fon-arrow">
                                            <img src={playarrow} alt="" className="arrow-line" />
                                            <div className="line-arrow">
                                            </div>
                                         </div>
                                    </div>
                                    <div>назад</div>
                                </Link>
                                {/* <div className="small-h">мы на связи всегда</div> */}
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
                                    {/* <div className="p-class">Наш адрес: {options.acf.adres}
                                        <br />‍
                                        <br />Телефон/факс: {options.acf.telefon} - многоканальный
                                        <br />Телефон: {options.acf["telefon_2"]}
                                        <br />Почта: <a href={`mailto:${options.acf.email}`}>{options.acf.email}</a>
                                        <br />
                                        <br />
                                        {options.acf["sotsyalnie_seti"].map((link, index) => <Fragment key={index}><a href={link.ssylka}>{link.nazvanie}</a><br /></Fragment>)}
                                        <br />
                                        <br />
                                    </div> */}

                                    {/* Hardcoded contacts due to WP interface issues */}

                                    <div className="p-class">Наш адрес: Проспект Маршала Жукова, дом 2, офис 227 (2-й этаж)
                                        <br />‍
                                        <br />Телефон/факс: +7 (495) 585-09-82 - многоканальный
                                        <br />Телефон: +7 (495) 506-38-27
                                        <br />Почта: <a href={`mailto:argus@argus-eko.ru`}>argus@argus-eko.ru</a>
                                        <br />
                                        <br />
                                        {socialNet.map((link, index) => <Fragment key={index}><a href={link.ssylka} target="_blank">{link.nazvanie}</a><br /></Fragment>)}
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
        return <NotFound />;
    }
}

export default Contacts
