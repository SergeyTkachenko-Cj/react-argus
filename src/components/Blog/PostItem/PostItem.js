import React, { Component, Fragment } from 'react';
import axios from 'axios';
import playarrow from '../../../img/play-arrow.svg';

export class PostItem extends Component {
    state = {
        img: '',
        isLoaded: false
    }

    componentDidMount() {
        if (this.props.img) {
            axios.get(`http://a0325522.xsph.ru/wp-json/wp/v2/media/${this.props.img}`)
                .then(res => this.setState({
                    img: res.data,
                    isLoaded: true
                }))
                .catch(err => console.log(err))
        }
    }
    render() {
        const { title, excerpt, date } = this.props;
        const { img, isLoaded } = this.state;
        let newdate = `${date}Z`;
        let normalDate = new Date(newdate).toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric' });
        if (isLoaded && img) {
            return (
                <Fragment>
                    <div class="card-news w-clearfix">
                        <div class="small-h">статья - {normalDate}</div>
                        <h3>{title}</h3>
                        <div class="p-class" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                        <a href="#" class="link w-inline-block" data-ix="line-arrow">
                            <div>читать полностью</div>
                            <div class="before-txt-link">
                                <div class="fon-arrow">
                                    <img src={playarrow} alt="" class="arrow-line" />
                                    <div class="line-arrow">
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="img-in-news newser">
                            <div class="_4-imgis">
                                <img src={img.source_url} alt="" class="glitch__img" />
                                <img src={img.source_url} alt="" class="glitch__img" />
                                <img src={img.source_url} alt="" class="glitch__img" />
                                <img src={img.source_url} alt="" class="glitch__img" />
                                <img src={img.source_url} alt="" class="glitch__img" />
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        }
        return (
            <Fragment>
                <div class="card-news w-clearfix">
                    <div class="small-h">статья - {normalDate}</div>
                    <h3>{title}</h3>
                    <div class="p-class" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                    <a href="#" class="link w-inline-block" data-ix="line-arrow">
                        <div>читать полностью</div>
                        <div class="before-txt-link">
                            <div class="fon-arrow">
                                <img src={playarrow} alt="" class="arrow-line" />
                                <div class="line-arrow">
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </Fragment>
        )
    }
}

export default PostItem
