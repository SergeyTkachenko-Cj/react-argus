import React, { Component } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';

export class SingleSro extends Component {
    state = {
        servise: {},
        img: '',
        isLoaded: false
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div class="section">
                    <div class="wrapper head-wrapper">
                        <div class="row-3x w-row">
                            <div class="col-3x left w-clearfix w-col w-col-6">
                                <div class="top-for-brads">
                                    <a href="/sro" class="link w-inline-block" data-ix="line-arrow">
                                        <div class="before-txt-link revers">
                                            <div class="fon-arrow">
                                                <img src={playarrow} alt="" class="arrow-line" />
                                                <div class="line-arrow">
                                                </div>
                                            </div>
                                        </div>
                                        <div>назад</div>
                                    </a>
                                </div>
                                <h1>СРО проектировщиков</h1>
                                <div class="p-class exc">СРО Проектировщиков – это профессиональное объединение в индустрии проектирования, став частью которого, Вы получите юридическое, финансовое и нормативное содействие.
                                    <br />
                                </div>
                            </div>
                            <div class="col-3x right _4-img-right w-col w-col-6">
                                <div class="top-for-brads lefts">
                                    <div class="brads">
                                        <div class="small-h brads">главная</div>
                                        <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" class="brads-arrow" />
                                        <div class="small-h brads">сро</div>
                                        <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" class="brads-arrow" />
                                        <div class="small-h brads">СРО проектировщиков</div>
                                    </div>
                                </div>
                                <div class="_4-imgis">
                                    <img src="<?php bloginfo('template_url'); ?>/images/5d2d8a49358ee96cfc1bad47_Fotolia_53178721_Subscription_Monthly_M.jpg" alt="" class="glitch__img" />
                                    <img src="<?php bloginfo('template_url'); ?>/images/5d2d8a49358ee96cfc1bad47_Fotolia_53178721_Subscription_Monthly_M.jpg" alt="" class="glitch__img" />
                                    <img src="<?php bloginfo('template_url'); ?>/images/5d2d8a49358ee96cfc1bad47_Fotolia_53178721_Subscription_Monthly_M.jpg" alt="" class="glitch__img" />
                                    <img src="<?php bloginfo('template_url'); ?>/images/5d2d8a49358ee96cfc1bad47_Fotolia_53178721_Subscription_Monthly_M.jpg" alt="" class="glitch__img" />
                                    <img src="<?php bloginfo('template_url'); ?>/images/5d2d8a49358ee96cfc1bad47_Fotolia_53178721_Subscription_Monthly_M.jpg" alt="" class="glitch__img" />
                                </div>
                                <div class="line-gens">
                                    <div class="green-line">
                                    </div>
                                    <div class="green-line">
                                    </div>
                                    <div class="green-line">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="vertical-line">
                        </div>
                        <div class="vertical-line-25">
                        </div>
                    </div>
                    <div class="fon-greeer">
                    </div>
                    <div class="vertical-line _50">
                    </div>
                </div>
                <div class="section">
                    <div class="wrapper">
                        <div class="row-3x w-row">
                            <div class="col-3x left w-clearfix w-col w-col-6">
                                <h3 class="h2">Что такое СРО Проектировщиков?:</h3>
                                <div class="p-class">СРО Проектировщиков – это профессиональное объединение в индустрии проектирования, став частью которого, Вы получите юридическое, финансовое и нормативное содействие. Сюда входит выдача допусков для осуществления проектировочной деятельности, компенсация убытков, защита интересов,разработка нормативов для работ и услуг, а также обеспечение требований законодательства.
            <br />
                                    <br />
                                    <strong>Для чего нужно членство в СРО Проектировщиков:</strong>
                                    <br />
                                </div>
                                <ul>
                                    <li>Вы хотите работать честно, соблюдая закон</li>
                                    <li>Ваши контракты превышают 3.000.000₽</li>
                                    <li>Вы работаете в сфере капитального ремонта, строительства и проектирования</li>
                                    <li>Ваша фирма работает с госструктурами</li>
                                    <li>Вы участвуете в гостендерах</li>
                                    <li>Вам нужно сократить риски и увеличить прибыль</li>
                                    <li>Вы стремитесь обойти конкурентов и укрепить доверие заказчиков</li>
                                </ul>
                            </div>
                            <div class="col-3x left w-clearfix w-col w-col-6">
                                <h2 class="h2">Вступление в СРО Проектировщиков:</h2>
                                <div class="p-class">
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
                        <div class="vertical-line">
                        </div>
                        <div class="vertical-line-25">
                        </div>
                    </div>
                    <div class="fon-greeer">
                    </div>
                    <div class="vertical-line _50">
                    </div>
                </div>
                <div class="section">
                    <div class="wrapper">
                        <div class="in-wrapper">
                            <div class="small-h">cтоимость</div>
                            <h2 class="h2">Взносы</h2>
                        </div>
                        <div class="logos-clients">
                            <div class="div-in-tab">
                                <div class="row-col">
                                    <div class="col-co tops">
                                        <div>
                                            <strong>Уровень ответственности</strong>
                                        </div>
                                    </div>
                                    <div class="col-co tops">
                                        <div>
                                            <strong>Стоимость работ по одному договору, в рублях</strong>
                                        </div>
                                    </div>
                                    <div class="col-co tops">
                                        <div>
                                            <strong>Размер взноса в компенсиционный фонд возмещения вреда, руб</strong>
                                        </div>
                                    </div>
                                    <div class="col-co tops">
                                        <div>
                                            <strong>Размер взноса в Компенсационный фонд обеспечения договорных обязательств, в рублях</strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="row-col">
                                    <div class="col-co">
                                        <div>Первый</div>
                                    </div>
                                    <div class="col-co">
                                        <div>не превышает 25 млн</div>
                                    </div>
                                    <div class="col-co">
                                        <div>50 000</div>
                                    </div>
                                    <div class="col-co">
                                        <div>150 000</div>
                                    </div>
                                </div>
                                <div class="row-col">
                                    <div class="col-co">
                                        <div>Второй</div>
                                    </div>
                                    <div class="col-co">
                                        <div>не превышает 50 млн</div>
                                    </div>
                                    <div class="col-co">
                                        <div>150 000</div>
                                    </div>
                                    <div class="col-co">
                                        <div>350 000</div>
                                    </div>
                                </div>
                                <div class="row-col">
                                    <div class="col-co">
                                        <div>Третий</div>
                                    </div>
                                    <div class="col-co">
                                        <div>Не превышает 300 млн</div>
                                    </div>
                                    <div class="col-co">
                                        <div>500 000</div>
                                    </div>
                                    <div class="col-co">
                                        <div>2 500 000</div>
                                    </div>
                                </div>
                                <div class="row-col">
                                    <div class="col-co">
                                        <div>Четвертый</div>
                                    </div>
                                    <div class="col-co">
                                        <div>Составляет 300 млн и более</div>
                                    </div>
                                    <div class="col-co">
                                        <div>1 000 000</div>
                                    </div>
                                    <div class="col-co">
                                        <div>3 500 000</div>
                                    </div>
                                </div>
                                <div class="row-col">
                                    <div class="col-co">
                                        <div>Членские взносы</div>
                                    </div>
                                    <div class="col-co">
                                        <div>8 500 руб./мес (25 500 руб./квартал)</div>
                                    </div>
                                </div>
                                <div class="div-block-13">
                                </div>
                            </div>
                        </div>
                        <div class="vertical-line-25">
                        </div>
                        <div class="vertical-line">
                        </div>
                    </div>
                    <div class="vertical-line _50">
                    </div>
                    <div class="fon-green right">
                    </div>
                </div>
                <div class="section">
                    <div class="wrapper paddings">
                        <div class="small-h">Вступление в СРО Проектировщиков с Аргус - Эко</div>
                        <blockquote>Мы помогаем вступить в одну из самых надёжных СРО «Ассоциация Строительных Компаний «Межрегиональный Строительный Комплекс» (СРО «АСК «МСК»)</blockquote>
                    </div>
                    <div class="fon-green right">
                    </div>
                </div>
                <div class="section">
                    <div class="wrapper">
                        <div class="row-3x w-row">
                            <div class="col-3x left w-col w-col-6">
                                <h2 class="h2">Почему СРО АСК “МСК”</h2>
                                <ul>
                                    <li>Осуществляет деятельность с 2009 года</li>
                                    <li>Компенсационный фонд СРО в полном объеме и размещен в Сбербанке</li>
                                    <li>Страховка не нужна</li>
                                    <li>Входит в операторы национального реестра специалистов</li>
                                    <li>Строительное и Проектное СРО под одной крышей</li>
                                    <li>СРО Мосводоканал, МОЭК, Москоллектор, ОЭК - входят в состав членов</li>
                                    <li>Представители СРО относятся к МКАС (международный коммерческий арбитраж) при ТПП РФ и рассматривают экономические споры между членами и их контрагентами (сокращены сроки рассмотрения, возможность выбора арбитра, решения носят обязательный характер и подлежат принудительному исполнению, решения суда носят окончательный характер)</li>
                                </ul>
                            </div>
                            <div class="col-3x left w-clearfix w-col w-col-6">
                                <div class="p-class">
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
                        </div>
                        <div class="vertical-line">
                        </div>
                        <div class="vertical-line-25">
                        </div>
                    </div>
                    <div class="vertical-line _50">
                    </div>
                    <div class="fon-greeer">
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleSro
