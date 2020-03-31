/* eslint-disable */
import React, { Component, Fragment } from 'react'

export class LitsaItem extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
        Webflow.require('ix2').init();
    }

    render() {
        const { image, content } = this.props;
        console.log(content);
        return (
            <Fragment>
            <div className="card-news w-clearfix face-cards">
                <img src={image} alt="" className="img-faces" />
                <div className="p-class p-class-faces" dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
            </Fragment>
        )
    }
}

export default LitsaItem
