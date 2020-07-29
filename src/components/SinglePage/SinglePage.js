/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import playarrow from '../../img/play-arrow.svg';
import NotFound from '../Error/NotFound';
// import WebinarForm from './WebinarForm';

export class SinglePage extends Component {
    state = {
        service: {},
        cat: '',
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let str = this.props.match.url.match(/(\/.*\/)/);
        if (str[0] != '/blog/') {
            axios.get(`https://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/services/${this.props.match.params.slug}`)
                .then(res => this.setState({
                    service: res.data,
                    cat: res.data.terms[0].name,
                    isLoaded: true
                }))
                .catch(err => console.log(err))
        } else {
            axios.get(`https://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/post/${this.props.match.params.slug}`)
                .then(res => this.setState({
                    service: res.data,
                    cat: res.data["category_names"][0],
                    isLoaded: true
                }))
                .catch(err => console.log(err))
        }

    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { service, isLoaded } = this.state;
        let back = this.props.location.pathname.match(/(\/.*\/)/)[0];

        // DESTROY AFTER COVID-19
            // switch(service.slug) {
            //     case '13-luchshih-besplatnyh-resursov-dlya-biznesa-v-period-samoizolyatsii':
            //         back = "/"
            //     break;
            //     case 'mery-podderzhki-dlya-arendatorov':
            //         back = "/"
            //     break;
            //     case 'subsidiya-na-oplatu-truda-rabotnikam':
            //         back = "/"
            //     break;
            //     case 'mnogie-lgoty-i-subsidii-rasprostranyayutsya-lish-na-naibolee-postradavshie-otrasli-ekonomiki':
            //         back = "/"
            //     break;
            //     case 'stroitelnyj-kompleks-gotovitsya-k-vozobnovleniyu-stroitelnyh-rabot-posle-snyatiya-karantina':
            //         back = "/"
            //     break;
            //     case 'osobennosti-osushhestvleniya-zakupok-v-period-pandemii':
            //         back = "/"
            //     break;
            // }
        // 

        if (isLoaded && service.length != 0) {
            return (
                <Fragment>
                    <div className="paddinger"></div>
                    <div className="section">
                        <div className="wrapper paddings-all">
                            <div className="top-for-brads">
                                <Link to={`${back}`} className="link w-inline-block" data-ix="line-arrow">
                                    <div className="before-txt-link revers">
                                        <div className="fon-arrow">
                                            <img src={playarrow} alt="" className="arrow-line" />
                                            <div className="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                    <div>назад</div>
                                </Link>
                                {/* <div className="brads">
                                    <div className="small-h brads">главная</div><img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">{cat}</div><img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">{service.title}</div>
                                </div> */}
                            </div>
                            <h1 className="h1-single">{service.title}</h1>
                            <div className="vertical-line"></div>
                            <div className="vertical-line-25"></div>
                        </div>
                        <div className="fon-greeer"></div>
                        <div className="vertical-line _50"></div>
                    </div>
                    <div className="section">
                        <div className={`wrapper single w-clearfix ${service.title === "Рабочие специальности" ? 'extra-class' : ''} ${service.slug === 'osobennosti-osushhestvleniya-zakupok-v-period-pandemii' ? 'width-class' : ''}`}>
                            <div className="news page-news"></div>
                            <div className="vertical-line-25"></div>
                            <div className="vertical-line"></div>
                            <div className="p-class" dangerouslySetInnerHTML={{ __html: service.content }}></div>
                            {/* {service.slug === 'mery-podderzhki-dlya-arendatorov' ? <WebinarForm /> : null} */}
                        </div>
                        <div className="vertical-line _50"></div>
                        <div className="fon-green"></div>
                    </div>
                </Fragment>
            )
        }
        return <NotFound />;
    }
}

export default SinglePage
