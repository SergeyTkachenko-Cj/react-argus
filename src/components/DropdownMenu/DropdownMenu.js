import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class DropdownMenu extends Component {
    render() {
        let slug = this.props.slug;
        let link = `/${slug}`;
        if (slug == 'a0325522.xsph.ru') {
            link = '';
        }
        console.log(this.props);
        return (
            <div data-hover="1" data-delay="0" className="d-down w-dropdown">
                <div className="dropdown-toggle w-dropdown-toggle">
                    <div className="ico w-icon-dropdown-toggle"></div>
                    <div>{this.props.parenttitle}</div>
                </div>
                <nav className="dropdown-list w-dropdown-list">
                    {this.props.items
                        .filter(item => {
                            if (item.menu_item_parent == this.props.parentid) return item;
                        })
                        .map(item => {
                            if (item.url === 'http://el.argus-eko.ru/') {
                                return <a key={item.ID} href={item.url} target="_blank" className="link drop-link w-dropdown-link" data-ix="dop-navy" >{item.title}</a>
                            } else {
                                return <Link key={item.ID} to={`${link}/${item.slug}`} className="link drop-link w-dropdown-link" data-ix="dop-navy" >{item.title}</Link>
                            }
                        })}
                </nav>
            </div>
        )
    }
}

export default DropdownMenu
