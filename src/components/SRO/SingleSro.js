/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import playarrow from '../../img/play-arrow.svg';
import SroContent from './SroContent/SroContent';
import SroСontributions from './SroСontributions/SroСontributions';
import SroQuote from './SroQuote/SroQuote';
import NotFound from '../Error/NotFound'

export class SingleSro extends Component {
    state = {
        service: {},
        img: '',
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get(`http://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/services/${this.props.match.params.slug}`)
            .then(res => this.setState({
                service: res.data,
                acf: res.data.acf,
                img: res.data.media.large,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.match.params.slug !== prevState.service.slug) {
            const newSlug = nextProps.match.params.slug;
            return { newSlug: newSlug };
        } else {
            return null;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.slug != this.state.newSlug) {
            axios.get(`http://a0325522.xsph.ru/wp-json/better-rest-endpoints/v1/services/${this.state.newSlug}`)
                .then(res => this.setState({
                    service: res.data,
                    acf: res.data.acf,
                    img: res.data.media.large,
                    isLoaded: true
                }))
                .catch(err => console.log(err))
        }
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { service, acf, img, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="paddinger"></div>
                    <div className="section">
                        <div className="wrapper head-wrapper">
                            <div className="row-3x w-row">
                                <div className="col-3x left w-clearfix w-col w-col-6">
                                    <div className="top-for-brads">
                                        <Link to={`/${service.terms[0].slug}`} className="link w-inline-block" data-ix="line-arrow">
                                            <div className="before-txt-link revers">
                                                <div className="fon-arrow">
                                                    <img src={playarrow} alt="" className="arrow-line" />
                                                    <div className="line-arrow">
                                                    </div>
                                                </div>
                                            </div>
                                            <div>назад</div>
                                        </Link>
                                    </div>
                                    <h1>{service.title}</h1>
                                    <div className="p-class exc" dangerouslySetInnerHTML={{__html: service.content}}></div>
                                </div>
                                <div className="col-3x right _4-img-right w-col w-col-6">
                                    <div className="top-for-brads lefts">
                                        <div className="brads">
                                            <div className="small-h brads">главная</div>
                                            <img src={playarrow} alt="" className="brads-arrow" />
                                            <div className="small-h brads">{service.terms[0].name}</div>
                                            <img src={playarrow} alt="" className="brads-arrow" />
                                            <div className="small-h brads">{service.title}</div>
                                        </div>
                                    </div>
                                    <div className="_4-imgis margin-images">
                                        <img src={img} alt="" className="glitch__img" />
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
                    {(acf && acf["blok_kontenta_1"]) ? <SroContent acf={acf["blok_kontenta_1"]} /> : null}
                    {(acf && acf["bloki_s_tablitsamy"]) ? <SroСontributions acf={service.acf["bloki_s_tablitsamy"]} /> : null}
                    {(acf && acf["blok_s_tsitatoy"]) ? <SroQuote acf={acf["blok_s_tsitatoy"]} /> : null}
                    {(acf && acf["blok_kontenta_2"]) ? <SroContent acf={acf["blok_kontenta_2"]} /> : null}
                </Fragment>
            )
        }
        return <NotFound />;
    }
}

export default SingleSro
