/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import playarrow from '../../../img/play-arrow.svg';
import SixChildTax from './SixChildTax/SixChildTax';

export class SectionSix extends Component {
    state = {
        taxomomy: '',
        isLoaded: false
    }

    componentDidMount() {
        const getParent = axios.get('http://admin.argus-eko.ru/wp-json/wp/v2/services_cat/5');
        const getChilds = axios.get('http://admin.argus-eko.ru/wp-json/wp/v2/services_cat');

        Promise.all([getParent, getChilds])
            .then(res => this.setState({
                taxomomy: res[0].data,
                childs: res[1].data.filter(item => item.parent === 5),
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
        Webflow.require('ix2').init();
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
                                <div className="p-class">{ this.state.taxomomy.description }</div>
                            </div>
                            <div className="col-3x right w-clearfix w-col w-col-6">
                                <div className="col-3x left _2">
                                </div>
                                {this.state.childs.map(child => <SixChildTax key={child.id} tax={child} />)}
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

export default SectionSix
