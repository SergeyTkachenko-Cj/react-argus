/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import NotFound from '../Error/NotFound';
import AboutUsSection from './AboutUsSection';
import info from './AboutUsInfo';

export class AboutUsPage extends Component {
    state = {
        services: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('https://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/about-us-page')
            .then(res => this.setState({
                services: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { services, isLoaded } = this.state;
        let title = services.map((item) => item.title);

        if (isLoaded) {
            return (
                <Fragment>
                    <div className="paddinger">
                    </div>
                    <div className="section">
                        <div className="wrapper paddings-all">
                            <div className="top-for-brads">
                                <div className="small-h">ARGUS.GROUP</div>
                                <div className="brads">
                                    <div className="small-h brads">главная</div>
                                    <img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">{title[0]}</div>
                                </div>
                            </div>
                            <h1>{title[0]}</h1>
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
                            <div class="news w-clearfix">
                                {info.map(item => <AboutUsSection key={item.id} serv={item} />)}
                            </div>
                        </div>
                    </div>
                    <div className="fon-greeer"></div>
                    <div className="vertical-line _50"></div>
                </Fragment>
            )
        }
        return <NotFound />
    }
}

export default AboutUsPage
