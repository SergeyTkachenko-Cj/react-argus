import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../../img/play-arrow.svg';
import SeminarsContent from './SeminarsContent/SeminarsContent';

export class Seminars extends Component {
    state = {
        cat: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/services_cat')
            .then(res => this.setState({
                cat: res.data.filter(cat => { if (cat.slug === this.props.match.params.slug) return cat }).shift(),
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        const { cat, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="paddinger">
                    </div>
                    <div className="section">
                        <div className="wrapper paddings-all w-clearfix">
                            <div className="top-for-brads">
                                <div className="small-h">Обучение в АРГУС-ЭКО</div>
                                <div className="brads">
                                    <div className="small-h brads">главная</div>
                                    <img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">Обучение и семинары</div>
                                    <img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">{cat.name}</div>
                                </div>
                            </div>
                            <h1>{cat.name}</h1>
                            <div className="p-class head">{cat.description}</div>
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
                    <SeminarsContent catid={cat.id}/>
                </Fragment>
            )
        }
        return null;
    }
}

export default Seminars
