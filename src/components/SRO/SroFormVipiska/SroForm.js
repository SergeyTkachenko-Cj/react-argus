import React from 'react';
import SroCopies from './SroCopies';
import sro from './SroItems';

class SroForm extends React.Component {

  state = {
    email: '',
    inn: '',
    text: '',
    allSros: sro,
    submit: false,
    success: '',
    valid: false,
    valEmail: false,
    valInn: false,
    valSros: true
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
    
    const validateEmail = email => {
      var re = /\S+@\S+\.\S+/;
      return re.test(email.trim());
    }

    const validateInn = inn => {
      var re = /^[0-9]{10,12}$/;
      return re.test(inn.trim());
    }

      this.setState(prev => {
            const valemail = validateEmail(this.state.email);
            const valinn = validateInn(this.state.inn);
            const valsros = this.state.allSros.find(i => i.copy) !== undefined;
            return valemail && valinn && this.state.text === '' && valsros ? 
                   {submit: !prev.submit} : 
                   {valid: !prev.valid, 
                    valEmail: valemail, 
                    valInn: valinn, 
                    valSros: valsros}
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
          <h3>{this.state.success ? 'Спасибо! Ваша выписка будет готова в течение 1 рабочего дня.' : 'О нет! Что-то пошло не так :('}</h3>
        </div>
        <div style={{display: `${this.state.valid ? 'flex' : 'none'}`}} className="valid">
          <h3>{this.state.valEmail && this.state.valInn ? 
                  'Пожалуйста укажите количество копий' : 
                  this.state.email === '' || this.state.inn === '' ? 
                        'Пожалуйста заполните всю форму' : 'Пожалуйста заполните форму корректно'
              }</h3>
        </div>
        <h3 className='h2'>Получите выписку из СРО</h3>
        <div className="mail_phone">
            <input type="email" 
                   name="email" 
                   value={this.state.email} 
                   onChange={this.handleInputChange} 
                   className={/\S+@\S+\.\S+/.test(this.state.email.trim()) || !this.state.email ? 
                                                                        'field-style field-split' : 
                                                                        'field-style field-split error-on'
                              } 
                   placeholder="Email" 
                   autoComplete="off"
            />
            <input type="tel" 
                   name="inn" 
                   value={this.state.inn} 
                   onChange={this.handleInputChange} 
                   className={/^[0-9]{10,12}$/.test(this.state.inn.trim()) || !this.state.inn ? 
                                                                      'field-style field-split' : 
                                                                      'field-style field-split error-on'
                             } 
                   placeholder="ИНН" 
                   autoComplete="off"
            />
            
            {/* Anti-robots trick */}
            <input type="text" name="hidden-captcha" value={this.state.text} onChange={this.handleInputChange} className="field-style field-split" hidden />
            {/* ----------------- */}

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