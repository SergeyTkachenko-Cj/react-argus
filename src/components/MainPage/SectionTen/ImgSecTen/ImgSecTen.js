import React, { Component } from 'react';
import axios from 'axios';

export class ImgSecTen extends Component {
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
                <img src={img} alt={this.props.altt} className="img-aciya" />
            )
        }
        return null
    }
}

export default ImgSecTen
