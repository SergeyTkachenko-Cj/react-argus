import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import LicensesSpecials from './LicensesSpecials/LicensesSpecials';
import LicensesContentBlocks from './LicensesContentBlocks/LicensesContentBlocks';
import TableСontributions from './TableСontributions/TableСontributions';
import TableDocuments from './TableDocuments/TableDocuments';

export class SingleLicenses extends Component {
    state = {
        service: {},
        img: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`http://a0325522.xsph.ru/wp-json/better-rest-endpoints/v1/services/${this.props.match.params.slug}`)
            .then(res => this.setState({
                service: res.data,
                img: res.data.media.large,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }
    render() {
        const { service, img, isLoaded } = this.state;
        console.log(service);
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="paddinger">
                    </div>
                    <div className="section">
                        <div className="wrapper head-wrapper">
                            <div className="row-3x w-row">
                                <div className="col-3x left w-clearfix w-col w-col-6">
                                    <div className="top-for-brads">
                                        <a href="/sro" className="link w-inline-block" data-ix="line-arrow">
                                            <div className="before-txt-link revers">
                                                <div className="fon-arrow">
                                                    <img src={playarrow} alt="" className="arrow-line" />
                                                    <div className="line-arrow">
                                                    </div>
                                                </div>
                                            </div>
                                            <div>назад</div>
                                        </a>
                                    </div>
                                    <h1>{service.title}</h1>
                                    <div className="p-class exc" dangerouslySetInnerHTML={{ __html: service.content }}></div>
                                </div>
                                <div className="col-3x right _4-img-right w-col w-col-6">
                                    <div className="top-for-brads lefts">
                                        <div className="brads">
                                            <div className="small-h brads">главная</div>
                                            <img src={playarrow} alt="" className="brads-arrow" />
                                            <div className="small-h brads">лицензии</div>
                                            <img src={playarrow} alt="" className="brads-arrow" />
                                            <div className="small-h brads">{service.title}</div>
                                        </div>
                                    </div>
                                    <div className="_4-imgis">
                                        <img src={service.media["post-thumbnail"]} alt="" className="glitch__img" />
                                        <img src={service.media["post-thumbnail"]} alt="" className="glitch__img" />
                                        <img src={service.media["post-thumbnail"]} alt="" className="glitch__img" />
                                        <img src={service.media["post-thumbnail"]} alt="" className="glitch__img" />
                                        <img src={service.media["post-thumbnail"]} alt="" className="glitch__img" />
                                    </div>
                                    <div className="line-gens">
                                        <div className="green-line">
                                        </div>
                                        <div className="green-line">
                                        </div>
                                        <div className="green-line">
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                    <LicensesSpecials acf={service.acf["special_offer"]}/>
                    <LicensesContentBlocks acf={service.acf["bloki_s_kontentom"]} />
                    <TableСontributions />
                    <TableDocuments />
                    <div className="section">
                        <div className="wrapper no-paddings">
                            <div className="in-wrapper">
                                <div className="small-h">документы</div>
                                <h2 className="h2">Пакет документов необходимых для регистрации электролаборатории:</h2>
                            </div>
                            <div className="news page-news">
                                <div className="div-in-otzivas">
                                    <div className="col-otzivas _50-proc">
                                        <a href="#" className="img-people-otzivas otzivas w-inline-block w-lightbox">
                                            <img src="<?php bloginfo('template_url'); ?>/images/5d3575f4166bd87616addca6_reg-elektro-mo.jpg" alt="" className="img-otziv" />
                                            {/* <script type="application/json" className="w-json">
                                                {{
                                                    "items": [
                                                        {
                                                            "type": "image",
                                                            "_id": "5d2dca9e99a69057953ef34d",
                                                            "fileName": "5d2dca9e99a69057953ef34d_file.jpg",
                                                            "origFileName": "file.jpg",
                                                            "width": 509,
                                                            "height": 700,
                                                            "fileSize": 33408,
                                                            "url": "https://uploads-ssl.webflow.com/5c80c10ea8bd4b71070c4957/5d2dca9e99a69057953ef34d_file.jpg"
                                                        }
                                                    ]
                                                }}
                                            </script> */}
                                        </a>
                                    </div>
                                    <div className="col-otzivas _50-proc left">
                                        <a href="#" className="img-people-otzivas otzivas w-inline-block w-lightbox">
                                            <img src="<?php bloginfo('template_url'); ?>/images/5d25e4190574ee83b775c01b_reg-elektro.jpg" alt="" className="img-otziv" />
                                            {/* <script type="application/json" className="w-json">
                                                {{
                                                    "items": [
                                                        {
                                                            "type": "image",
                                                            "_id": "5d2dca9e99a69057953ef34d",
                                                            "fileName": "5d2dca9e99a69057953ef34d_file.jpg",
                                                            "origFileName": "file.jpg",
                                                            "width": 509,
                                                            "height": 700,
                                                            "fileSize": 33408,
                                                            "url": "https://uploads-ssl.webflow.com/5c80c10ea8bd4b71070c4957/5d2dca9e99a69057953ef34d_file.jpg"
                                                        }
                                                    ]
                                                }}
                                            </script> */}
                                        </a>
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
                    </div>
                    <div className="section">
                        <div className="wrapper single ac w-clearfix">
                            <div className="news page-news">
                            </div>
                            <div className="vertical-line-25">
                            </div>
                            <div className="vertical-line">
                            </div>
                            <h2 className="h2">Регистрация электролаборатории с Аргус- Эко</h2>
                            <div className="p-class">
                                <strong>Мы поможем Вашей компании зарегестрировать электролабораторию “под ключ”.</strong>
                                <br />
                                <br />Соберём, проверим и подготовим все нужные бумаги за Вас. Оперативно проконсультируем и предоставим любую информацию на всех этапах работы.Стоимость услуг -
            <strong>25.000₽</strong>(35.000₽ если работы особо опасные, уникальные или технически-сложные).
            <br />‍
            <br />Позвоните в наш офис и мы подскажем как быстро, доступно и без бумажной волокиты вступить в СРО Проектировщиков:
            <br />
                                <a href="#">+7 (495) 585-09-82</a>
                                <br />
                                <a href="#">+7 (925) 506-38-27</a>
                                <br />
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

export default SingleLicenses
