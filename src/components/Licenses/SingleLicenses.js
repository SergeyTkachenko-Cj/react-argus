import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import LicensesSpecials from './LicensesSpecials/LicensesSpecials';

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
                    <div className="section">
                        <div className="wrapper">
                            <div className="row-3x w-row">
                                <div className="col-3x left w-clearfix w-col w-col-6">
                                    <div className="p-class">Главное отличие нашей организации в том, что все электролаборатории, регистрируемые с нашей помощью в течение всего времени действия свидетельства о регистрации электролаборатории могут получить консультации порядку проведения электроизмерительных испытаний, грамотному составлению технических отчетов, консультации по интересующим видам электроизмерительных приборов.
                <br />
                                        <br />Стоимость наших услуг по регистрации электролаборатории для заказчиков по городу Москве составит
                <strong>73 000</strong>рублей (лаборатория до 35кВ включительно),  для Московской области
                <strong>120 000</strong>рублей. Обращаем Ваше
                <strong>внимание, для заказчиков Москвы</strong>, что в настоящие время действует обязательный
                <strong>платеж  в размере 24 780 рублей</strong>с учетом НДС, этот платеж не входит в стоимость наших услуг. В результате Вы получите свидетельство о  регистрации электролаборатории в Ростехнадзоре. Данный документ выдается сроком на
                <strong>3 года.
                  <br />
                                            <br />
                                        </strong>
                                        <a href="http://argus-eko.ru/counter/counter.php?book=1" target="_parent">
                                            <strong>Что еще необходимо знать про лабораторию вы можете посмотреть здесь</strong>
                                        </a>
                                        <br />
                                    </div>
                                </div>
                                <div className="col-3x left w-clearfix w-col w-col-6">
                                    <h2 className="h2">Пакет документов необходимых для регистрации электролаборатории:</h2>
                                    <ul>
                                        <li>Реквизиты организации (с обязательным указанием телефона, электронной почты, фактического расположение ЭЛ и банковских реквизитов)</li>
                                        <li>Устав организации (титульная страница, 1-й и последний лист) -
                  <strong>копия</strong>
                                        </li>
                                        <li>Приказ о назначении генерального директора -
                  <strong>копия</strong>
                                        </li>
                                        <li>ИНН (Свидетельство о постановке на налоговый учет) -
                  <strong>копия</strong>
                                        </li>
                                        <li>ОГРН (Свидетельство о государственной регистрации) -
                  <strong>копия</strong>
                                        </li>
                                        <li>Коды статистики -
                  <strong>копия</strong>
                                        </li>
                                        <li>Свидетельства о поверке приборов, используемых в ЭЛ (в случае их отсутствия предоставить перечень оборудования с заводскими номерами) -
                  <strong>копия</strong>
                                        </li>
                                        <li>Дипломы об образовании сотрудников электролаборатории -
                  <strong>копия</strong>
                                        </li>
                                        <li>Аттестация персонала лаборатории (журнал, удостоверения с подтверждением группы по электробезопасности с отметкой о допуске к специальным работам, УПК о прохождения курса по проведению специальных работ) -
                  <strong>копия</strong>
                                        </li>
                                    </ul>
                                    <div className="p-class">
                                        <span className="small-text">* В случае, если аттестация на сотрудников лаборатории отсутствует, а в организации имеется действующий журнал по электробезопасности необходимо предоставить его подлинник</span>
                                        <br />
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
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>1</div>
                                        </div>
                                        <div className="col-co">
                                            <div>Комплекс услуг по подготовке и сопровождению документов для регистрации электроизмерительной лаборатории:</div>
                                        </div>
                                        <div className="col-co">
                                            <div>60 000₽</div>
                                        </div>
                                        <div className="col-co">
                                            <div>65 000₽</div>
                                        </div>
                                        <div className="col-co">
                                            <div>120 000₽</div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>2</div>
                                        </div>
                                        <div className="col-co">
                                            <div>Обязательный платеж за проведение процедуры рассмотрения и экспертизы предоставляемых документов. (Выставляется счет службой Ростехнадзора после подачи комплекта документов.)</div>
                                        </div>
                                        <div className="col-co">
                                            <div>25 200₽</div>
                                        </div>
                                        <div className="col-co">
                                            <div>25 200₽</div>
                                        </div>
                                        <div className="col-co">
                                            <div>25 200₽</div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>3</div>
                                        </div>
                                        <div className="col-co">
                                            <div>Обучение персонала электролаборатории (3 человека с допуском к испытаниям-измерениям в электроустановке и повышением квалификации)</div>
                                        </div>
                                        <div className="col-co">
                                            <div>15 600₽</div>
                                        </div>
                                        <div className="col-co">
                                            <div>29 700₽</div>
                                        </div>
                                        <div className="col-co">
                                            <div>89 100₽</div>
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
                    <div className="section">
                        <div className="wrapper">
                            <div className="in-wrapper">
                                <div className="small-h">документы</div>
                                <h2 className="h2">Пакет документов необходимых для регистрации электролаборатории:</h2>
                            </div>
                            <div className="logos-clients">
                                <div className="div-in-tab">
                                    <div className="row-col">
                                        <div className="col-co tops">
                                            <div>
                                                <strong>Реквизиты организации (с обязательным указанием телефона, электронной почты, фактического расположение ЭЛ и банковских реквизитов)</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>Устав организации (титульная страница, 1-й и последний лист)</div>
                                        </div>
                                        <div className="col-co">
                                            <div>копия</div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>Приказ о назначении генерального директора</div>
                                        </div>
                                        <div className="col-co">
                                            <div>копия</div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>ИНН (Свидетельство о постановке на налоговый учет)</div>
                                        </div>
                                        <div className="col-co">
                                            <div>копия</div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>ОГРН (Свидетельство о государственной регистрации)</div>
                                        </div>
                                        <div className="col-co">
                                            <div>копия</div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>Коды статистики</div>
                                        </div>
                                        <div className="col-co">
                                            <div>копия</div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>Свидетельства о поверке приборов, используемых в ЭЛ (в случае их отсутствия предоставить перечень оборудования с заводскими номерами)</div>
                                        </div>
                                        <div className="col-co">
                                            <div>копия</div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>Дипломы об образовании сотрудников электролаборатории</div>
                                        </div>
                                        <div className="col-co">
                                            <div>копия</div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>Аттестация персонала лаборатории (журнал, удостоверения с подтверждением группы по электробезопасности с отметкой о допуске к специальным работам, УПК о прохождения курса по проведению специальных работ)</div>
                                        </div>
                                        <div className="col-co">
                                            <div>копия</div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>* В случае, если аттестация на сотрудников лаборатории отсутствует, а в организации имеется действующий журнал по электробезопасности необходимо предоставить его подлинник</div>
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
