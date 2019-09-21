import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import PostItem from './PostItem/PostItem';

export class Blog extends Component {
    state = {
        posts: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/posts')
            .then(res => this.setState({
                posts: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }
    render() {
        const { posts, isLoaded } = this.state;
        console.log(posts);
        return (
            <Fragment>
                <div class="paddinger">
                </div>
                <div class="section">
                    <div class="wrapper paddings-all">
                        <div class="top-for-brads">
                            <div class="small-h">новости и статьи</div>
                            <div class="brads">
                                <div class="small-h brads">главная</div>
                                <img src={playarrow} alt="" class="brads-arrow" />
                                <div class="small-h brads">новости и статьи</div>
                            </div>
                        </div>
                        <h1>Делимся опытом и важными новостями</h1>
                        <div class="vertical-line">
                        </div>
                        <div class="vertical-line-25">
                        </div>
                    </div>
                    <div class="fon-greeer">
                    </div>
                    <div class="vertical-line _50">
                    </div>
                </div>
                <div class="section">
                    <div class="wrapper no-paddings">
                        <div class="news page-news w-clearfix">
                            {posts.map((item, i) => {
                                if (i == 2) {
                                    return <PostItem key={item.id} title={item.title.rendered} excerpt={item.excerpt.rendered} date={item.date} img={item.featured_media} />
                                } else {
                                    return <PostItem key={item.id} title={item.title.rendered} excerpt={item.excerpt.rendered} date={item.date} />
                                }
                            })}
                        </div>
                        <div class="vertical-line-25">
                        </div>
                        <div class="vertical-line">
                        </div>
                    </div>
                    <div class="vertical-line _50">
                    </div>
                    <div class="fon-greeer">
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Blog
