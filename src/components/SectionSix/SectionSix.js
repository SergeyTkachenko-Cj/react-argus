import React, { Component } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import SixChildTax from './SixChildTax/SixChildTax';

export class SectionSix extends Component {
    state = {
        taxomomy: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/services_cat/5')
            .then(res => this.setState({
                taxomomy: res.data,
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
                                <h2>{ this.state.taxomomy.name }</h2>
                                <div className="pclass">{ this.state.taxomomy.description }</div>
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
                            <div className="col-3x right w-clearfix w-col w-col-6">
                                <div className="col-3x left _2">
                                </div>
                                <SixChildTax taxid="6" />
                                <SixChildTax taxid="7" />
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

export default SectionSix
