/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';

export class ImageForFour extends Component {
    _isMounted = false;

    state = {
        img: '',
        isLoaded: false
    }

    componentDidMount() {
        this._isMounted = true;

        axios.get(`https://admin.argus-eko.ru/wp-json/wp/v2/media/${this.props.image}`)
            .then(res => {
                if (this._isMounted) {
                    this.setState({
                        img: res.data.source_url,
                        isLoaded: true
                    })
                }
            })
            .catch(err => console.log(err))
    }

    componentWillUnmount() {
        this._isMounted = false;
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
