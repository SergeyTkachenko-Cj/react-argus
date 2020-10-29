/* eslint-disable */
import React, { Fragment } from 'react';
import PasswordForm from './PasswordForm';
import PasswordPageContent from './PasswordPageContent';

class PasswordPage extends React.Component {

  state = {
    name: '',
    email: '',
    tel: '',
    submit: false,
    success: '',
    valid: false
  }

  handleInputChange = event => {
    event.persist();
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmitButton = () => {
    this.setState(prev => {
          return this.state.name !== '' &&
                 this.state.email !== '' && 
                 this.state.tel !== '' ? 
                 {submit: !prev.submit} : 
                 {valid: !prev.valid}
          })
    setTimeout(() => this.setState({valid: false}), 1000);
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    
    if (this.state.submit) {
      fetch('https://argus.group/mail_webinar.php', 
      {
        method: 'POST',
        body: data,
      }).then(resp => {
        this.setState(resp.status === 200 ? {success: true} : {success: false});
      });
    }
  }

  render() {
    return (
        <Fragment>
            {!this.state.success ? <PasswordForm 
                param={this.state} 
                inputChange={this.handleInputChange}
                submitButton={this.handleSubmitButton}
                submit={this.handleSubmit}
            /> : <PasswordPageContent param={this.props.param} />}

            {/* <form className="form-style-9" style={{display: `${!this.state.success ? 'flex' : 'none'}`}} onSubmit={this.handleSubmit}>
                <div style={{display: `${this.state.success === '' ? 'none' : 'flex'}`}} className="success">
                <h3>{this.state.success ? 'Спасибо! Ссылку не вебинар пришлём за 30 минут до начала.' : 'О нет! Что-то пошло не так :('}</h3>
                </div>
                <div style={{display: `${this.state.valid ? 'flex' : 'none'}`}} className="valid">
                <h3>Пожалуйста заполните всю форму</h3>
                </div>
                <h3 className='h2 webinar'>Запишитесь на вебинар</h3>
                    <div className="mail_phone webinar_inpts">
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} className="field-style field-split" placeholder="Имя" />
                        <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} className="field-style field-split" placeholder="Email" />
                        <input type="tel" name="tel" value={this.state.tel} onChange={this.handleInputChange} className="field-style field-split" placeholder="Телефон" />
                        <input type="submit" value="Записаться" onClick={this.handleSubmitButton} onKeyUp={event => event.keyCode === 13 ? this.handleSubmitButton : null} />
                    </div>
            </form> */}
        </Fragment>
    );
  }
}

export default PasswordPage
