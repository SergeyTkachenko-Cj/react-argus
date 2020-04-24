/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import playarrow from '../../../img/play-arrow.svg';

const HotNewsSection = props => {
    return (
        <Fragment>
                <div className="card-news w-clearfix hotnews">
                <img style={{transform: 'rotateZ(120deg)'}} 
                     className="hotnews-img" 
                     src={props.prps.pic}>
                </img>
                <div className="p-class"></div>
                <h3>{props.prps.text}</h3>
                <Link to={props.prps.link} 
                      className="link w-inline-block" 
                      data-ix="line-arrow">
                    <div>читать полностью</div>
                    <div className="before-txt-link">
                        <div className="fon-arrow">
                            <img src={playarrow} alt="" className="arrow-line" />
                            <div className="line-arrow">
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}

export default HotNewsSection;

