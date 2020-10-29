/* eslint-disable */
import React, { Fragment } from 'react';

const PasswordPageContent = props => {
    const {success, name, email, tel, valid} = props.param;

        return (
          <Fragment>
                <form className="form-style-9" onSubmit={eve => props.submit(eve)}>
                <div style={{display: `${success === '' ? 'none' : 'flex'}`}} className="success">
                <h3>{success ? 'Спасибо! Ссылку не вебинар пришлём за 30 минут до начала.' : 'О нет! Что-то пошло не так :('}</h3>
                </div>
                <div style={{display: `${valid ? 'flex' : 'none'}`}} className="valid">
                <h3>Пожалуйста заполните всю форму</h3>
                </div>
                <h3 className='h2 webinar'>Запишитесь на вебинар</h3>
                    <div className="mail_phone webinar_inpts">
                        <input type="text" name="name" value={name} onChange={eve => props.inputChange(eve)} className="field-style field-split" placeholder="Имя" />
                        <input type="email" name="email" value={email} onChange={eve => props.inputChange(eve)} className="field-style field-split" placeholder="Email" />
                        <input type="tel" name="tel" value={tel} onChange={eve => props.inputChange(eve)} className="field-style field-split" placeholder="Телефон" />
                        <input type="submit" value="Записаться" onClick={() => props.submitButton()} onKeyUp={event => event.keyCode === 13 ? handleSubmitButton : null} />
                    </div>
            </form>
          </Fragment>
        )
}

export default PasswordPageContent
