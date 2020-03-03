/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import playarrow from '../../../img/play-arrow.svg';
import axios from 'axios';

export class SectionFive extends Component {
    state = {
        service: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('https://admin.argus-eko.ru/wp-json/wp/v2/services?services_cat=4')
            .then(res => this.setState({
                service: res.data.filter(item => item.acf["dovavit_v_karusel"] == false)[0],
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
        if (service && isLoaded) {
            return (
                <div className="section">
                    <div className="wrapper">
                        <div className="row-3x w-row">
                            <div className="col-3x left w-clearfix w-col w-col-6">
                                <div className="small-h">услуги</div>
                                <h2>{ this.state.service.title.rendered }</h2>
                                <div className="p-class" dangerouslySetInnerHTML={{ __html: this.state.service.excerpt.rendered }}></div>
                                <Link to={`/certifications/${this.state.service.slug}`} className="link w-inline-block" data-ix="line-arrow">
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
                            <div className="col-3x left w-clearfix w-col w-col-6">
                                <div className="p-class" dangerouslySetInnerHTML={{ __html: this.state.service.content.rendered }}></div>
                            </div>
                        </div>
                        <div className="vertical-line">
                        </div>
                        <div className="vertical-line-25">
                        </div>
                    </div>
                    <div className="fon-greeer">
                    </div>
                    <div className="fon-green right">
                    </div>
                    <div className="vertical-line _50">
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default SectionFive
