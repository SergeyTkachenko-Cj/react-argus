/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import StudingChild from './Seminars/StudingChild/StudingChild'

export class Studing extends Component {
    state = {
        cat: {},
        isLoaded: false
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('http://admin.argus-eko.ru/wp-json/wp/v2/services_cat')
            .then(res => this.setState({
                cat: res.data.filter(item => item.slug === 'training-and-seminars').shift(),
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }
    render() {
        const { cat, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="paddinger">
                    </div>
                    <div className="section">
                        <div className="wrapper paddings-all">
                            <div className="top-for-brads">
                                <div className="small-h">Обучение</div>
                                <div className="brads">
                                    <div className="small-h brads">главная</div>
                                    <img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">Обучение</div>
                                </div>
                            </div>
                            <h1>{cat.name}</h1>
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
                    <StudingChild catid={cat.id} />
                </Fragment>
            )
        }
        return null;
    }
}

export default Studing
