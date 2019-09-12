import React, { Component, Fragment } from 'react';
import axios from 'axios';
import SeminarBigService from './SeminarBigService/SeminarBigService';
import SeminarsSmallServices from './SeminarsSmallServices/SeminarsSmallServices';

export class SeminarsContent extends Component {
    state = {
        services: [],
        isLoaded: false
    }

    componentDidMount(){
        axios.get(`http://a0325522.xsph.ru/wp-json/wp/v2/services?services_cat=${this.props.catid}`)
        .then(res => this.setState({
            services: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err))
    }

    render() {
        const { services, isLoaded } = this.state;
        const BigService = services.shift();
        services.slice(0,1);
        return (
            <Fragment>
                <div className="section">
                    <div className="wrapper">
                        <div className="news page-news w-clearfix">
                            <SeminarBigService service={BigService} />
                            {services.map(item => <SeminarsSmallServices key={item.id} date={item.date} title={item.title.rendered} slug={item.slug} excerpt={item.excerpt.rendered}/>)}
                        </div>
                        <div className="vertical-line-25">
                        </div>
                        <div className="vertical-line">
                        </div>
                    </div>
                    <div className="vertical-line _50">
                    </div>
                    <div className="fon-greeer">
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default SeminarsContent
