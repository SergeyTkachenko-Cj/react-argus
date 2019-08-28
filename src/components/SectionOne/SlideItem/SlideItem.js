import React, { Component } from 'react'
import playarrow from '../../../img/play-arrow.svg';
import axios from 'axios';
import dontknow from '../../../img/90782.jpg';

export class SlideItem extends Component {
    state = {
        imgUrl: '',
        isLoaded: false
    }
    componentWillMount() {
        const getImageUrl = axios.get(`http://a0325522.xsph.ru/wp-json/wp/v2/media/${this.props.image}`)
            .then(res => {
                this.setState({
                    imgUrl: res.data.source_url,
                    isLoaded: true
                })
            })
            .catch();
    }
    render() {
        const { imgUrl, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div className="w-slide">
                    <div className="div-in-slide">
                        <div className="col-in-slider _1 w-clearfix">
                            <div className="h2 slider-h">{this.props.title}</div>
                            <div className="p-class" dangerouslySetInnerHTML={{ __html: this.props.desc }}></div>
                            <a href="#" className="link w-inline-block" data-ix="line-arrow">
                                <div>Узнать подробнее</div>
                                <div className="before-txt-link">
                                    <div className="fon-arrow">
                                        <img src={playarrow} alt="" className="arrow-line" />
                                        <div className="line-arrow">
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-in-slider _4-img">
                            <div className="div-block-32">
                                <div className="_4-imgis">
                                    <img src={imgUrl} alt="" className="glitch__img" />
                                    <img src={imgUrl} alt="" className="glitch__img" />
                                    <img src={imgUrl} alt="" className="glitch__img" />
                                    <img src={imgUrl} alt="" className="glitch__img" />
                                    <img src={imgUrl} alt="" className="glitch__img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return null
    }
}

export default SlideItem