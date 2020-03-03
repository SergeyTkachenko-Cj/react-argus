/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import StudingChildItem from './StudingChildItem'
import NotFoundPosts from '../../../Error/NotFoundPosts';

export class StudingChild extends Component {
    state = {
        cats: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('https://admin.argus-eko.ru/wp-json/wp/v2/services_cat')
            .then(res => this.setState({
                cats: res.data.filter(item => item.parent === this.props.catid),
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { cats, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="section">
                        <div className="wrapper no-paddings">
                            <div className="news w-clearfix">
                                {cats.map(cat => <StudingChildItem key={cat.id} title={cat.name} excerpt={cat.description} slug={cat.slug} />)}
                            </div>
                            <div className="vertical-line">
                            </div>
                            <div className="vertical-line-25">
                            </div>
                        </div>
                        <div className="fon-greeer">
                        </div>
                        <div className="vertical-line _50">
                        </div>
                    </div>
                </Fragment>
            )
        }
        return <NotFoundPosts />;
    }
}

export default StudingChild
