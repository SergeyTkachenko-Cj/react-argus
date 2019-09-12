import React, { Component } from 'react';
import ReSectionOne from './SectionOne/ReSectionOne';
import SectionTwo from '../SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';
import SectionFive from './SectionFive/SectionFive';
import SectionSix from './SectionSix/SectionSix';
import SectionSeven from './SectionSeven/SectionSeven';
import SectionEight from './SectionEight/SectionEight';
import SectionNine from './SectionNine/SectionNine';
import SectionTen from './SectionTen/SectionTen';
import SectionEleven from './SectionEleven/SectionEleven';

export class MainPage extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default MainPage
