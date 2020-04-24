/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';

export class SectionTen extends Component {
    _isMounted = true;

    state = {
        title: '',
        sales: [],
        isLoaded: false
    }

    componentDidMount() {
        this._isMounted = true;

        const getTitle = axios.get('https://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/page/aktsii');
        const getSales = axios.get('https://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/sales');

        Promise.all([getTitle, getSales])
            .then(res => {
                if (this._isMounted) {
                    this.setState({
                        title: res[0].data.title,
                        sales: res[1].data,
                        isLoaded: true
                    })
                }
            })
            .catch(err => console.log(err))
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { title, sales, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="section">
                        <div id="service10" className="wrapper no-bottom-padding">
                            <div className="in-wrapper">
                                <div className="small-h">акции</div>
                                <h2>{title}</h2>
                            </div>
                            <div className="vertical-line-25"></div>
                            <div className="vertical-line"></div>
                        </div>
                        <div className="vertical-line _50"></div>
                        <div className="fon-greeer"></div>
                    </div>
                    <div className="section">
                        <div className="wrapper no-paddings">
                            <div className="news page-news">
                                <div className="div-in-otzivas" style={{background: 'none'}}>
                                    <div className="col-otzivas _50-proc aktcii">
                                        <div className="img-people-otzivas otzivas">
                                            <img src={sales[0].media["post-thumbnail"]} alt={sales[0].title} className="img-aciya" />
                                        </div>
                                    </div>
                                    <div className="col-otzivas _50-proc left w-clearfix">
                                        <div className="p-class" dangerouslySetInnerHTML={{ __html: sales[0].content }}></div>
                                    </div>
                                </div>
                            </div>
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
        return null;
    }
}

export default SectionTen
