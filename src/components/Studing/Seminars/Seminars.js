import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../../img/play-arrow.svg';

export class Seminars extends Component {
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
        console.log(this.state);
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="paddinger">
                    </div>
                    <div className="section">
                        <div className="wrapper paddings-all w-clearfix">
                            <div className="top-for-brads">
                                <div className="small-h">Обучение в АРГУС-ЭКО</div>
                                <div className="brads">
                                    <div className="small-h brads">главная</div>
                                    <img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">Обучение и семинары</div>
                                    <img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">{cat.name}</div>
                                </div>
                            </div>
                            <h1>{cat.name}</h1>
                            <div className="p-class head">{cat.description}</div>
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
                            <div className="news page-news w-clearfix">
                                <div className="card-obuchenie w-clearfix">
                                    <div className="small-h">СЕМИНАР - 15 декабря 2019</div>
                                    <h3>Налоговые проверки и финмониторинг банков. Практические вопросы и современные требования к бизнесу</h3>
                                    <div className="p-class">На семинаре рассмотрят оказание методической помощи членам Ассоциации по исполнению требований...</div>
                                    <a href="/single" className="link w-inline-block" data-ix="line-arrow">
                                        <div>подробнее</div>
                                        <div className="before-txt-link">
                                            <div className="fon-arrow">
                                                <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" className="arrow-line" />
                                                <div className="line-arrow">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="img-in-news">
                                    </div>
                                </div>
                                <div className="card-obuchenie w-clearfix">
                                    <div className="small-h">СЕМИНАР - 15 декабря 2019</div>
                                    <h3>Формирование стоимости строительства в условиях современного правового и методического обеспечения градостроительной деятельности</h3>
                                    <div className="p-class">На семинаре рассмотрят оказание методической помощи членам Ассоциации по исполнению требований...</div>
                                    <a href="#" className="link w-inline-block" data-ix="line-arrow">
                                        <div>подробнее</div>
                                        <div className="before-txt-link">
                                            <div className="fon-arrow">
                                                <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" className="arrow-line" />
                                                <div className="line-arrow">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="img-in-news">
                                    </div>
                                </div>
                                <div className="card-obuchenie w-clearfix">
                                    <div className="small-h">СЕМИНАР - 15 декабря 2019</div>
                                    <h3>Современные направления строительного контроля на объектах капитального строительства. Обследование строительных конструкций, зданий и сооружений</h3>
                                    <div className="p-class">На семинаре рассмотрят оказание методической помощи членам Ассоциации по исполнению требований...</div>
                                    <a href="#" className="link w-inline-block" data-ix="line-arrow">
                                        <div>подробнее</div>
                                        <div className="before-txt-link">
                                            <div className="fon-arrow">
                                                <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" className="arrow-line" />
                                                <div className="line-arrow">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="img-in-news">
                                    </div>
                                </div>
                                <div className="card-obuchenie w-clearfix">
                                    <div className="small-h">новость - 20 июля 2019</div>
                                    <h3>Стандарты Национального объединения строителей (НОСТРОЙ) на процессы выполнения работ, обязательные к применению с 01.06.2019 г., вопросы внедрения и актуализации</h3>
                                    <div className="p-class">На семинаре рассмотрят оказание методической помощи членам Ассоциации по исполнению требований...</div>
                                    <a href="#" className="link w-inline-block" data-ix="line-arrow">
                                        <div>читать полностью</div>
                                        <div className="before-txt-link">
                                            <div className="fon-arrow">
                                                <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" className="arrow-line" />
                                                <div className="line-arrow">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="img-in-news">
                                    </div>
                                </div>
                                <div className="card-obuchenie w-clearfix">
                                    <div className="small-h">новость - 20 июля 2019</div>
                                    <h3>Налоговые проверки и финмониторинг банков. Практические вопросы и современные требования к бизнесу</h3>
                                    <div className="p-class">На семинаре рассмотрят оказание методической помощи членам Ассоциации по исполнению требований...</div>
                                    <a href="#" className="link w-inline-block" data-ix="line-arrow">
                                        <div>читать полностью</div>
                                        <div className="before-txt-link">
                                            <div className="fon-arrow">
                                                <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" className="arrow-line" />
                                                <div className="line-arrow">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="img-in-news">
                                    </div>
                                </div>
                                <div className="card-obuchenie w-clearfix">
                                    <div className="small-h">новость - 20 июля 2019</div>
                                    <h3>Стандарты Национального объединения строителей (НОСТРОЙ) на процессы выполнения работ, обязательные к применению с 01.06.2019 г., вопросы внедрения и актуализации</h3>
                                    <div className="p-class">На семинаре рассмотрят оказание методической помощи членам Ассоциации по исполнению требований...</div>
                                    <a href="#" className="link w-inline-block" data-ix="line-arrow">
                                        <div>читать полностью</div>
                                        <div className="before-txt-link">
                                            <div className="fon-arrow">
                                                <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" className="arrow-line" />
                                                <div className="line-arrow">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="img-in-news">
                                    </div>
                                </div>
                                <div className="card-obuchenie w-clearfix">
                                    <div className="small-h">новость - 20 июля 2019</div>
                                    <h3>Стандарты Национального объединения строителей (НОСТРОЙ) на процессы выполнения работ, обязательные к применению с 01.06.2019 г., вопросы внедрения и актуализации</h3>
                                    <div className="p-class">На семинаре рассмотрят оказание методической помощи членам Ассоциации по исполнению требований...</div>
                                    <a href="#" className="link w-inline-block" data-ix="line-arrow">
                                        <div>читать полностью</div>
                                        <div className="before-txt-link">
                                            <div className="fon-arrow">
                                                <img src="<?php bloginfo('template_url'); ?>/images/5d245acd1a0023001b7a6139_play-arrow.svg" alt="" className="arrow-line" />
                                                <div className="line-arrow">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="img-in-news newser">
                                        <div className="_4-imgis">
                                            <img src="<?php bloginfo('template_url'); ?>/images/5d2de0b099a6904df03fa26f_fotolia_45348884_subscription_monthly_m.jpg" alt="" className="glitch__img" />
                                            <img src="<?php bloginfo('template_url'); ?>/images/5d2de0b099a6904df03fa26f_fotolia_45348884_subscription_monthly_m.jpg" alt="" className="glitch__img" />
                                            <img src="<?php bloginfo('template_url'); ?>/images/5d2de0b099a6904df03fa26f_fotolia_45348884_subscription_monthly_m.jpg" alt="" className="glitch__img" />
                                            <img src="<?php bloginfo('template_url'); ?>/images/5d2de0b099a6904df03fa26f_fotolia_45348884_subscription_monthly_m.jpg" alt="" className="glitch__img" />
                                            <img src="<?php bloginfo('template_url'); ?>/images/5d2de0b099a6904df03fa26f_fotolia_45348884_subscription_monthly_m.jpg" alt="" className="glitch__img" />
                                        </div>
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
                        <div className="fon-greeer">
                        </div>
                    </div>
                </Fragment>
            )
        }
        return null;
    }
}

export default Seminars
