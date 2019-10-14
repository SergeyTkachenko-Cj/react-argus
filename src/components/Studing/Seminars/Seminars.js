/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import playarrow from '../../../img/play-arrow.svg';
import SeminarsContent from './SeminarsContent/SeminarsContent';
import NotFound from '../../Error/NotFound';

export class Seminars extends Component {
    state = {
        cat: [],
        parent: {},
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/services_cat')
            .then(res => this.setState({
                cat: res.data.filter(cat => cat.slug === this.props.match.params.slug).shift()
            }))
            .then(res => this.setState({
                parent: this.state.cat.parent
            }))
            .catch(err => console.log(err));
        axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/services_cat')
            .then(res => this.setState({
                parentSlug: res.data.filter(parent => parent.id == this.state.parent).shift().slug,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.match.params.slug !== prevState.cat.slug) {
            const newSlug = nextProps.match.params.slug;
            return { newSlug: newSlug };
        } else {
            return null;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.slug != this.state.newSlug) {
            window.scrollTo(0, 0);
            axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/services_cat')
                .then(res => this.setState({
                    cat: res.data.filter(cat => cat.slug === this.state.newSlug).shift(),
                    isLoaded: true
                }))
                .catch(err => console.log(err))
            axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/services_cat')
                .then(res => this.setState({
                    parentSlug: res.data.filter(parent => parent.id == this.state.parent).shift().slug,
                    isLoaded: true
                }))
                .catch(err => console.log(err))
        }
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
                        <div className="wrapper paddings-all w-clearfix">
                            <div className="top-for-brads">
                                <Link to={`/${this.state.parentSlug}`} className="link w-inline-block" data-ix="line-arrow">
                                    <div className="before-txt-link revers">
                                        <div className="fon-arrow">
                                            <img src={playarrow} alt="" className="arrow-line" />
                                            <div className="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                    <div>назад</div>
                                </Link>
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
                    <SeminarsContent key={cat.id} catid={cat.id} catslug={cat.slug}/>
                </Fragment>
            )
        }
        return <NotFound />;
    }
}

export default Seminars
