/* eslint-disable */
import React, { Component, Fragment, lazy, Suspense } from 'react';
import NotFound from '../Error/NotFound';
const ReSectionOne = lazy(() => import('./SectionOne/ReSectionOne'));
const SectionTwo = lazy(() => import('./SectionTwo/SectionTwo'));
const SectionThree = lazy(() => import('./SectionThree/SectionThree'));
const SectionFour = lazy(() => import('./SectionFour/SectionFour'));
const SectionFive = lazy(() => import('./SectionFive/SectionFive'));
const SectionSix = lazy(() => import('./SectionSix/SectionSix'));
const SectionSeven = lazy(() => import('./SectionSeven/SectionSeven'));
const SectionEight = lazy(() => import('./SectionEight/SectionEight'));
const SectionNine = lazy(() => import('./SectionNine/SectionNine'));
const SectionTen = lazy(() => import('./SectionTen/SectionTen'));
const SectionEleven = lazy(() => import('./SectionEleven/SectionEleven'));



export class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <Suspense fallback={<NotFound />}>
                    <ReSectionOne />
                    <SectionTwo />
                    <SectionThree />
                    <SectionFour postid="0" />
                    <SectionFive />
                    <SectionFour postid="1" />
                    <SectionSix />
                    <SectionSeven />
                    <SectionEight />
                    <SectionNine />
                    <SectionTen />
                    <SectionEleven />
                </Suspense>
            </Fragment>
        )
    }
}

export default MainPage