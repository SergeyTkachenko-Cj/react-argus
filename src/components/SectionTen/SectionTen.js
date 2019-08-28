import React, { Component } from 'react';
import axios from 'axios';
import ImgSecTen from './ImgSecTen/ImgSecTen';

export class SectionTen extends Component {
    state = {
        sales: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/sales')
            .then(res => this.setState({
                sales: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        const { sales, isLoaded } = this.state;
        console.log(sales);
        if (isLoaded) {
            return (
                <div className="section">
                    <div className="wrapper no-paddings">
                        <div className="news page-news">
                            <div className="div-in-otzivas">
                                <div className="col-otzivas _50-proc">
                                    <div className="img-people-otzivas otzivas">
                                        <ImgSecTen image={sales[0].featured_media} altt={sales[0].title.rendered} />
                                    </div>
                                </div>
                                <div className="col-otzivas _50-proc left w-clearfix">
                                    <div className="pclass" dangerouslySetInnerHTML={{__html: sales[0].content.rendered}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="vertical-line-25">
                        </div>
                        <div className="vertical-line">
                        </div>
                    </div>
                    <div className="vertical-line _50">
                    </div>
                </div>
            )
        }
        return <h3>Loading...</h3>
    }
}

export default SectionTen
