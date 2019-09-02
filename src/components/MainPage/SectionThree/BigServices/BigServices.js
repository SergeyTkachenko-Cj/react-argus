import React, { Component } from 'react';
import playarrow from '../../../../img/play-arrow.svg';
import axios from 'axios';

export class BigServices extends Component {
    state = {
        img: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`http://a0325522.xsph.ru/wp-json/wp/v2/media/${this.props.service.featured_media}`)
            .then(res => this.setState({
                img: res.data.source_url,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="row-3x w-row">
                <div className="col-3x left w-clearfix w-col w-col-6">
                    <div className="small-h">услуги</div>
                    <h2>{this.props.service.title.rendered}</h2>
                    <div className="pclass" dangerouslySetInnerHTML={{ __html: this.props.service.excerpt.rendered }}></div>
                    <a href="/sro" className="link w-inline-block" data-ix="line-arrow">
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
                <div data-w-id="993aea3e-9b8b-d73b-c149-126b2f39bdad" className="col-3x right _4-img-right w-col w-col-6">
                    <div className="_4-imgis">
                        <img src={this.state.img} alt="" className="glitch__img" />
                        <img src={this.state.img} alt="" className="glitch__img" />
                        <img src={this.state.img} alt="" className="glitch__img" />
                        <img src={this.state.img} alt="" className="glitch__img" />
                        <img src={this.state.img} alt="" className="glitch__img" />
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
            </div>
        )
    }
}

export default BigServices
