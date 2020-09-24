// eslint-disable
import React, { Fragment, PureComponent } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import SroServices from './SroPageItems/SroServices';
import SroForm from './SroFormVipiska/SroForm';
import SroPageContent from './SroPageContent/SroPageContent';
import SroPageTable from './SroPageTable/SroPageTable';
import SroFooter from './SroFooter/SroFooter';
import NotFound from '../Error/NotFound';

export class Sro extends PureComponent {
    state = {
        cat: [],
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let getSlug = this.props.location.pathname.replace('/', '');
        axios.get('https://admin.argus-eko.ru/wp-json/wp/v2/services_cat')
            .then(res => this.setState({
                cat: res.data.filter(cat => cat.slug === getSlug).shift(),
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.match.url.substring(1) !== prevState.cat.slug) {
            const newSlug = nextProps.match.url.substring(1);
            return { newSlug: newSlug };
        } else {
            return null;
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.url.substring(1) !== this.state.newSlug) {
            window.scrollTo(0, 0);
            axios.get('https://admin.argus-eko.ru/wp-json/wp/v2/services_cat')
                .then(res => this.setState({
                    cat: res.data.filter(cat => cat.slug === this.state.newSlug).shift(),
                    isLoaded: true
                }))
                .catch(err => console.log(err))
        }
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
                    <SroServices key={cat.id} catid={cat.id} catslug={cat.slug} />
                    {cat.slug === 'sro' ? <SroForm /> : null}
                    {(cat.acf && cat.acf["bloki_s_kontentom"]) ? <SroPageContent acf={cat.acf["bloki_s_kontentom"]} cat={cat.slug} /> : null}
                    {(cat.acf && cat.acf["bloki_s_tablitsey"]) ? <SroPageTable acf={cat.acf["bloki_s_tablitsey"]} /> : null}
                    {(cat.acf && cat.acf["blok_v_podvale"]) ? <SroFooter acf={cat.acf["blok_v_podvale"]} /> : null}
                </Fragment>
            )
        }
        return <NotFound />;
    }
}

export default Sro