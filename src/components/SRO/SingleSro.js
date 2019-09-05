import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import SroContent from './SroContent/SroContent';
import SroСontributions from './SroСontributions/SroСontributions';
import SroQuote from './SroQuote/SroQuote';

export class SingleSro extends Component {
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
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="paddinger"></div>
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
                                            <div className="small-h brads">сро</div>
                                            <img src={playarrow} alt="" className="brads-arrow" />
                                            <div className="small-h brads">{service.title}</div>
                                        </div>
                                    </div>
                                    <div className="_4-imgis">
                                        <img src={img} alt="" className="glitch__img" />
                                        <img src={img} alt="" className="glitch__img" />
                                        <img src={img} alt="" className="glitch__img" />
                                        <img src={img} alt="" className="glitch__img" />
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
                    <SroContent acf={service.acf.blok_kontenta_1} />
                    <SroСontributions acf={service.acf.tablica_vznosov} />
                    <SroQuote title={service.title} acf={service.acf.tsitata} />
                    <SroContent acf={service.acf.blok_kontenta_2} />
                </Fragment>
            )
        }
        return null;
    }
}

export default SingleSro
