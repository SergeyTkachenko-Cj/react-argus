import React, { Component } from 'react';
import axios from 'axios';
import playarrow from '../../../img/play-arrow.svg';

export class SixChildTax extends Component {
    state = {
        taxomomy: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`http://a0325522.xsph.ru/wp-json/wp/v2/services_cat/${this.props.taxid}`)
            .then(res => this.setState({
                taxomomy: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        if(this.state.isLoaded) {
            return (
                <div className="card w-clearfix">
                    <div className="card-ico">
                        <div className="ico-in-card training" style={{ backgroundImage: `url(${this.state.taxomomy.acf.icon})` }}>
                        </div>
                    </div>
                    <h3>{ this.state.taxomomy.name }</h3>
                    <div className="pclass">{ this.state.taxomomy.description }</div>
                    <a href="#" className="link w-inline-block" data-ix="line-arrow">
                        <div>Показать программы</div>
                        <div className="before-txt-link">
                            <div className="fon-arrow">
                                <img src={playarrow} alt="" className="arrow-line" />
                                <div className="line-arrow">
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            )
        }
        return null
    }
}

export default SixChildTax
