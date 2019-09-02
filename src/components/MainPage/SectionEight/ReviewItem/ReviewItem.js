import React, { Component } from 'react';
import axios from 'axios';

export class ReviewItem extends Component {
    state = {
        img: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`http://a0325522.xsph.ru/wp-json/wp/v2/media/${this.props.image}`)
            .then(res => this.setState({
                img: res.data.source_url,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        const { img, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div className="w-slide">
                    <div className="div-in-otzivas">
                        <div className="col-otzivas">
                            <div className="img-people-otzivas in-home">
                                <a href="#" className="_4-imgis pops w-inline-block w-lightbox">
                                    <img src={ img } alt="" className="glitch__img otziv" />
                                    <img src={ img } alt="" className="glitch__img otziv" />
                                    <img src={ img } alt="" className="glitch__img otziv" />
                                    <img src={ img } alt="" className="glitch__img otziv" />
                                    <img src={ img } alt="" className="glitch__img otziv" />
                                </a>
                            </div>
                        </div>
                        <div className="col-otzivas _50-proc">
                            <div className="small-h">{ this.props.title }</div>
                            <blockquote className="itatas" dangerouslySetInnerHTML={{ __html: this.props.content }}></blockquote>
                        </div>
                    </div>
                </div>
            )
        }
        return <h3>Loading...</h3>
    }
}

export default ReviewItem
