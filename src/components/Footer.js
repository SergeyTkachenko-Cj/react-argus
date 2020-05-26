/* eslint-disable */
import React, { Component, Fragment } from 'react'

export class Footer extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const { options } = this.props;
        const socialNet = [
            {ssylka: "https://www.youtube.com/channel/UCki5LRGXPm2X1yrWoEQC6pA", nazvanie: "YouTube"},
            {ssylka: "https://instagram.com/gk_argus?igshid=2yng5geom75p", nazvanie: "Instagram"},
            {ssylka: "https://www.facebook.com/arguseko/", nazvanie: "Facebook"}
        ];

        if (options.acf) {
            return (
                <Fragment>
                    <footer className="fotter">
                        <div className="wrapper fotter">
                            <div className="vertical-line-25">
                            </div>
                            <div className="vertical-line">
                            </div>
                            <div className="fotter-rows w-row">
                                <div className="fotter-clos w-clearfix w-col w-col-3 w-col-medium-6">
                                    <div className="p-class fotter-links">
                                        <a href={`tel:${options.acf.telefon}`} className="text-link">{options.acf.telefon}</a>
                                        <br />
                                        <a href={`tel:${options.acf["telefon_2"]}`} className="text-link">{options.acf["telefon_2"]}</a>
                                        <br />
                                        <a href={`mailto:${options.acf.email}`} className="text-link">{options.acf.email}`</a>
                                    </div>
                                </div>
                                <div className="fotter-clos w-clearfix w-col w-col-3 w-col-medium-6">
                                    <div className="p-class fotter-links">
                                        {/* {options.acf["sotsyalnie_seti"].map((link, index) => <Fragment key={index}><a href={link.ssylka} className="text-link">{link.nazvanie}</a><br /></Fragment>)} */}

                                        {/* Hardcoded contacts due to WP interface issues */}

                                        {socialNet.map((link, index) => <Fragment key={index}><a href={link.ssylka} className="text-link" target="_blank">{link.nazvanie}</a><br /></Fragment>)}
                                    </div>
                                </div>
                                <div className="fotter-clos w-clearfix w-col w-col-3 w-col-medium-6">
                                    {options.acf["rejimi_raboty"].map((item, index) => <div key={index} className="p-class fotter-links">{item.rejim_raboty}</div>)}
                                </div>
                                <div className="fotter-clos w-clearfix w-col w-col-3 w-col-medium-6">
                                    <div className="p-class fotter-links">{options.acf.kopirajt}
                                        <br />{options.acf.adres}</div>
                                </div>
                            </div>
                        </div>
                        <div className="vertical-line _50">
                        </div>
                    </footer>
                </Fragment>
            )
        }
        return null;
    }
}

export default Footer
