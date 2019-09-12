import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import SroServices from './SroPageItems/SroServices';

export class Sro extends Component {
    state = {
        cat: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/services_cat')
            .then(res => this.setState({
                cat: res.data.filter(cat => { if (cat.slug === this.props.match.params.slug) return cat }).shift(),
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        const { cat, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="paddinger">
                    </div>
                    <div className="section">
                        <div className="wrapper paddings-all">
                            <div className="top-for-brads">
                                <div className="small-h">{cat.name}</div>
                                <div className="brads">
                                    <div className="small-h brads">главная</div>
                                    <img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">{cat.name}</div>
                                </div>
                            </div>
                            <h1>{cat.name}</h1>
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
                    <SroServices catid={cat.id} />
                    <div className="section">
                        <div className="wrapper no-paddings">
                            <div className="vertical-line">
                            </div>
                            <div className="vertical-line-25">
                            </div>
                            <div className="row-3x w-row">
                                <div className="col-3x left w-clearfix w-col w-col-6">
                                    <h3 className="h2">Что такое СРО?</h3>
                                    <div className="p-class">СРО (Саморегулируемая Организация) - это некоммерческое партнерство,которое объединяет  компании,  осуществляющие строительство,реконструкцию, капитальный ремонт, подготовку проектной документации,инженерные изыскания и энергетические обследования. Членство в СРО имеет серьёзное влияние на перспективы развития Вашего бизнеса. Если Вы хотите осуществлять свою деятельность легально, отвечая всем нормативам по качеству предоставляемых услуг, повышать эффективность и соответствовать ожиданиям своих клиентов, Вам необходимо вступить в СРО.В соответствии с требованиями законодательства, СРО:
                <br />
                                        <br />
                                        <strong>В соответствии с требованиями законодательства, СРО:</strong>
                                        <br />
                                    </div>
                                    <ul>
                                        <li>разрабатывает и утверждает правила и требования, обязательные для всех его членов</li>
                                        <li>формирует компенсационный фонд из членских взносов</li>
                                        <li>регулирует уровень ответственности организаций, в зависимости от суммы заключаемых контрактов</li>
                                    </ul>
                                </div>
                                <div className="col-3x left w-clearfix w-col w-col-6">
                                    <h2 className="h2">Вступление в СРО</h2>
                                    <div className="p-class">
                                        <strong>Ваша организация обязана быть членом СРО если:</strong>
                                        <br />
                                    </div>
                                    <div className="p-class">Вступить в СРО могут юридическое лица, а также индивидуальные предприниматели России и зарубежья.Для вступления необходимо подготовить заявление о приеме в члены предоставить надлежащие документы.Членство в СРО налагает обязанность своевременной оплаты взносов:регулярный членский взнос и единоразовый взнос в компенсационный фонд.Сумма выплат устанавливается внутренними документами партнерства. Также,вступив в СРО, Вы обязаны соответствовать требованиям установленными общим собранием и законодательством РФ.
                <br />
                                    </div>
                                    <ul>
                                        <li>Ваши контракты свыше 3 млн. рублей</li>
                                        <li>Если Вы выполняете работы по капитальному ремонту, строительству и проектированию</li>
                                        <li>Если Ваша организация работает с государственными структурами</li>
                                    </ul>
                                    <div className="p-class">
                                        <strong>Для вступления в СРО Вам нужно предоставить следующие документы:</strong>
                                        <br />
                                    </div>
                                    <ul>
                                        <li>Копия устава.</li>
                                        <li>Свидетельство о постановке на учет в налоговой инспекции (ИНН/КПП)</li>
                                        <li>Свидетельство о регистрации ОГРН и все изменениях (если они имеются)</li>
                                        <li>Коды статистики.</li>
                                        <li>Выписка из Единого государственного реестра не старше 30 дней.</li>
                                        <li>Решение о создании общества, заверенное печатью организации.</li>
                                        <li>Протокол (решение) и приказ о назначении действующего руководителя.</li>
                                        <li>Копии действующих лицензий, сертификатов, аттестатов (если есть – копии, заверенные печатью организации).</li>
                                        <li>Сведения о двух сотрудниках, внесенных в национальный реестр специалистов.</li>
                                        <li>Копии дипломов, удостоверение по повышению квалификации и другие документы, подтверждающие  компетентность сотрудников.</li>
                                        <li>Учетная карточка предприятия (реквизиты, контактная информация)</li>
                                    </ul>
                                </div>
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
                                <div className="div-in-tab tables">
                                    <div className="row-col">
                                        <div className="col-co tops">
                                            <div>
                                                <strong>Платежи
                      <br />
                                                </strong>
                                            </div>
                                        </div>
                                        <div className="col-co tops">
                                            <div>
                                                <strong>СРО Строителей</strong>
                                            </div>
                                        </div>
                                        <div className="col-co tops">
                                            <div>
                                                <strong>СРО Проектировщиков</strong>
                                            </div>
                                        </div>
                                        <div className="col-co tops">
                                            <div>
                                                <strong>СРО Изыскателей</strong>
                                            </div>
                                        </div>
                                        <div className="col-co tops">
                                            <div>
                                                <strong>СРО Энергетиков</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>Минимальный взнос в компенсационный фонд (разовый)</div>
                                        </div>
                                        <div className="col-co">
                                            <div>100 000 руб.</div>
                                        </div>
                                        <div className="col-co">
                                            <div>50 000 руб.</div>
                                        </div>
                                        <div className="col-co">
                                            <div>50 000 руб.</div>
                                        </div>
                                        <div className="col-co">
                                            <div>12 000 руб.</div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>Вступительный взнос (разовый)</div>
                                        </div>
                                        <div className="col-co">
                                            <div>0 руб.</div>
                                        </div>
                                        <div className="col-co">
                                            <div>0 руб.</div>
                                        </div>
                                        <div className="col-co">
                                            <div>5 000 руб.</div>
                                        </div>
                                        <div className="col-co">
                                            <div>0 руб.</div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>Членский взнос (ежемесячный)</div>
                                        </div>
                                        <div className="col-co">
                                            <div>7 500 руб.</div>
                                        </div>
                                        <div className="col-co">
                                            <div>7 500 руб.</div>
                                        </div>
                                        <div className="col-co">
                                            <div>3 500 руб-10 000 руб.(в зависимости от
                    <br />срока оплаты и уровня ответственности).</div>
                                        </div>
                                        <div className="col-co">
                                            <div>5 000 руб.</div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>Наши услуги ПО ВСТУПЛЕНИЮ</div>
                                        </div>
                                        <div className="col-co">
                                            <div>25 000 руб.</div>
                                        </div>
                                        <div className="col-co">
                                            <div>25 000 руб.</div>
                                        </div>
                                        <div className="col-co">
                                            <div>25 000 руб.</div>
                                        </div>
                                        <div className="col-co">
                                            <div>25 000 руб.</div>
                                        </div>
                                    </div>
                                    <div className="row-col">
                                        <div className="col-co">
                                            <div>Расширение до п. 32 и 33 в строительстве,
                    <br />до п. 12, 13
                    <br />в проектировании и
                    <br />до п. 7 в изысканиях</div>
                                        </div>
                                        <div className="col-co">
                                            <div>25 000 руб.</div>
                                        </div>
                                        <div className="col-co">
                                            <div>25 000 руб.</div>
                                        </div>
                                        <div className="col-co">
                                            <div>25 000 руб.</div>
                                        </div>
                                        <div className="col-co">
                                            <div>25 000 руб.</div>
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
                        <div className="wrapper single w-clearfix">
                            <div className="news page-news">
                            </div>
                            <div className="vertical-line-25">
                            </div>
                            <div className="vertical-line">
                            </div>
                            <h2 className="h2">Вступление в СРО с Аргус- Эко</h2>
                            <div className="p-class">
                                <strong>Мы поможем Вашей компании вступить в СРО Проектировщиков “под ключ”.</strong>
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

export default Sro
