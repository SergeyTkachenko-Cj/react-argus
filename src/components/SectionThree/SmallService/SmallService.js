import React, { Component } from 'react';
import playarrow from '../../../img/play-arrow.svg';

export class SmallService extends Component {
    render() {
        return (
            <div className="card-news w-clearfix">
                <h3>{this.props.title}</h3>
                <div className="pclass" dangerouslySetInnerHTML={{ __html: this.props.excerpt}}></div>
                <a href="#" className="link w-inline-block" data-ix="line-arrow">
                  <div>Узнать подробнее</div>
                  <div className="before-txt-link">
                    <div className="fon-arrow">
                      <img src={playarrow} alt="" className="arrow-line" />
                      <div className="line-arrow">
                      </div>
                    </div>
                  </div>
                </a>
              </div>
        )
    }
}

export default SmallService
