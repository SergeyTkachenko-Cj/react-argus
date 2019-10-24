/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import SalesItem from '../SalesItem/SalesItem'
import NotFoundPosts from '../../Error/NotFoundPosts';

export class SalesPostsContainer extends Component {
    state = {
        services: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/sales')
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
                        <div className="wrapper no-paddings">
                            {services.map(item => <SalesItem key={item.id} image={item.media["post-thumbnail"]} content={item.content} />)}
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
        return <NotFoundPosts />
    }
}

export default SalesPostsContainer
