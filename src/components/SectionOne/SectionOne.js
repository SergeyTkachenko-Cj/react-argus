import React from 'react';
import playarrow from '../../img/play-arrow.svg';
import SlideItem from './SlideItem/SlideItem';

function SectionOne() {
    let SlideData = [
        { title: 'Регистрируем электролабораторию в Москве и Области от 60.001р напрямую в Ростехнадзоре', desc: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posueree.'},
        { title: 'Регистрируем электролабораторию в Москве и Области от 60.005р напрямую в Ростехнадзоре', desc: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posueree.'},
        { title: 'Регистрируем электролабораторию в Москве и Области от 60.007р напрямую в Ростехнадзоре', desc: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posueree.'},
        { title: 'Регистрируем электролабораторию в Москве и Области от 60.009р напрямую в Ростехнадзоре', desc: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posueree.'}
    ]
    
    let Slides = SlideData.map(slide => <SlideItem title={slide.title} desc={slide.desc}/>);
    return (
        <div className="section">
            <div data-animation="slide" data-duration="500" data-infinite="1" className="slider w-slider">
                <div className="w-slider-mask">
                    {Slides}
                </div>
                <div className="left-arrow w-slider-arrow-left" data-ix="line-arrow">
                    <div className="before-txt-link revers">
                        <div className="fon-arrow">
                            <img src={playarrow} alt="" className="arrow-line" />
                            <div className="line-arrow">
                            </div>
                        </div>
                    </div>
                    <div>назад</div>
                </div>
                <div className="right-arrow w-slider-arrow-right" data-ix="line-arrow">
                    <div>далее</div>
                    <div className="before-txt-link">
                        <div className="fon-arrow">
                            <img src={playarrow} alt="" className="arrow-line" />
                            <div className="line-arrow">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-nav w-slider-nav w-num">
                </div>
            </div>
            <div className="fon-greeer">
            </div>
            <div className="fon-green right">
            </div>
            <div className="vertical-line _50">
            </div>
            <div className="vertical-line">
            </div>
        </div>
    );
}

export default SectionOne;