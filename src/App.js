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
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer';

export class App extends Component {
  state = {
    options: [],
    servises: [],
    clients: [],
    reviews: [],
    samples: [],
    posts: [],
    isLoaded: false
  }

  componentDidMount() {
    axios.get('http://a0325522.xsph.ru/wp-json/acf/v3/options/options')
      .then(res => this.setState({
        options: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
  }

  render() {
    const { options } = this.state;
    return (
      <Router>
        <div>
          <Header tel={options.acf}/>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/o-kompanii" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/aktsii" component={Sales} />
          <Route exact path="/otzyvy" component={Reviews} />
          <Route exact path="/kontakty" component={Contacts} />
          <Route exact path={["/sro", "/licenses", "/certifications", "/legal-services", "/work-safety"]} component={Sro} />
          <Route exact path="/sro/:slug" component={SingleSro} />
          <Route exact path="/licenses/:slug" component={SingleLicenses} />
          <Route exact path="/studing/:slug" component={Seminars} />
          <Route exact path="/studing/seminars/:slug" component={SinglePage} />
          <Footer options={options}/>
        </div>
      </Router>
    )
  }
}

export default App
