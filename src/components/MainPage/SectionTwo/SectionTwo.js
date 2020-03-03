/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';

export class SectionTwo extends Component {
    state = {
        content: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get('https://admin.argus-eko.ru/wp-json/wp/v2/pages/2')
            .then(res => this.setState({
                content: res.data.content.rendered,
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
                <div className="section">
                    <div className="wrapper paddings">
                        <div className="small-h">приветствие</div>
                        <blockquote dangerouslySetInnerHTML={{ __html: this.state.content }}></blockquote>
                    </div>
                    <div className="fon-green">
                    </div>
                    <div className="fon-greeer">
                    </div>
                    <div className="vertical-line _50">
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default SectionTwo