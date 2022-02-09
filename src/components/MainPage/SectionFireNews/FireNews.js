/* eslint-disable */
import React, { Fragment } from 'react';
import Item from './FireNewsItem';
import FireNewsSection from './FireNewsSection';
import './FireNews.css';


const FireNews = () => {
        return (
            <Fragment>
                <div className="firenews-block">
                <div className="paddinger">
                </div>
                <div className="section">
                    <div className="wrapper paddings-all">
                            <h1 className="fire-h1">Больше не будет обучения по ПТМ, только до 1 марта!</h1>
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
                <div className="section section-firenews">
                        <div className="wrapper no-paddings">
                            <div className="news page-news w-clearfix">
                                {Item.map((item, index) => 
                                    <FireNewsSection key={index} prps={item} />)
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

export default FireNews;