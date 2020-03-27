import React from 'react';

const SroCopies = props => {
    let post = '';
    
    switch(props.name) {
        case 'СРО Строителей':
            post = 'st';
            break;
        case 'СРО Проектировщиков':
            post = 'pr';
            break;
        case 'СРО Изыскателей':
            post = 'iz';
            break;
    }

    return (
        <div className="copies_cont">
            <div className="copies_head">{props.name}</div>
            <div className="count_cont">
              <button onClick={event => props.handle(event, props)}>-</button>
              <span className="number">{props.copy}</span>
              <button onClick={event => props.handle(event, props)}>+</button>
              <span className="copii">(копии)</span>
            </div>
            <input type="hidden" name={post} defaultValue={props.copy} />
        </div>
    )
}

export default SroCopies;