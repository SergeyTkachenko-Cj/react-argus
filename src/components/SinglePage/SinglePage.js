import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';

export class SinglePage extends Component {
    state = {
        service: {},
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`http://a0325522.xsph.ru/wp-json/better-rest-endpoints/v1/services/${this.props.match.params.slug}`)
            .then(res => this.setState({
                service: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }
    render() {
        const { service, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="paddinger"></div>
                    <div className="section">
                        <div className="wrapper paddings-all">
                            <div className="top-for-brads">
                                <div className="small-h">новости и статьи</div>
                                <div className="brads">
                                    <div className="small-h brads">главная</div><img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">новости и статьи</div><img src={playarrow} alt="" className="brads-arrow" />
                                    <div className="small-h brads">cтатья</div>
                                </div>
                            </div>
                            <h1 className="h1-single">{service.title}</h1>
                            <div className="vertical-line"></div>
                            <div className="vertical-line-25"></div>
                        </div>
                        <div className="fon-greeer"></div>
                        <div className="vertical-line _50"></div>
                    </div>
                    <div className="section">
                        <div className="wrapper single w-clearfix">
                            <div className="news page-news"></div>
                            <div className="vertical-line-25"></div>
                            <div className="vertical-line"></div>
                            <div className="p-class" dangerouslySetInnerHTML={{ __html: service.content }}></div>
                        </div>
                        <div className="vertical-line _50"></div>
                        <div className="fon-green"></div>
                    </div>
                </Fragment>
            )
        }
        return null;
    }
}

export default SinglePage
