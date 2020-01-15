/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import BigServices from './BigServices/BigServices';
import SmallService from './SmallService/SmallService';

export class SectionThree extends Component {
  state = {
    taxonomy: {},
    services: [],
    isLoaded: false
  }

  componentDidMount() {
    const getTaxonomy = axios.get('http://admin.argus-eko.ru/wp-json/wp/v2/services_cat/2');
    const getServices = axios.get('http://admin.argus-eko.ru/wp-json/wp/v2/services?services_cat=2');

    Promise.all([getTaxonomy, getServices])
      .then(res => this.setState({
        taxonomy: res[0].data,
        services: res[1].data,
        isLoaded: true
      }))
      .catch(err => console.log(err))
  }

  componentDidUpdate() {
    Webflow.destroy();
    Webflow.ready();
    Webflow.require('ix2').init();
  }

  render() {
    const { taxonomy, services, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <Fragment>
          <div className="section">
            <div className="wrapper no-bottom-padding">
              <BigServices taxonomy={taxonomy} />
              <div className="vertical-line"></div>
              <div className="vertical-line-25"></div>
              <div className="news w-clearfix">
                {services.map(service => <SmallService key={service.id} id={service.id} title={service.title.rendered} excerpt={service.excerpt.rendered} slug={service.slug} />)}
              </div>
            </div>
            <div className="fon-greeer"></div>
            <div className="vertical-line _50"></div>
          </div>
        </Fragment>
      )
    }
    return null;
  }
}

export default SectionThree