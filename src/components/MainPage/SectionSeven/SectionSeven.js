/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import ClientCard from './ClientCard/ClientCard';

export class SectionSeven extends Component {
    _isMounted = false;

    state = {
        clients: '',
        isLoaded: false
    }

    componentDidMount() {
        this._isMounted = true;

        axios.get('https://admin.argus-eko.ru/wp-json/wp/v2/clients?per_page=11')
            .then(res => {
                if (this._isMounted) {
                    this.setState({
                        clients: res.data,
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
        Webflow.require('ix2').init();
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div className="section">
                    <div className="wrapper">
                        <div className="in-wrapper">
                            <div className="small-h">наши клиенты</div>
                            <h2>Нам доверяют:</h2>
                        </div>
                        <div className="logos-clients w-clearfix">
                            {this.state.clients.map(client => <ClientCard key={client.id} image={client.featured_media} title={client.title.rendered} link={client.content.rendered} />)}
                        </div>
                        <div className="vertical-line-25">
                        </div>
                        <div className="vertical-line">
                        </div>
                    </div>
                    <div className="vertical-line _50">
                    </div>
                    <div className="fon-green right">
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default SectionSeven
