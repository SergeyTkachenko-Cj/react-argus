/* eslint-disable */
import React, { Fragment } from 'react';
import Item from './HotNewsItem';
import HotNewsSection from './HotNewsSection';
import './HotNews.css';


const HotNews = () => {
        return (
            <Fragment>
                <div className="hotnews-block">
                <div className="paddinger">
                </div>
                <div className="section">
                    <div className="wrapper paddings-all">
                            <h1 className="virus-h1">Срочные новости</h1>
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
                <div className="section section-hotnews">
                        <div className="wrapper no-paddings">
                            <div className="news page-news w-clearfix">
                                {Item.map((item, index) => 
                                    <HotNewsSection key={index} prps={item} />)
                                }
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
                    </div>
            </Fragment>
        )
}

export default HotNews;