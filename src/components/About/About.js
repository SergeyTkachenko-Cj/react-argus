/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import AboutSection from './AboutSection/AboutSection';
import SectionEight from '../MainPage/SectionEight/SectionEight';
import NotFound from '../Error/NotFound';

export class About extends Component {
    state = {
        page: {},
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let getSlug = this.props.location.pathname.replace('/', '');
        axios.get(`http://a0325522.xsph.ru/wp-json/better-rest-endpoints/v1/page/${getSlug}`)
            .then(res => this.setState({
                page: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { page, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="paddinger">
                    </div>
                    <div className="section">
                        <div className="wrapper paddings-all">
                            <div className="top-for-brads">
                                <div className="small-h">{page.title}</div>
                                <div className="brads">
                                    <div className="small-h brads">главная</div>
                                    <img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">{page.title}</div>
                                </div>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: page.content }}>

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
                    {page.acf.sektsii.map((item, index) => <AboutSection key={index} img={item.kartinka} text={item["tekstoviy_blok"]} />)}
                    <SectionEight />
                </Fragment>
            )
        }
        return <NotFound />;
    }
}

export default About
