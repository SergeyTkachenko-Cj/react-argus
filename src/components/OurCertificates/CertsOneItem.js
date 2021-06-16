/* eslint-disable */
import React, { Component, Fragment } from 'react'

export class CertsOneItem extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const {url, type, filesize, id, width, height, filename} = this.props.image;
        const urladd = this.props.pdf.url;

        let data = {
            "items": [
                {
                    "type": type,
                    "_id": id,
                    "fileName": filename,
                    "origFileName": filename,
                    "width": width,
                    "height": height,
                    "fileSize": filesize,
                    "url": url
                }
            ]
        }

        const lnk = () => {
            const link = document.createElement('a');
            link.href = urladd;
            link.target = '_blank';
                // in case instant download needed (files to public folder)
                // link.href = './сертификатсоответствия.pdf'; 
                // link.download = 'сертификатсоответствия.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        return (
            <Fragment>
                <div className="div-in-otzivas div-feedback">
                    <div className="col-otzivas _50-proc contest-feedback">
                        <a href="#" onClick={lnk} className="img-people-otzivas otzivas w-inline-block w-lightbox">
                            <img src={url} alt="" className="img-otziv" />
                        </a>
                    </div>
                    <div className="col-otzivas _50-proc left text-content-feedback">
                        <div className="small-h h-content-feedback">{this.props.title}</div>
                        <blockquote className="itatas" dangerouslySetInnerHTML={{ __html: this.props.content }}></blockquote>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CertsOneItem
