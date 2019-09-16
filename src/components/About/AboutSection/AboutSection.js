import React, { Component, Fragment } from 'react'

export class AboutSection extends Component {
    render() {
        const { img , text } = this.props;
        console.log(img);
        return (
            <Fragment>
                <div class="section">
                    <div class="wrapper">
                        <div class="row-3x w-row">
                            <div data-w-id="1138766e-dc1a-b71e-9c8f-f4555f73015b" class="col-3x left _4-img w-col w-col-6">
                                <div class="_4-imgis">
                                    <img src={img} alt="" class="glitch__img" />
                                    <img src={img} alt="" class="glitch__img" />
                                    <img src={img} alt="" class="glitch__img" />
                                    <img src={img} alt="" class="glitch__img" />
                                    <img src={img} alt="" class="glitch__img" />
                                </div>
                                <div class="line-gens">
                                    <div class="green-line">
                                    </div>
                                    <div class="green-line">
                                    </div>
                                    <div class="green-line">
                                    </div>
                                </div>
                            </div>
                            <div class="col-3x left w-clearfix w-col w-col-6">
                                <div class="p-class" dangerouslySetInnerHTML={{__html: text}}></div>
                            </div>
                        </div>
                        <div class="vertical-line">
                        </div>
                        <div class="vertical-line-25">
                        </div>
                    </div>
                    <div class="fon-greeer">
                    </div>
                    <div class="vertical-line _50">
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AboutSection
