/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';

export class ImageForFour extends Component {
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
 
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }
    
    render() {
        if (this.state.isLoaded) {
            return (
                <img src={ this.state.img } alt="" className="glitch__img" />
            )
        }
        return null
    }
}

export default ImageForFour
