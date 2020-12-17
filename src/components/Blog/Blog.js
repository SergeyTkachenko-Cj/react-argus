/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import playarrow from '../../img/play-arrow.svg';
import PostSection from './PostSection/PostSection';

export class Blog extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        return (
            <Fragment>
                <div className="paddinger">
                </div>
                <div className="section">
                    <div className="wrapper paddings-all">
                        <div className="top-for-brads">
                            <Link to={`/about-us-page`} className="link w-inline-block" data-ix="line-arrow">
                                <div className="before-txt-link revers">
                                    <div className="fon-arrow">
                                        <img src={playarrow} alt="" className="arrow-line" />
                                        <div className="line-arrow">
                                        </div>
                                    </div>
                                </div>
                                <div>назад</div>
                            </Link>
                            {/* <div className="small-h">новости и статьи</div> */}
                            <div className="brads">
                                <div className="small-h brads">главная</div>
                                <img src={playarrow} alt="" className="brads-arrow" />
                                <div className="small-h brads">о нас</div>
                                <img src={playarrow} alt="" className="brads-arrow" />
                                <div className="small-h brads">новости и статьи</div>
                            </div>
                        </div>
                        <h1>Делимся опытом и важными новостями</h1>
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
                <PostSection />
            </Fragment>
        )
    }
}

export default Blog
