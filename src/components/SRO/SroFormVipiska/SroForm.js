import React from 'react';
import SroCopies from './SroCopies';
import sro from './SroItems';

class SroForm extends React.Component {

  state = {
    allSros: sro
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

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    
      fetch('https://argus.group/mail.php', {
        method: 'POST',
        body: data,
      });
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
        <h3 className='h2'>Получите выписку из СРО</h3>
        <div className="mail_phone">
            <input type="email" name="email" className="field-style field-split" placeholder="Email" />
            <input type="tel" name="inn" className="field-style field-split" placeholder="ИНН" />
        </div>
        <div className="sros">
          {copyArr}
        </div>
        <div className="submt">
          <input type="submit" value="Заказать" />
        </div>
      </form>
    );
  }
}

export default SroForm