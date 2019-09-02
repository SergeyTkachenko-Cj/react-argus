import React, { Component } from 'react';
import axios from 'axios';
import playarrow from '../../../img/play-arrow.svg';
import SampleSlide from './SampleSlide/SampleSlide';

export class SectionNine extends Component {
    state = {
        samples: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/samples')
            .then(res => this.setState({
                samples: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        const { samples, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div className="section">
                    <div className="wrapper">
                        <div className="row-3x w-row">
                            <div className="col-3x left w-col w-col-6">
                                <div className="small-h">образцы</div>
                                <h2>Образцы лицензий и сертификатов</h2>
                                <a href="#" className="link w-inline-block" data-ix="line-arrow">
                                    <div>все образцы</div>
                                    <div className="before-txt-link">
                                        <div className="fon-arrow">
                                            <img src={playarrow} alt="" className="arrow-line" />
                                            <div className="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-3x left w-col w-col-6">
                                <div data-animation="slide" data-duration="500" data-infinite="1" className="slider-primers w-slider">
                                    <div className="w-slider-mask">
                                        { samples.map(slide => <SampleSlide key={slide.id} image={slide.featured_media} title={slide.title.rendered} />) }
                                    </div>
                                    <div className="left-arrow w-slider-arrow-left" data-ix="line-arrow">
                                        <div className="before-txt-link revers">
                                            <div className="fon-arrow">
                                                <img src={playarrow} alt="" className="arrow-line" />
                                                <div className="line-arrow">
                                                </div>
                                            </div>
                                        </div>
                                        <div>назад</div>
                                    </div>
                                    <div className="right-arrow w-slider-arrow-right" data-ix="line-arrow">
                                        <div>далее</div>
                                        <div className="before-txt-link">
                                            <div className="fon-arrow">
                                                <img src={playarrow} alt="" className="arrow-line" />
                                                <div className="line-arrow">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-nav none w-slider-nav w-round">
                                    </div>
                                </div>
                            </div>
                        </div>
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
            )
        }
        return <h3>Loading...</h3>
    }
}

export default SectionNine
