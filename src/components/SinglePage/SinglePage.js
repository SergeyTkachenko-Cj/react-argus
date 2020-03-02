/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import playarrow from '../../img/play-arrow.svg';
import NotFound from '../Error/NotFound';

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
            axios.get(`http://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/services/${this.props.match.params.slug}`)
                .then(res => this.setState({
                    service: res.data,
                    cat: res.data.terms[0].name,
                    isLoaded: true
                }))
                .catch(err => console.log(err))
        } else {
            axios.get(`http://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/post/${this.props.match.params.slug}`)
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
        const { service, cat, isLoaded } = this.state;
        const back = this.props.location.pathname.match(/(\/.*\/)/)[0];

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
                        <div className={`wrapper single w-clearfix ${service.title === "Рабочие специальности" ? 'extra-class' : ''}`}>
                            <div className="news page-news"></div>
                            <div className="vertical-line-25"></div>
                            <div className="vertical-line"></div>
                            <div className="p-class" dangerouslySetInnerHTML={{ __html: service.content }}></div>
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
