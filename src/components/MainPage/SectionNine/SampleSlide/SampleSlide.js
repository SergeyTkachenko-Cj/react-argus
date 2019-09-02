import React, { Component } from 'react';
import axios from 'axios';

export class SampleSlide extends Component {
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
                    <div className="div-in-slide-primeras">
                        <div className="col-in-slider primeras">
                            <div className="mama-obrazci">
                                <img src={ img } alt={ this.props.title } className="image-16" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return <h3>Образцов не найдено</h3>
    }
}

export default SampleSlide
