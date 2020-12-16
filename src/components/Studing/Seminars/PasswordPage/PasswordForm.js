/* eslint-disable */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import playarrow from '../../../../img/play-arrow.svg';

const PasswordForm = props => {
    const {success, pass, error, valid} = props.param;
    const {parentSlug, cat} = props.prps.param;

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
            <form className="form-style-9" onSubmit={eve => props.submit(eve)}>
                <div style={{display: `${!error ? 'none' : 'flex'}`}} className="success">
                <h3>{success ? 'Спасибо! Сейчас вы получите доступ к материалам.' : 'Вы ввели неверный пароль'}</h3>
                </div>
                <div style={{display: `${valid ? 'flex' : 'none'}`}} className="valid">
                <h3>Пожалуйста введите пароль</h3>
                </div>
                <h3 className='h2 webinar'>Введите пароль для доступа</h3>
                    <div className="mail_phone webinar_inpts">
                        <input type="text" name="pass" value={pass} onChange={eve => props.inputChange(eve)} className="field-style field-split" placeholder="Пароль" />
                        <input type="submit" value="Ввести" onClick={() => props.submitButton()} onKeyUp={event => event.keyCode === 13 ? props.submitButton() : null} />
                    </div>
            </form>
          </Fragment>
        )
}

export default PasswordForm
