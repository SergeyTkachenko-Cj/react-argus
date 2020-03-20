import React from 'react';

class SroForm extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
      fetch('https://argus.group/mail.php', {
        method: 'POST',
        body: data,
      });
  }

  render() {
    // return (
    //   <form onSubmit={this.handleSubmit}>
    //     <label htmlFor="username">Enter username</label>
    //     <input id="username" name="username" type="text" />

    //     <label htmlFor="email">Enter your email</label>
    //     <input id="email" name="email" type="email" />

    //     <label htmlFor="birthdate">Enter your birth date</label>
    //     <input id="birthdate" name="birthdate" type="text" />

    //     <button>Send data!</button>
    //   </form>
    // );
    return (
    <form className="form-style-9">
      <h3 className='h2'>Получите выписку из СРО</h3>
      <ul>
      <li>
          <input type="email" name="field1" className="field-style field-split align-left" placeholder="Email" />
          <input type="phone" name="field2" className="field-style field-split align-right" placeholder="INN" />

      </li>
      <li>
          <input type="number" name="field3" className="field-style field-split align-left" placeholder="Proektir" />
          <input type="number" name="field4" className="field-style field-split align-center" placeholder="Stroit" />
          <input type="number" name="field4" className="field-style field-split align-right" placeholder="Iziskat" />
      </li>
      <li>
      <input type="submit" value="Send Message" />
      </li>
      </ul>
    </form>
    );
  }
}

export default SroForm