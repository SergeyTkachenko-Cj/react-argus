/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import SroServiceItem from './SroServiceItem';
import NotFoundPosts from '../../Error/NotFoundPosts';

export class SroServices extends Component {
    state = {
        services: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`https://admin.argus-eko.ru/wp-json/wp/v2/services?services_cat=${this.props.catid}`)
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

        if (isLoaded && this.state.services.length != 0) {
            const order = (a, b) => {
                if (a.date < b.date) return 1
                if (a.date > b.date) return -1
                return 0
            }
            return (
                <Fragment>
                    <div className="section">
                        <div className="wrapper no-paddings">
                            <div className="news w-clearfix">
                                {services.filter(service => service.acf['dovavit_v_karusel'] == false).sort((a, b) => order(a, b)).map(service => <SroServiceItem key={service.id} id={service.id} title={service.title.rendered} excerpt={service.excerpt.rendered} catslug={this.props.catslug} slug={service.slug} izob={service.acf.izobrajenie} />)}
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
        return <NotFoundPosts />;
    }
}

export default SroServices
