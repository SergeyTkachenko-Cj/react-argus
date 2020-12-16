/* eslint-disable */
import React, { Fragment } from 'react';

const AboutUsSection = props => {

    const {pic, name, descrip, href} = props.serv;

        return (
                <Fragment>
                    <div className="vertical-line"></div>
                    <div className="vertical-line-25"></div>
                        <div className="card-news">
                            <div className="p-class">
                                <div className="wp-block-image">
                                    <figure className="aligncenter is-resized">
                                        <img loading="lazy" 
                                             src={`http://admin.argus-eko.ru/wp-content/uploads/2020/12/${pic}`} 
                                             alt="" className="wp-image-665" 
                                             width="143" 
                                             height="143" 
                                             sizes="(max-width: 143px) 100vw, 143px" />
                                    </figure>
                                </div>
                            </div>
                                <h3>{name}</h3>
                                <div className="p-class">
                                    <p>{descrip}</p>
                                </div>
                                <a className="link w-inline-block" data-ix="line-arrow" href={href} style={{transition: 'all 0.2s ease 0s'}}>
                                    <div>Узнать подробнее</div>
                                    <div className="before-txt-link">
                                        <div className="fon-arrow">
                                            <img src="/static/media/play-arrow.c0f19ea7.svg" alt="" className="arrow-line" />
                                            <div className="line-arrow"></div>
                                        </div>
                                    </div>
                                </a>
                        </div>
                    </Fragment>
        )
}

export default AboutUsSection