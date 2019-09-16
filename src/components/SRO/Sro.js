import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import SroServices from './SroPageItems/SroServices';
import SroPageContent from './SroPageContent/SroPageContent';
import SroPageTable from './SroPageTable/SroPageTable';
import SroFooter from './SroFooter/SroFooter';

export class Sro extends Component {
    state = {
        cat: [],
        isLoaded: false
    }

    componentDidMount() {
        let getSlug = this.props.location.pathname.replace('/', '');
        axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/services_cat')
            .then(res => this.setState({
                cat: res.data.filter(cat => { if (cat.slug === getSlug) return cat }).shift(),
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        const { cat, isLoaded } = this.state;
        console.log(cat);
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="paddinger">
                    </div>
                    <div className="section">
                        <div className="wrapper paddings-all">
                            <div className="top-for-brads">
                                <div className="small-h">{cat.name}</div>
                                <div className="brads">
                                    <div className="small-h brads">главная</div>
                                    <img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">{cat.name}</div>
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
                    <SroServices catid={cat.id} />
                    <SroPageContent acf={cat.acf["bloki_s_kontentom"]}/>
                    <SroPageTable acf={cat.acf["blok_s_tablitsey"]}/>
                    <SroFooter acf={cat.acf["blok_v_podvale"]} />
                </Fragment>
            )
        }
        return null;
    }
}

export default Sro
