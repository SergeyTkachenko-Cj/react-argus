import React, { Component } from 'react';
import axios from 'axios';
import NewsCart from './NewsCart/NewsCart';


export class SectionEleven extends Component {
    state = {
        news: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/posts')
            .then(res => this.setState({
                news: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
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
                            { news.map(neww => <NewsCart date={neww.date} title={neww.title.rendered} excerpt={neww.excerpt.rendered} /> ) }
                        </div>
                        <div className="vertical-line-25">
                        </div>
                        <div className="vertical-line">
                        </div>
                        <div className="in-wrapper entres">
                            <a href="/news" className="link-menu w-inline-block" data-ix="link-hover">
                                <div>Читать весь блог</div>
                                <div className="left-link-line">
                                </div>
                                <div className="right-link-line">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="vertical-line _50">
                    </div>
                    <div className="fon-greeer">
                    </div>
                </div>
            )
        }
        return <h3>Loading...</h3>
    }
}

export default SectionEleven
