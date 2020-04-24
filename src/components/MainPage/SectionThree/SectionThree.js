/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import BigServices from './BigServices/BigServices';
import SmallService from './SmallService/SmallService';

export class SectionThree extends Component {
  _isMounted = true;

  state = {
    taxonomy: {},
    services: [],
    isLoaded: false
  }

  componentDidMount() {
    this._isMounted = true;

    const getTaxonomy = axios.get('https://admin.argus-eko.ru/wp-json/wp/v2/services_cat/2');
    const getServices = axios.get('https://admin.argus-eko.ru/wp-json/wp/v2/services?services_cat=2');

    Promise.all([getTaxonomy, getServices])
        .then(res => {
          if (this._isMounted) {
            this.setState({
              taxonomy: res[0].data,
              services: res[1].data,
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
    const { taxonomy, services, isLoaded } = this.state;
    if (isLoaded) {
      const order = (a, b) => {
        if (a.date < b.date) return 1
        if (a.date > b.date) return -1
        return 0
      }
      return (
        <Fragment>
          <div className="section">
            <div className="wrapper no-bottom-padding">
              <BigServices taxonomy={taxonomy} />
              <div className="vertical-line"></div>
              <div className="vertical-line-25"></div>
              <div className="news w-clearfix">
                {services.filter(service => service.acf['dovavit_v_karusel'] == false).sort((a, b) => order(a, b)).filter((item, index) => index < 4).map(service => <SmallService key={service.id} id={service.id} title={service.title.rendered} excerpt={service.excerpt.rendered} slug={service.slug} />)}
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