import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage/MainPage';
import SingleSro from './components/SRO/SingleSro';
import SingleLicenses from './components/Licenses/SingleLicenses';
import Seminars from './components/Studing/Seminars/Seminars';
import SinglePage from './components/SinglePage/SinglePage';
import Sro from './components/SRO/Sro';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Sales from './components/Sales/Sales';
import Reviews from './components/Reviews/Reviews';

export class App extends Component {
  state = {
    servises: [],
    clients: [],
    reviews: [],
    samples: [],
    posts: [],
    isLoaded: false
  }

  componentDidMount() {
    const getServices = axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/services');
    const getClients = axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/clients');
    const getReviews = axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/reviews');
    const getSamples = axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/samples');
    const getPosts = axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/posts');

    Promise.all([getServices, getClients, getReviews, getSamples, getPosts])
      .then(res => this.setState({
        servises: res[0].data,
        clients: res[1].data,
        reviews: res[2].data,
        samples: res[3].data,
        posts: res[4].data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
  }

  render() {
    const { servises, clients, reviews, samples, posts } = this.state;
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/o-kompanii" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/aktsii" component={Sales} />
          <Route exact path="/otzyvy" component={Reviews} />
          <Route exact path={["/sro", "/licenses", "/certifications", "/legal-services", "/work-safety"]} component={Sro} />
          <Route exact path="/sro/:slug" component={SingleSro} />
          <Route exact path="/licenses/:slug" component={SingleLicenses} />
          <Route exact path="/studing/:slug" component={Seminars} />
          <Route exact path="/studing/seminars/:slug" component={SinglePage} />
          <footer className="fotter">
            <div className="wrapper fotter">
              <div className="vertical-line-25">
              </div>
              <div className="vertical-line">
              </div>
              <div className="fotter-rows w-row">
                <div className="fotter-clos w-clearfix w-col w-col-3 w-col-medium-6">
                  <div className="pclass fotter-links">
                    <a href="tel:8(495)585-09-82" className="text-link">8 (495) 585-09-82</a>
                    <br />
                    <a href="tel:8(495)506-38-27" className="text-link">8 (495) 506-38-27</a>
                    <br />
                    <a href="#" className="text-link">argus@argus-eko.ru</a>
                  </div>
                </div>
                <div className="fotter-clos w-clearfix w-col w-col-3 w-col-medium-6">
                  <div className="pclass fotter-links">
                    <a href="tel:8(495)585-09-82" className="text-link">instagram</a>
                    <br />
                    <a href="tel:8(495)506-38-27" className="text-link">YouTube</a>
                    <br />
                    <a href="#" className="text-link">FaceBook</a>
                  </div>
                </div>
                <div className="fotter-clos w-clearfix w-col w-col-3 w-col-medium-6">
                  <div className="p-class fotter-links">Пн - Чт (с 9:00 до 18:00)
            <br />Пт (с 9:00 до 16:00)
            <br />Cб - Вс (выходной)</div>
                </div>
                <div className="fotter-clos w-clearfix w-col w-col-3 w-col-medium-6">
                  <div className="pclass fotter-links">© &quot;Аргус-Эко&quot; 1993-2019
            <br />Проспект Маршала Жукова,
            <br />дом 2, офис 227 (2-й этаж)</div>
                </div>
              </div>
            </div>
            <div className="vertical-line _50">
            </div>
          </footer>
        </div>
      </Router>
    )
  }
}

export default App
