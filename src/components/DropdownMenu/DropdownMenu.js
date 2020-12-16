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

        if (this.props.slug === 'https://admin.argus-eko.ru/' || this.props.slug === 'o-kompanii') {
            link = '/about-us-page';
        }
        if (this.props.slug === 'ispitaniya') {
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
                                return <a key={item.ID} href='https://el.argus-eko.ru/' target="_blank" className="link drop-link">{item.title}</a>
                            } 
                            else if (item.url === 'https://admin.argus-eko.ru/') {
                                return <Link key={item.ID} to={`/blog`} className="link drop-link">{item.title}</Link>
                            }
                            else {
                                return link === '/about-us-page' ? 
                                       <Link key={item.ID} to={`/${item.slug}`} className="link drop-link">{item.title}</Link> : 
                                       <Link key={item.ID} to={`${link}/${item.slug}`} className="link drop-link">{item.title}</Link>
                            }
                        })}
                </nav>
            </div>
        )
    }
}

export default DropdownMenu
