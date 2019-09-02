import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage/MainPage';
import SingleSro from './components/SRO/SingleSro';

function App() {
  return (
    <Router>
        <Header />
        <div>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/sro/:slug" component={SingleSro} />
        </div>
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
    </Router>
  );
}

export default App;
