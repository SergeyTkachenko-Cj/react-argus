/* eslint-disable */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import PasswordPage from './PasswordPage/PasswordPage';
import SecretPage from '../SecretPage';
import NoPasswordPage from './NoPasswordPage';
import NotFound from '../../Error/NotFound';

export class Seminars extends Component {
    state = {
        cat: [],
        parent: {},
        isLoaded: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('https://admin.argus-eko.ru/wp-json/wp/v2/services_cat')
            .then(res => this.setState({
                cat: res.data.filter(cat => cat.slug === this.props.match.params.slug).shift()
            }))
            .then(res => this.setState({
                parent: this.state.cat.parent
            }))
            .catch(err => console.log(err));
        axios.get('https://admin.argus-eko.ru/wp-json/wp/v2/services_cat')
            .then(res => this.setState({
                parentSlug: res.data.filter(parent => parent.id == this.state.parent).shift().slug,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.match.params.slug !== prevState.cat.slug) {
            const newSlug = nextProps.match.params.slug;
            return { newSlug: newSlug };
        } else {
            return null;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.slug != this.state.newSlug) {
            window.scrollTo(0, 0);
            axios.get('https://admin.argus-eko.ru/wp-json/wp/v2/services_cat')
                .then(res => this.setState({
                    cat: res.data.filter(cat => cat.slug === this.state.newSlug).shift(),
                    isLoaded: true
                }))
                .catch(err => console.log(err))
            axios.get('https://admin.argus-eko.ru/wp-json/wp/v2/services_cat')
                .then(res => this.setState({
                    parentSlug: res.data.filter(parent => parent.id == this.state.parent).shift().slug,
                    isLoaded: true
                }))
                .catch(err => console.log(err))
        }
        Webflow.destroy();
        Webflow.ready();
    }

    render() {
        const {cat, isLoaded} = this.state;

        if (isLoaded) {
            return (
                <Fragment>
                    {cat.slug === 'exclusive-materials' ? 
                            <PasswordPage param={this.state} /> :
                            <NoPasswordPage param={this.state} />
                    }
                </Fragment>
            )
        }
        return <NotFound />
    }
}

export default Seminars
