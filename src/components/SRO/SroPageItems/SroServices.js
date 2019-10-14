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
        axios.get(`http://a0325522.xsph.ru/wp-json/wp/v2/services?services_cat=${this.props.catid}`)
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
            return (
                <Fragment>
                    <div className="section">
                        <div className="wrapper no-paddings">
                            <div className="news w-clearfix">
                                { services.filter(service => service.acf['dovavit_v_karusel'] == false).map(service => <SroServiceItem key={service.id} id={service.id} title={service.title.rendered} excerpt={service.excerpt.rendered} catslug={this.props.catslug} slug={service.slug}/>)}
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
