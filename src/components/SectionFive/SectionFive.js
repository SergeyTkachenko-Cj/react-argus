import React, { Component } from 'react';
import playarrow from '../../img/play-arrow.svg';
import axios from 'axios';

export class SectionFive extends Component {
    state = {
        service: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/services?services_cat=4')
            .then(res => this.setState({
                service: res.data[0],
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }
    render() {
        if (this.state.isLoaded) {
            return (
                <div className="section">
                    <div className="wrapper">
                        <div className="row-3x w-row">
                            <div className="col-3x left w-clearfix w-col w-col-6">
                                <div className="small-h">услуги</div>
                                <h2>{ this.state.service.title.rendered }</h2>
                                <div className="pclass" dangerouslySetInnerHTML={{ __html: this.state.service.excerpt.rendered }}></div>
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
                            <div className="col-3x left w-clearfix w-col w-col-6">
                                <div className="small-h">услуги</div>
                                <div className="pclass" dangerouslySetInnerHTML={{ __html: this.state.service.content.rendered }}></div>
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
        return <h3>Loading...</h3>
    }
}

export default SectionFive
