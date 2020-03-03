/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PostItem from '../../Blog/PostItem/PostItem';


export class SectionEleven extends Component {
    state = {
        news: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get('https://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/posts')
            .then(res => this.setState({
                news: res.data.slice(0, 4),
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { news, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div className="section">
                    <div className="wrapper">
                        <div className="in-wrapper">
                            <div className="small-h">новости и статьи</div>
                            <h2>Делимся опытом и новостями</h2>
                        </div>
                        <div className="news w-clearfix">
                            {news.map(neww => <PostItem key={neww.id} cat={neww["category_names"]} title={neww.title} excerpt={neww.excerpt} date={neww.date} slug={neww.slug} />)}
                        </div>
                        <div className="vertical-line-25">
                        </div>
                        <div className="vertical-line">
                        </div>
                        <div className="in-wrapper entres">
                            <Link to="/blog" className="link-menu w-inline-block" data-ix="link-hover">
                                <div>Читать весь блог</div>
                                <div className="left-link-line">
                                </div>
                                <div className="right-link-line">
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="vertical-line _50">
                    </div>
                    <div className="fon-greeer">
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default SectionEleven
