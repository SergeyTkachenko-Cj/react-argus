/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import SeminarsSmallServices from './SeminarsSmallServices/SeminarsSmallServices';
import NotFoundPosts from '../../../Error/NotFoundPosts';

export class SeminarsContent extends Component {
    state = {
        services: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`https://admin.argus-eko.ru/wp-json/wp/v2/services?services_cat=${this.props.catid}&per_page=30`)
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
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="section">
                        <div className="wrapper">
                            <div className="news page-news w-clearfix">
                                {services.map(item => <SeminarsSmallServices key={item.id} date={item.date} title={item.title.rendered} slug={item.slug} excerpt={item.excerpt.rendered} catslug={this.props.catslug} />)}
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
        return <NotFoundPosts />;
    }
}

export default SeminarsContent
