import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import LicensesSpecials from './LicensesSpecials/LicensesSpecials';
import LicensesContentBlocks from './LicensesContentBlocks/LicensesContentBlocks';
import TableСontributions from './TableСontributions/TableСontributions';
import TableDocuments from './TableDocuments/TableDocuments';
import LicensesSamples from './LicensesSamples/LicensesSamples';
import LIcensesBottomContent from './LIcensesBottomContent/LIcensesBottomContent';

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
                    <TableСontributions acf={service.acf["tablitsa_vznosov"]}/>
                    <TableDocuments acf={service.acf["tablitsa_dokumentov"]}/>
                    <LicensesSamples acf={service.acf["obraztsy_litsenziy"]}/>
                    <LIcensesBottomContent acf={service.acf["kontent_v_podvale"]}/>
                </Fragment>
            )
        }
        return null;
    }
}

export default SingleLicenses
