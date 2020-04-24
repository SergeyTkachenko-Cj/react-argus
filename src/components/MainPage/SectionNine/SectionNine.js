/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import playarrow from '../../../img/play-arrow.svg';
import SampleSlide from './SampleSlide/SampleSlide';

export class SectionNine extends Component {
    _isMounted = true;

    state = {
        samples: '',
        isLoaded: false
    }

    componentDidMount() {
        this._isMounted = true;

        axios.get('https://admin.argus-eko.ru/wp-json/better-rest-endpoints/v1/samples')
            .then(res => {
                if (this._isMounted) {
                    this.setState({
                        samples: res.data.filter(item => item.acf),
                        isLoaded: true
                    })
                }
            })
            .catch(err => console.log(err))
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { samples, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div className="section">
                    <div id="service09" className="wrapper">
                        <div className="row-3x w-row">
                            <div className="col-3x left w-col w-col-6">
                                <div className="small-h">образцы</div>
                                <h2>Образцы лицензий и сертификатов</h2>
                            </div>
                            <div className="col-3x left w-col w-col-6 sm-pic-marg">
                                <div data-animation="slide" data-duration="500" data-infinite="1" className="slider-primers w-slider sm-pic-blck">
                                    <div className="w-slider-mask">
                                        { samples.map(slide => <SampleSlide key={slide.id} sample={slide} />) }
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
        return null;
    }
}

export default SectionNine
