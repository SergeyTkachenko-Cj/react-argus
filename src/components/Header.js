import React, { Component } from 'react'
import axios from 'axios';
import DropdownMenu from '../components/DropdownMenu/DropdownMenu'

export class Header extends Component {
  state = {
    urls: [],
    tel: '',
    isLoaded: false
  }

  componentDidMount() {
    const getUrl = axios.get('http://a0325522.xsph.ru/wp-json/wp-api-menus/v2/menus/8');
    const getTel = axios.get('http://a0325522.xsph.ru/wp-json/acf/v3/options/options');

    Promise.all([getUrl, getTel])
      .then(res => this.setState({
        urls: res[0].data.items,
        tel: res[1].data,
        isLoaded: true
      }))
      .catch()
  }

  render() {
    const { urls, tel, isLoaded } = this.state;
    console.log(tel);
    if (isLoaded) {
      return (
        <div data-collapse="medium" data-animation="default" data-duration="400" className="navbar-2 w-nav">
          <div className="wrapper-in-head">
            <div className="top-menu">
              <a href="/" className="brand-3 w-nav-brand w--current"></a>
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
              {urls.map(dropdown => <DropdownMenu key={dropdown.id} parenttitle={dropdown.title} childs={dropdown.children} /> )}
              <a href={'tel:' + tel.acf.telefon} className="link phone">{tel.acf.telefon}</a>
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
      )
    }
    return <h3>Loading...</h3>
  }
}

export default Header
