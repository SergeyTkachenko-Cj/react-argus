import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class DropdownMenu extends Component {
    render() {
        return (
            <div data-hover="1" data-delay="0" className="d-down w-dropdown">
                <div className="dropdown-toggle w-dropdown-toggle">
                    <div className="ico w-icon-dropdown-toggle">
                    </div>
                    <div>{this.props.parenttitle}</div>
                </div>
                <nav className="dropdown-list w-dropdown-list">
                    {this.props.childs.map(item => <Link key={item.id} to={`/sro/${item.object_slug}`} className="link drop-link w-dropdown-link" data-ix="dop-navy" serviseid={item.id} >{item.title}</Link>)}
                </nav>
            </div>
        )
    }
}

export default DropdownMenu
