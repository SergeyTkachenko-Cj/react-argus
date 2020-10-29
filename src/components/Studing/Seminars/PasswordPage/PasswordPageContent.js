/* eslint-disable */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import playarrow from '../../../../img/play-arrow.svg';
import SeminarsContent from '../SeminarsContent/SeminarsContent';
import SroPageContent from '../../../SRO/SroPageContent/SroPageContent';
import SroPageTable from '../../../SRO/SroPageTable/SroPageTable';
import SroFooter from '../../../SRO/SroFooter/SroFooter';

const PasswordPageContent = props => {
    const {cat, parentSlug} = props.param;

        return (
            <Fragment>
                <div className="paddinger"></div>
                <div className="section">
                    <div className="wrapper paddings-all w-clearfix">
                        <div className="top-for-brads">
                            <Link to={`/${parentSlug}`} className="link w-inline-block" data-ix="line-arrow">
                                <div className="before-txt-link revers">
                                    <div className="fon-arrow">
                                        <img src={playarrow} alt="" className="arrow-line" />
                                        <div className="line-arrow">
                                        </div>
                                    </div>
                                </div>
                                <div>назад</div>
                            </Link>
                            <div className="brads">
                                <div className="small-h brads">главная</div>
                                <img src={playarrow} alt="" className="brads-arrow" />
                                <div className="small-h brads">Обучение и семинары</div>
                                <img src={playarrow} alt="" className="brads-arrow" />
                                <div className="small-h brads">{cat.name}</div>
                            </div>
                        </div>
                        <h1>{cat.name}</h1>
                        <div className="p-class head">{cat.description}</div>
                        <div className="vertical-line">
                        </div>
                        <div className="vertical-line-25">
                        </div>
                    </div>
                    <div className="fon-greeer">
                    </div>
                    <div className="vertical-line _50">
                    </div>
                </div>
                <SeminarsContent key={cat.id} catid={cat.id} catslug={cat.slug}/>
                {(cat.acf && cat.acf["bloki_s_kontentom"]) ? <SroPageContent acf={cat.acf["bloki_s_kontentom"]} /> : null}
                {(cat.acf && cat.acf["bloki_s_tablitsey"]) ? <SroPageTable acf={cat.acf["bloki_s_tablitsey"]} /> : null}
                {(cat.acf && cat.acf["blok_v_podvale"]) ? <SroFooter acf={cat.acf["blok_v_podvale"]} /> : null}
            </Fragment>
        )
}

export default PasswordPageContent
