import React from 'react';
import logo from './logo.svg';
import playarrow from './img/play-arrow.svg';
import './App.css';
import Header from './components/Header';
import ReSectionOne from './components/SectionOne/ReSectionOne';
import SectionOne from './components/SectionOne/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree/SectionThree';
import SectionFour from './components/SectionFour/SectionFour';
import SectionFive from './components/SectionFive/SectionFive';
import SectionSix from './components/SectionSix/SectionSix';
import SectionSeven from './components/SectionSeven/SectionSeven';
import SectionEight from './components/SectionEight/SectionEight';
import SectionNine from './components/SectionNine/SectionNine';
import SectionTen from './components/SectionTen/SectionTen';
import SectionEleven from './components/SectionEleven/SectionEleven';

function App() {
  return (
    <div>
      <Header />
      <ReSectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour postid="0" />
      <SectionFive />
      <SectionFour postid="1" />
      <SectionSix />
      <SectionSeven />
      <div className="section">
        <div className="wrapper no-paddings">
          <div className="left-div">
            <div className="small-h">отзывы</div>
            <h2>Вот что о нас говорят</h2>
          </div>
          <div className="vertical-line">
          </div>
          <div className="vertical-line-25">
          </div>
        </div>
        <div className="fon-greeer">
        </div>
        <div className="fon-green">
        </div>
        <div className="vertical-line _50">
        </div>
      </div>
      <SectionEight />
      <SectionNine />
      <div className="section">
        <div className="wrapper no-bottom-padding">
          <div className="in-wrapper">
            <div className="small-h">акции</div>
            <h2>Акции нашей компании</h2>
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
      <SectionTen />
      <SectionEleven />
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
  );
}

export default App;
