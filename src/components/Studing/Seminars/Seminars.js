import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../../img/play-arrow.svg';

export class Seminars extends Component {
    state = {
        cat: {},
        services: [],
        posts: [],
        isLoaded: false
    }

    componentDidMount() {
        const getCat = axios.get()
    }

    render() {
        return (
            <Fragment>
                <div class="paddinger">
                </div>
                <div class="section">
                    <div class="wrapper paddings-all w-clearfix">
                        <div class="top-for-brads">
                            <div class="small-h">Обучение в АРГУС-ЭКО</div>
                            <div class="brads">
                                <div class="small-h brads">главная</div>
                                <img src={playarrow} alt="" class="brads-arrow" />
                                <div class="small-h brads">Обучение и семинары</div>
                                <img src={playarrow} alt="" class="brads-arrow" />
                                <div class="small-h brads">семинары</div>
                            </div>
                        </div>
                        <h1>Семинары</h1>
                        <div class="p-class head">Обучим персонал ЭТЛ. Поможем получить удостоверение 3, 4, 5 группы (с правом проведения испытаний и допуском) за 10 дней дистанционно или в нашем собственном учебном центре.</div>
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
                        <div class="news page-news w-clearfix">
                            <div class="card-obuchenie w-clearfix">
                                <div class="small-h">СЕМИНАР - 15 декабря 2019</div>
                                <h3>Налоговые проверки и финмониторинг банков. Практические вопросы и современные требования к бизнесу</h3>
                                <div class="p-class">На семинаре рассмотрят оказание методической помощи членам Ассоциации по исполнению требований...</div>
                                <a href="/single" class="link w-inline-block" data-ix="line-arrow">
                                    <div>подробнее</div>
                                    <div class="before-txt-link">
                                        <div class="fon-arrow">
                                            <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" class="arrow-line" />
                                            <div class="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div class="img-in-news">
                                </div>
                            </div>
                            <div class="card-obuchenie w-clearfix">
                                <div class="small-h">СЕМИНАР - 15 декабря 2019</div>
                                <h3>Формирование стоимости строительства в условиях современного правового и методического обеспечения градостроительной деятельности</h3>
                                <div class="p-class">На семинаре рассмотрят оказание методической помощи членам Ассоциации по исполнению требований...</div>
                                <a href="#" class="link w-inline-block" data-ix="line-arrow">
                                    <div>подробнее</div>
                                    <div class="before-txt-link">
                                        <div class="fon-arrow">
                                            <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" class="arrow-line" />
                                            <div class="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div class="img-in-news">
                                </div>
                            </div>
                            <div class="card-obuchenie w-clearfix">
                                <div class="small-h">СЕМИНАР - 15 декабря 2019</div>
                                <h3>Современные направления строительного контроля на объектах капитального строительства. Обследование строительных конструкций, зданий и сооружений</h3>
                                <div class="p-class">На семинаре рассмотрят оказание методической помощи членам Ассоциации по исполнению требований...</div>
                                <a href="#" class="link w-inline-block" data-ix="line-arrow">
                                    <div>подробнее</div>
                                    <div class="before-txt-link">
                                        <div class="fon-arrow">
                                            <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" class="arrow-line" />
                                            <div class="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div class="img-in-news">
                                </div>
                            </div>
                            <div class="card-obuchenie w-clearfix">
                                <div class="small-h">новость - 20 июля 2019</div>
                                <h3>Стандарты Национального объединения строителей (НОСТРОЙ) на процессы выполнения работ, обязательные к применению с 01.06.2019 г., вопросы внедрения и актуализации</h3>
                                <div class="p-class">На семинаре рассмотрят оказание методической помощи членам Ассоциации по исполнению требований...</div>
                                <a href="#" class="link w-inline-block" data-ix="line-arrow">
                                    <div>читать полностью</div>
                                    <div class="before-txt-link">
                                        <div class="fon-arrow">
                                            <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" class="arrow-line" />
                                            <div class="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div class="img-in-news">
                                </div>
                            </div>
                            <div class="card-obuchenie w-clearfix">
                                <div class="small-h">новость - 20 июля 2019</div>
                                <h3>Налоговые проверки и финмониторинг банков. Практические вопросы и современные требования к бизнесу</h3>
                                <div class="p-class">На семинаре рассмотрят оказание методической помощи членам Ассоциации по исполнению требований...</div>
                                <a href="#" class="link w-inline-block" data-ix="line-arrow">
                                    <div>читать полностью</div>
                                    <div class="before-txt-link">
                                        <div class="fon-arrow">
                                            <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" class="arrow-line" />
                                            <div class="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div class="img-in-news">
                                </div>
                            </div>
                            <div class="card-obuchenie w-clearfix">
                                <div class="small-h">новость - 20 июля 2019</div>
                                <h3>Стандарты Национального объединения строителей (НОСТРОЙ) на процессы выполнения работ, обязательные к применению с 01.06.2019 г., вопросы внедрения и актуализации</h3>
                                <div class="p-class">На семинаре рассмотрят оказание методической помощи членам Ассоциации по исполнению требований...</div>
                                <a href="#" class="link w-inline-block" data-ix="line-arrow">
                                    <div>читать полностью</div>
                                    <div class="before-txt-link">
                                        <div class="fon-arrow">
                                            <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" class="arrow-line" />
                                            <div class="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div class="img-in-news">
                                </div>
                            </div>
                            <div class="card-obuchenie w-clearfix">
                                <div class="small-h">новость - 20 июля 2019</div>
                                <h3>Стандарты Национального объединения строителей (НОСТРОЙ) на процессы выполнения работ, обязательные к применению с 01.06.2019 г., вопросы внедрения и актуализации</h3>
                                <div class="p-class">На семинаре рассмотрят оказание методической помощи членам Ассоциации по исполнению требований...</div>
                                <a href="#" class="link w-inline-block" data-ix="line-arrow">
                                    <div>читать полностью</div>
                                    <div class="before-txt-link">
                                        <div class="fon-arrow">
                                            <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" class="arrow-line" />
                                            <div class="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div class="img-in-news newser">
                                    <div class="_4-imgis">
                                        <img src="<?php bloginfo('template_url'); ?>/images/5d2de0b099a6904df03fa26f_fotolia_45348884_subscription_monthly_m.jpg" alt="" class="glitch__img" />
                                        <img src="<?php bloginfo('template_url'); ?>/images/5d2de0b099a6904df03fa26f_fotolia_45348884_subscription_monthly_m.jpg" alt="" class="glitch__img" />
                                        <img src="<?php bloginfo('template_url'); ?>/images/5d2de0b099a6904df03fa26f_fotolia_45348884_subscription_monthly_m.jpg" alt="" class="glitch__img" />
                                        <img src="<?php bloginfo('template_url'); ?>/images/5d2de0b099a6904df03fa26f_fotolia_45348884_subscription_monthly_m.jpg" alt="" class="glitch__img" />
                                        <img src="<?php bloginfo('template_url'); ?>/images/5d2de0b099a6904df03fa26f_fotolia_45348884_subscription_monthly_m.jpg" alt="" class="glitch__img" />
                                    </div>
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
                    <div class="fon-greeer">
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Seminars
