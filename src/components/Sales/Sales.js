import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import SalesItem from './SalesItem/SalesItem';

export class Sales extends Component {
    state = {
        page: {},
        services: [],
        isLoaded: false
    }

    componentDidMount() {
        let getSlug = this.props.location.pathname.replace('/', '');
        const getPage = axios.get(`http://a0325522.xsph.ru/wp-json/better-rest-endpoints/v1/page/${getSlug}`);
        const getServices = axios.get('http://a0325522.xsph.ru/wp-json/better-rest-endpoints/v1/sales');
        Promise.all([getPage, getServices])
            .then(res => this.setState({
                page: res[0].data,
                services: res[1].data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        const { page, services, isLoaded } = this.state;
        if (isLoaded && services) {
            return (
                <Fragment>
                    <div className="paddinger">
                    </div>
                    <div className="section">
                        <div className="wrapper paddings-all">
                            <div className="top-for-brads">
                                <div className="brads">
                                    <div className="small-h brads">главная</div>
                                    <img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">{page.title}</div>
                                </div>
                            </div>
                            <h1>{page.title}</h1>
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
                        <div className="wrapper no-paddings">
                            {services.map(item => <SalesItem key={item.id} image={item.media["post-thumbnail"]} content={item.content} />)}
                            <div className="vertical-line-25">
                            </div>
                            <div className="vertical-line">
                            </div>
                        </div>
                        <div className="vertical-line _50">
                        </div>
                    </div>
                </Fragment>
            )
        }
        return (
            <Fragment>
                    <div className="paddinger">
                    </div>
                    <div className="section">
                        <div className="wrapper paddings-all">
                            <div className="top-for-brads">
                                <div className="brads">
                                    <div className="small-h brads">главная</div>
                                    <img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">Акции</div>
                                </div>
                            </div>
                            <h1>Акции</h1>
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
                        <div className="wrapper no-paddings">
                            Акции еще не добавлены.
                            <div className="vertical-line-25">
                            </div>
                            <div className="vertical-line">
                            </div>
                        </div>
                        <div className="vertical-line _50">
                        </div>
                    </div>
                </Fragment>
        )
    }
}

export default Sales
