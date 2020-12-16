import React from 'react';

const Icon = props => {
    return (
        <div className="p-class">
            <div className="wp-block-image">
                <figure className="aligncenter is-resized">
                    <img loading="lazy" src={props.url} alt="" className="wp-image-665" width="143" height="143" sizes="(max-width: 143px) 100vw, 143px" />
                </figure>
            </div>
        </div>
    )
};

export default Icon;