import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../../img/play-arrow.svg';
import SroServiceItem from './SroServiceItem';

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
    render() {
        const { services, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="section">
                        <div className="wrapper no-paddings">
                            <div className="news w-clearfix">
                                { services.map(service => <SroServiceItem key={service.id} title={service.title.rendered} excerpt={service.excerpt.rendered} slug={service.slug}/>)}
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
        return null;
    }
}

export default SroServices
