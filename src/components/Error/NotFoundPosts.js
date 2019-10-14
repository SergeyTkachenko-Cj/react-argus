/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Loader from '../Loader';

export class NotFoundPosts extends Component {
    _isMounted = false;

    state = {
        loading: true
    }

    componentDidMount() {
        this._isMounted = true;
        setTimeout(() => {
            if (this._isMounted) {
                this.setState({
                    loading: false
                });
            }
        }, 5000)
    }

    componentDidUpdate() {
        Webflow.destroy();
        Webflow.ready();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { loading } = this.state;
        if (loading) {
            return (
                <Fragment>
                    <div style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                        <Loader />
                    </div>
                </Fragment>
            )
        }
        return (
            <div style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ fontSize: '16px' }}>Записей не обнаружено</div>
            </div>
        )
    }
}

export default NotFoundPosts
