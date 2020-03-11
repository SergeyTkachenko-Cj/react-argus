/* eslint-disable */
import React, { Component, Fragment } from 'react'

export class LitsaItem extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
        Webflow.require('ix2').init();
    }

    render() {
        const { image, content } = this.props;
        console.log(content);
        return (
            // <Fragment>
            //     <div className="news page-news">
            //         <div className="div-in-otzivas">
            //             <div className="col-otzivas _50-proc col-face">
            //                 <div className="img-people-otzivas otzivas img-face">
            //                     <img src={image} alt="" className="img-faces" />
            //                 </div>
            //             </div>
            //             <div className="col-otzivas _50-proc left w-clearfix">
            //                 <div className="p-class" dangerouslySetInnerHTML={{ __html: content }}>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </Fragment>
            <Fragment>
            <div className="card-news w-clearfix face-cards">
                {/* <div className="small-h">{cat[0]} - {normalDateDay}/{normalDateMonth}/{normalDateYear}</div>
                <h3>{title}</h3> */}
                {/* <div className="img-people-otzivas otzivas img-face">
                    <img src={image} alt="" className="img-faces" />
                </div> */}
                <img src={image} alt="" className="img-faces" />
                <div className="p-class p-class-faces" dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
            </Fragment>
        )
    }
}

export default LitsaItem
