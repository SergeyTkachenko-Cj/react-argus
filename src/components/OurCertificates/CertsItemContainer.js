/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import NotFoundPosts from '../Error/NotFoundPosts';
import CertsOneItem from './CertsOneItem';

export class CertsItemContainer extends Component {
    state = {
        certs: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('https://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/ourcerts')
            .then(res => this.setState({
                certs: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { certs, isLoaded } = this.state;

        if (isLoaded) {
            return (
                <Fragment>
                    <div className="section">
                        <div className="wrapper no-paddings">
                            <div className="news page-news">
                                {certs.map(item => <CertsOneItem key={item.id} image={item.acf.kartinka} pdf={item.acf.pdf} title={item.title} content={item.content} />)}
                            </div>
                            <div className="vertical-line-25">
                            </div>
                            <div className="vertical-line">
                            </div>
                        </div>
                        <div className="vertical-line _50">
                        </div>
                        <div className="fon-greeer">
                        </div>
                    </div>
                </Fragment>
            )
        }
        return <NotFoundPosts />
    }
}

export default CertsItemContainer
