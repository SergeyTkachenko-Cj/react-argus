/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import NotFound from '../Error/NotFound';

export class SecretPage extends Component {
    state = {
        page: {},
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        
        let getSlug = 'exclusive-materials';
        axios.get(`https://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/page/${getSlug}`)
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
                        <div className="wrapper head-wrapper">
                            <div className="row-3x w-row">
                                <div className="col-3x left w-clearfix w-col w-col-6">
                                    <div className="small-h">{page.title}</div>
                                    <h1>Эксклюзивные образовательные материалы</h1>
                                </div>
                                <div className="p-class _100 secret-page" dangerouslySetInnerHTML={{ __html: page.content }}></div>
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
                </Fragment>
            )
        }
        return <NotFound />;
    }
}

export default SecretPage