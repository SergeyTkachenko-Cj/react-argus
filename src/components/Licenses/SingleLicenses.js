/* eslint-disable */
import React, { Component, Fragment, Loader } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import playarrow from '../../img/play-arrow.svg';
import LicensesSpecials from './LicensesSpecials/LicensesSpecials';
import LicensesContentBlocks from './LicensesContentBlocks/LicensesContentBlocks';
import TableBlock from './TableBlock/TableBlock';
import LicensesSamples from './LicensesSamples/LicensesSamples';
import LIcensesBottomContent from './LIcensesBottomContent/LIcensesBottomContent';
import NotFound from '../Error/NotFound'

export class SingleLicenses extends Component {
    state = {
        service: {},
        img: '',
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get(`https://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/services/${this.props.match.params.slug}`)
            .then(res => this.setState({
                service: res.data,
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
            window.scrollTo(0, 0);
            axios.get(`https://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/services/${this.state.newSlug}`)
            .then(res => this.setState({
                service: res.data,
                img: res.data.media.large,
                isLoaded: true
            }))
            .catch(err => console.log(err))
        }
        setTimeout(function() {
            Webflow.destroy();
            Webflow.ready();
        }, 500)
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
                                        <Link to="/licenses" className="link w-inline-block" data-ix="line-arrow">
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
                                    <div id={`service${service.id}`} className="top-for-brads lefts">
                                        <div className="brads">
                                            <div className="small-h brads">главная</div>
                                            <img src={playarrow} alt="" className="brads-arrow" />
                                            <div className="small-h brads">лицензии</div>
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
                    {service.acf["special_offer"] ? <LicensesSpecials acf={service.acf["special_offer"]}/> : null}
                    {service.acf["bloki_s_kontentom"] ? <LicensesContentBlocks acf={service.acf["bloki_s_kontentom"]} /> : null}
                    {service.acf["bloki_s_tablitsami"] ? <TableBlock acf={service.acf["bloki_s_tablitsami"]}/> : null}
                    {service.acf["obraztsy_litsenziy"] ? <LicensesSamples acf={service.acf["obraztsy_litsenziy"]}/> : null}
                    {service.acf["kontent_v_podvale"] ?  <LIcensesBottomContent acf={service.acf["kontent_v_podvale"]}/> : null}
                </Fragment>
            )
        } 
        return <NotFound />;
    }
}

export default SingleLicenses
