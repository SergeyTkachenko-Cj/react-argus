/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import playarrow from '../../../../img/play-arrow.svg';

export class SixChildTax extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }
    
    render() {
        const { tax } = this.props;
        if (tax) {
            return (
                <div className="card w-clearfix">
                    <div className="card-ico">
                        <div className="ico-in-card training" style={{ backgroundImage: `url(${tax.acf.icon.url})` }}>
                        </div>
                    </div>
                    <h3>{ tax.name }</h3>
                    <div className="p-class">{ tax.description }</div>
                    <Link to={`/training-and-seminars/${tax.slug}`} className="link w-inline-block" data-ix="line-arrow">
                        <div>Показать программы</div>
                        <div className="before-txt-link">
                            <div className="fon-arrow">
                                <img src={playarrow} alt="" className="arrow-line" />
                                <div className="line-arrow">
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
        return null
    }
}

export default SixChildTax
