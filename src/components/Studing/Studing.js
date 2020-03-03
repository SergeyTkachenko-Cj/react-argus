/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import StudingChild from './Seminars/StudingChild/StudingChild';
import SroPageContent from '../SRO/SroPageContent/SroPageContent';
import SroPageTable from '../SRO/SroPageTable/SroPageTable';
import SroFooter from '../SRO/SroFooter/SroFooter';

export class Studing extends Component {
    state = {
        cat: {},
        isLoaded: false
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://admin.argus-eko.ru/wp-json/wp/v2/services_cat')
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
                    {(cat.acf && cat.acf["bloki_s_kontentom"]) ? <SroPageContent acf={cat.acf["bloki_s_kontentom"]} /> : null}
                    {(cat.acf && cat.acf["bloki_s_tablitsey"]) ? <SroPageTable acf={cat.acf["bloki_s_tablitsey"]} /> : null}
                    {(cat.acf && cat.acf["blok_v_podvale"]) ? <SroFooter acf={cat.acf["blok_v_podvale"]} /> : null}
                </Fragment>
            )
        }
        return null;
    }
}

export default Studing
