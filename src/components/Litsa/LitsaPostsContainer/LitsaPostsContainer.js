/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import LitsaItem from '../LitsaItem/LitsaItem'
import NotFoundPosts from '../../Error/NotFoundPosts';

export class LitsaPostsContainer extends Component {
    state = {
        services: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('https://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/faces?per_page=20')
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
                // <Fragment>
                //     <div className="section faces">
                //         <div className="wrapper no-paddings">
                //             {services.map(item => <LitsaItem key={item.id} image={item.media["post-thumbnail"]} content={item.content} />)}
                //             <div className="vertical-line-25">
                //             </div>
                //             <div className="vertical-line">
                //             </div>
                //         </div>
                //         <div className="vertical-line _50">
                //         </div>
                //     </div>
                // </Fragment>
                <Fragment>
                <div className="section">
                    <div className="wrapper no-paddings">
                        <div className="news page-news w-clearfix">
                        {services.map(item => <LitsaItem key={item.id} image={item.media["post-thumbnail"]} content={item.content} />)}
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

export default LitsaPostsContainer
