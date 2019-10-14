/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import rightArrow from '../../img/right-arrow-1.svg';
import Loader from '../Loader';

export class NotFound extends Component {
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
                    <div className="paddinger"></div>
                    <div style={{ position: 'relative', width: '100%', height: '74.5vh' }}>
                        <Loader />
                    </div>
                </Fragment>

            )
        }
        return (
            <Fragment>
                <div className="section _100vh" style={{minHeight : '85vh'}}>
                    <div className="wrapper paddings-all vert w-clearfix">
                        <h1 className="h1-single">404</h1>
                        <div className="p-class exc">Похоже это не та страница, которую вы искали. . . .<br /></div>
                        <Link to="/" className="link w-inline-block">
                            <div>перейти на главную</div>
                            <div className="before-txt-link"><img src={rightArrow} alt="" className="image-15" />
                                <div className="fon-arrow"></div>
                            </div>
                        </Link>
                        <div className="vertical-line"></div>
                        <div className="vertical-line-25"></div>
                    </div>
                    <div className="vertical-line _50"></div>
                </div>
            </Fragment>
        )
    }
}

export default NotFound