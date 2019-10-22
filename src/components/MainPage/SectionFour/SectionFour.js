/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import playarrow from '../../../img/play-arrow.svg';
import ImageForFour from './ImageForFour/ImageForFour';
import { Link } from 'react-router-dom';

export class SectionFour extends Component {
    state = {
        service: [],
        isLoaded: false
    }
    
    componentDidMount() {
        axios.get('http://admin.argus-eko.ru/wp-json/wp/v2/services?services_cat=3')
            .then(res => this.setState({
                service: res.data.filter(item => item.acf["dovavit_v_karusel"] == false),
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }
    
    render() {
        const { service, isLoaded } = this.state;
        if (service[this.props.postid] && isLoaded) {
            return (
                <div className="section">
                    <div className="wrapper">
                        <div className="row-3x w-row">
                            <div data-w-id="1c787311-19c1-b63f-a17d-e59fbdcbfb8e" className="col-3x left _4-img w-col w-col-6">
                                <div data-w-id="e6fd66f0-e564-714d-18de-531c8d39e954" className="_4-imgis">
                                    <ImageForFour image={ service[this.props.postid].featured_media } />
                                </div>
                                <div className="line-gens">
                                    <div className="green-line">
                                    </div>
                                    <div className="green-line">
                                    </div>
                                    <div className="green-line">
                                    </div>
                                </div>
                            </div>
                            <div className="col-3x left w-clearfix w-col w-col-6">
                                <div className="small-h">услуги</div>
                                <h2>{ service[this.props.postid].title.rendered }</h2>
                                <div className="p-class" dangerouslySetInnerHTML={{ __html: service[this.props.postid].content.rendered }}></div>
                                <Link to={`/licenses/${service[this.props.postid].slug}`} className="link w-inline-block" data-ix="line-arrow">
                                    <div>Узнать подробнее</div>
                                    <div className="before-txt-link">
                                        <div className="fon-arrow">
                                            <img src={playarrow} alt="" className="arrow-line" />
                                            <div className="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                </Link>
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

export default SectionFour
