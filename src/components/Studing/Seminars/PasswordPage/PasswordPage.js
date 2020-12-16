/* eslint-disable */
import React, { Fragment } from 'react';
import PasswordForm from './PasswordForm';
// import PasswordPageContent from './PasswordPageContent';
import SecretPage from '../../SecretPage';

class PasswordPage extends React.Component {

  state = {
    pass: '',
    submit: false,
    error: false,
    success: '',
    valid: false
  }

  handleInputChange = event => {
    event.persist();
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmitButton = () => {
    this.setState(prev => {
          return this.state.pass !== '' ? 
                 {submit: true} : 
                 {valid: !prev.valid}
          })
    setTimeout(() => this.setState({valid: false, error: false}), 1000);
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    
    if (this.state.submit) {
      fetch('https://cdpo-argus.ru/password.php', 
      {
        method: 'POST',
        body: data,
      }).then(resp => {
        this.setState(resp.status === 200 ? {success: true} : {success: false, error: true});
      });
    }
  }

  render() {
    return (
        <Fragment>
            {!this.state.success ? <PasswordForm 
                param={this.state} 
                prps={this.props}
                inputChange={this.handleInputChange}
                submitButton={this.handleSubmitButton}
                submit={this.handleSubmit}
            /> : <SecretPage />}
        </Fragment>
    );
  }
}

export default PasswordPage
