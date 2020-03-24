import React from 'react';

const SroCopies = props => {
    return (
        <div className="copies_cont">
            <div className="copies_head">{props.name}</div>
            <div className="count_cont">
              <button onClick={event => props.handle(event, props)}>-</button>
              <span>{props.copy}</span>
              <button onClick={event => props.handle(event, props)}>+</button>
              <span>(копии)</span>
            </div>
            <input type="hidden" name={props.name} defaultValue={props.copy} />
        </div>
    )
}

export default SroCopies;