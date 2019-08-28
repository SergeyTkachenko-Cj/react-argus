import React, { Component } from 'react';
import axios from 'axios';

export class ClientCard extends Component {
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
                <a href="#" className="card logos-clients w-inline-block">
                    <div className="img-client">
                        <img src={img} alt="" />
                    </div>
                    <div className="small-h">{ this.props.title }</div>
                </a>
            )
        }
        return (
            <a href="#" className="card logos-clients w-inline-block">
                <div className="small-h">{ this.props.title }</div>
            </a>
        )
    }
}

export default ClientCard
