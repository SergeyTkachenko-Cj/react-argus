import React from 'react';
import SroCopies from './SroCopies';
import sro from './SroItems';

class SroForm extends React.Component {

  state = {
    email: '',
    inn: '',
    allSros: sro,
    submit: false,
    success: '',
    valid: false
  }

  handleInputChange = event => {
    event.persist();
    this.setState({[event.target.name]: event.target.value});
  }

  handlePlusMinusButtons = (eve, prp) => {
    eve.persist();
    const sroDuplicate = [...this.state.allSros];

      const minusPlus = param => {
        const sign = eve.target.innerHTML;
        if (sign === '+' && param.copy < 100) return param.copy + 1
        if (sign === '-' && param.copy > 0) return param.copy - 1
        return param.copy
      }

    sroDuplicate.forEach(i => {
      i.copy = i.name === prp.name ? minusPlus(i) : i.copy;
    });

    this.setState({allSros: sroDuplicate});
  }

  handleSubmitButton = () => {
    this.setState(prev => {
          return this.state.email !== '' && 
                 this.state.inn !== '' &&
                 this.state.allSros.find(i => i.copy) !== undefined ? 
                 {submit: !prev.submit} : 
                 {valid: !prev.valid}
          })
    setTimeout(() => this.setState({valid: false}), 1000);
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    
    if (this.state.submit) {
      fetch('https://argus.group/mail.php', 
      {
        method: 'POST',
        body: data,
      }).then(resp => {
        this.setState(resp.status === 200 ? {success: true} : {success: false});
      });
    }
  }

  render() {
    const copyArr = this.state.allSros.map((item, index) => <SroCopies 
                                                          key={index} 
                                                          name={item.name} 
                                                          copy={item.copy} 
                                                          handle={this.handlePlusMinusButtons}
                                                        />)

    return (
      <form className="form-style-9" onSubmit={this.handleSubmit}>
        <div style={{display: `${this.state.success === '' ? 'none' : 'flex'}`}} className="success">
          <h3>{this.state.success ? 'Спасибо! Ваша выписка уже готовится.' : 'О нет! Что-то пошло не так :('}</h3>
        </div>
        <div style={{display: `${this.state.valid ? 'flex' : 'none'}`}} className="valid">
          <h3>Пожалуйста заполните всю форму</h3>
        </div>
        <h3 className='h2'>Получите выписку из СРО</h3>
        <div className="mail_phone">
            <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} className="field-style field-split" placeholder="Email" />
            <input type="tel" name="inn" value={this.state.inn} onChange={this.handleInputChange} className="field-style field-split" placeholder="ИНН" />
        </div>
        <div className="sros">
          {copyArr}
        </div>
        <div className="submt">
          <input type="submit" value="Заказать" onClick={this.handleSubmitButton} onKeyUp={event => event.keyCode === 13 ? this.handleSubmitButton : null} />
        </div>
      </form>
    );
  }
}

export default SroForm