/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class DropdownMenu extends Component {
    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        let link = `/${this.props.slug}`;
        if (this.props.slug === 'http://admin.argus-eko.ru/' || this.props.slug === 'o-kompanii') {
            link = '';
        }
        return (
            <div tabIndex="0" className="d-down">
                <div className="dropdown-toggle">
                    {link ? <Link to={link}>{this.props.parenttitle}</Link> : <a href="#">{this.props.parenttitle}</a>}
                    <div className="ico w-icon-dropdown-toggle"></div>
                </div>
                <nav className="dropdown-list">
                    {this.props.items
                        .filter(item => item.menu_item_parent == this.props.parentid)
                        .map(item => {
                            if (item.url === 'http://el.argus-eko.ru/') {
                                return <a key={item.ID} href={item.url} target="_blank" className="link drop-link">{item.title}</a>
                            } else {
                                return <Link key={item.ID} to={`${link}/${item.slug}`} className="link drop-link">{item.title}</Link>
                            }
                        })}
                </nav>
            </div>
        )
    }
}

export default DropdownMenu
