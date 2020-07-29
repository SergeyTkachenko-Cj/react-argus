/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import Litsa from './components/Litsa/Litsa';
import Reviews from './components/Reviews/Reviews';
import Contacts from './components/Contacts/Contacts';
import NotFound from './components/Error/NotFound';
import Footer from './components/Footer';
import Studing from './components/Studing/Studing';

export class App extends Component {
  _isMounted = true;

  state = {
    options: [],
    isLoaded: false
  }

  componentDidMount() {
    this._isMounted = true;

      axios.get('https://admin.argus-eko.ru/wp-json/acf/v3/options/options')
      .then(res => {
        if (this._isMounted) {
          this.setState({ options: res.data });
        }
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate() {
    Webflow.destroy();
    Webflow.ready();
  }

  render() {
    const { options, isLoaded } = this.state;

    return (
      <Router>
        <Fragment>
          <Header tel={options.acf} />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/o-kompanii" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/aktsii" component={Sales} />
            <Route exact path="/litsa" component={Litsa} />
            <Route exact path="/otzyvy" component={Reviews} />
            <Route exact path="/kontakty" component={Contacts} />
            <Route exact path={["/sro", "/licenses", "/certifications", "/legal-services", "/work-safety"]} component={Sro} />
            <Route exact path="/training-and-seminars" component={Studing} />
            <Route exact path={["/sro/:slug", "/certifications/:slug", "/legal-services/:slug", "/work-safety/:slug"]} component={SingleSro} />
            <Route exact path="/licenses/:slug" component={SingleLicenses} />
            <Route exact path="/training-and-seminars/:slug" component={Seminars} />
            <Route exact path={["/training-and-seminars/seminars/:slug", "/training-and-seminars/learning-programs/:slug", "/blog/:slug"]} component={SinglePage} />
            <Route component={NotFound} />
          </Switch>
          <Footer options={options} />
        </Fragment>
      </Router>
    )
  }
}

export default App
