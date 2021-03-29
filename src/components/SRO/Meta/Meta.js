import React from "react";
import {Helmet} from "react-helmet";
import MetaData from "./MetaData";

const Meta = props => {
    return (
        <div>
            <Helmet>
                <title>{MetaData[props.data]["title"]}</title>
                <meta name="description" content={MetaData[props.data]["meta"]} />
                <meta name="keywords" content={MetaData[props.data]["metakeys"]} />
            </Helmet>
        </div>
    )
}

export default Meta