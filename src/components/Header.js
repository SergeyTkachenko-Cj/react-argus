/* eslint-disable */
import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DropdownMenu from '../components/DropdownMenu/DropdownMenu'

export class Header extends Component {
  state = {
    urls: [],
    tel: '',
    isLoaded: false
  }

  componentDidMount() {
    axios.get('http://a0325522.xsph.ru/wp-json/better-rest-endpoints/v1/menus/glavnoe-menyu')
      .then(res => this.setState({
        urls: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
  }
  
  componentDidUpdate() {
    Webflow.destroy();
    Webflow.ready();
  }

  render() {
    const { urls, isLoaded } = this.state;
    const { tel } = this.props;
    if (isLoaded && tel) {
      return (
        <Fragment>
          <div data-collapse="medium" data-animation="default" data-duration="400" className="navbar-2 w-nav">
            <div className="wrapper-in-head">
              <div className="top-menu">
                <Link to="/" className="brand-3 w-nav-brand w--current"></Link>
                <div data-delay="1500" data-animation="outin" data-autoplay="1" data-duration="500" data-infinite="1" className="txt-slider w-slider">
                  <div className="w-slider-mask">
                    <div className="slide w-slide">
                      <div className="div-block-34">
                        <div>ЛИЦЕНЗИРОВАНИЕ</div>
                      </div>
                    </div>
                    <div className="slide w-slide">
                      <div className="div-block-34">
                        <div>СЕРТИФИКАЦИЯ</div>
                      </div>
                    </div>
                    <div className="slide w-slide">
                      <div className="div-block-34">
                        <div>Регистрация лаборатории</div>
                      </div>
                    </div>
                    <div className="slide w-slide">
                      <div className="div-block-34">
                        <div>обследование электроустановок</div>
                      </div>
                    </div>
                    <div className="slide w-slide">
                      <div className="div-block-34">
                        <div>аккредитация</div>
                      </div>
                    </div>
                    <div className="slide w-slide">
                      <div className="div-block-34">
                        <div>аттестация</div>
                      </div>
                    </div>
                  </div>
                  <div className="left-arrow-2 w-slider-arrow-left">
                    <div className="w-icon-slider-left">
                    </div>
                  </div>
                  <div className="right-arrow-2 w-slider-arrow-right">
                    <div className="w-icon-slider-right">
                    </div>
                  </div>
                  <div className="slide-nav-2 w-slider-nav w-round">
                  </div>
                </div>
              </div>
              <nav role="navigation" className="nav-menu-block w-nav-menu">
                {urls
                  .filter(dropdown => dropdown.menu_item_parent === "0")
                  .map((dropdown, index) => <DropdownMenu key={dropdown.ID} parenttitle={dropdown.title} slug={dropdown.slug} parentid={dropdown.ID} items={urls} />)}
                <a href={`tel:${tel.telefon}`} className="link phone">{tel.telefon}</a>
              </nav>
            </div>
            <div className="menu-button-3 w-nav-button" data-ix="menu">
              <div className="div-block-33">
                <div className="line-burger-4">
                </div>
                <div className="line-burger-2 _2">
                </div>
                <div className="line-burger-3">
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )
    }
    return (
      <Fragment>
        <div data-collapse="medium" data-animation="default" data-duration="400" className="navbar-2 w-nav">
          <div className="wrapper-in-head">
            <div className="top-menu">
              <Link to="/" className="brand-3 w-nav-brand w--current"></Link>
              <div data-delay="1500" data-animation="outin" data-autoplay="1" data-duration="500" data-infinite="1" className="txt-slider w-slider">
                <div className="w-slider-mask">
                  <div className="slide w-slide">
                    <div className="div-block-34">
                      <div>ЛИЦЕНЗИРОВАНИЕ</div>
                    </div>
                  </div>
                  <div className="slide w-slide">
                    <div className="div-block-34">
                      <div>СЕРТИФИКАЦИЯ</div>
                    </div>
                  </div>
                  <div className="slide w-slide">
                    <div className="div-block-34">
                      <div>Регистрация лаборатории</div>
                    </div>
                  </div>
                  <div className="slide w-slide">
                    <div className="div-block-34">
                      <div>обследование электроустановок</div>
                    </div>
                  </div>
                  <div className="slide w-slide">
                    <div className="div-block-34">
                      <div>аккредитация</div>
                    </div>
                  </div>
                  <div className="slide w-slide">
                    <div className="div-block-34">
                      <div>аттестация</div>
                    </div>
                  </div>
                </div>
                <div className="left-arrow-2 w-slider-arrow-left">
                  <div className="w-icon-slider-left">
                  </div>
                </div>
                <div className="right-arrow-2 w-slider-arrow-right">
                  <div className="w-icon-slider-right">
                  </div>
                </div>
                <div className="slide-nav-2 w-slider-nav w-round">
                </div>
              </div>
            </div>
          </div>
          <div className="menu-button-3 w-nav-button" data-ix="menu">
            <div className="div-block-33">
              <div className="line-burger-4">
              </div>
              <div className="line-burger-2 _2">
              </div>
              <div className="line-burger-3">
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Header
