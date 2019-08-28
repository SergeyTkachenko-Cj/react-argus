import React, { Component } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import BigServices from './BigServices/BigServices';
import SmallService from './SmallService/SmallService';

export class SectionThree extends Component {
  state = {
    services: [],
    isLoaded: false
  }

  componentDidMount() {
    axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/services?services_cat=2')
      .then(res => this.setState({
        services: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err))
  }

  render() {
    const { services, isLoaded } = this.state;
    let firstBigService = services.shift();
    services.slice(0,1);
    if(isLoaded) {
      return (
        <div className="section">
          <div className="wrapper no-bottom-padding">
            <BigServices service={firstBigService} />
            <div className="vertical-line">
            </div>
            <div className="vertical-line-25">
            </div>
            <div className="news w-clearfix">
              { services.map(service => <SmallService key={service.id} title={service.title.rendered} excerpt={service.excerpt.rendered} />) }
            </div>
          </div>
          <div className="fon-greeer">
          </div>
          <div className="vertical-line _50">
          </div>
        </div>
      )
    }
    return <h3>Loading...</h3>
  }
}

export default SectionThree