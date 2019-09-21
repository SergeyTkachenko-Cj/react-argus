import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import AboutSection from './AboutSection/AboutSection';

export class About extends Component {
    state = {
        page: {},
        isLoaded: false
    }

    componentDidMount() {
        let getSlug = this.props.location.pathname.replace('/', '');
        axios.get(`http://a0325522.xsph.ru/wp-json/better-rest-endpoints/v1/page/${getSlug}`)
            .then(res => this.setState({
                page: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }
    render() {
        console.log(this.state);
        const { page, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <div class="paddinger">
                    </div>
                    <div class="section">
                        <div class="wrapper paddings-all">
                            <div class="top-for-brads">
                                <div class="small-h">{page.title}</div>
                                <div class="brads">
                                    <div class="small-h brads">главная</div>
                                    <img src={playarrow} alt="" class="brads-arrow" />
                                    <div class="small-h brads">{page.title}</div>
                                </div>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: page.content}}>

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
                    {page.acf.sektsii.map(item => <AboutSection img={item.kartinka} text={item["tekstoviy_blok"]}/>)}
                    <div class="section">
                        <div class="wrapper no-paddings">
                            <div class="left-div">
                                <div class="small-h">отзывы</div>
                                <h2>Вот что о нас говорят</h2>
                            </div>
                            <div class="vertical-line">
                            </div>
                            <div class="vertical-line-25">
                            </div>
                        </div>
                        <div class="fon-greeer">
                        </div>
                        <div class="fon-green">
                        </div>
                        <div class="vertical-line _50">
                        </div>
                    </div>
                    <div class="section">
                        <div class="wrapper no-paddings">
                            <div data-animation="slide" data-duration="500" data-infinite="1" class="slider-otzivi w-slider">
                                <div class="w-slider-mask">
                                    <div class="w-slide">
                                        <div class="div-in-otzivas">
                                            <div class="col-otzivas">
                                                <div class="img-people-otzivas">
                                                </div>
                                            </div>
                                            <div class="col-otzivas _50-proc">
                                                <div class="small-h">Иванов С.С. (Генеральный директор ООО “СПК Высота”)</div>
                                                <blockquote class="itatas">Все работы и, предусмотренные договорами обязательства, были выполнены в сроки. Также хочу отметить доброжелательность сотрудников Вашей компании и оперативность в оказании услуг и предоставлении необходимой информации.</blockquote>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-slide">
                                    </div>
                                </div>
                                <div class="left-arrow otzivas w-slider-arrow-left" data-ix="line-arrow">
                                    <div class="before-txt-link revers">
                                        <div class="fon-arrow">
                                            <img src={playarrow} alt="" class="arrow-line" />
                                            <div class="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                    <div>назад</div>
                                </div>
                                <div class="right-arrow otzivas w-slider-arrow-right" data-ix="line-arrow">
                                    <div>Далее</div>
                                    <div class="before-txt-link">
                                        <div class="fon-arrow">
                                            <img src={playarrow} alt="" class="arrow-line" />
                                            <div class="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="slide-nav-3 w-slider-nav w-round">
                                </div>
                            </div>
                            <div class="vertical-line">
                            </div>
                        </div>
                        <div class="fon-green">
                        </div>
                    </div>
                </Fragment>
            )
        }
        return null;
    }
}

export default About
