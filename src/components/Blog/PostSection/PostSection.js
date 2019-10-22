/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import PostItem from '../PostItem/PostItem';
import NotFoundPosts from '../../Error/NotFoundPosts';

export class PostSection extends Component {
    state = {
        posts: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('http://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/posts')
            .then(res => this.setState({
                posts: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { posts, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="section">
                        <div className="wrapper no-paddings">
                            <div className="news page-news w-clearfix">
                                {posts.map((item, i) => i === 2 
                                ? <PostItem key={item.id} title={item.title} cat={item["category_names"]} excerpt={item.excerpt} date={item.date} img={item.media["post-thumbnail"]} slug={item.slug} /> 
                                : <PostItem key={item.id} title={item.title} cat={item["category_names"]} excerpt={item.excerpt} date={item.date} slug={item.slug} />)}
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

export default PostSection
