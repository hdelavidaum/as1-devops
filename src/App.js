import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoged: null,
      userAccess: { email: '', password: '' }
    };
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange = (event) => {
    const key = event.currentTarget.name;
    const value = event.currentTarget.value;

    this.setState(prevState => ({
      userAccess: { ...prevState.userAccess, [key]: value }
    }));
  }

  handleOnSubmit = (event) => {
    event.preventDefault();

    // This value is used for testing purpose and to attend what is required
    if (this.state.userAccess.email === 'eduardo.lino@pucpr.br' && this.state.userAccess.password === '123456') {
      this.setState({ isLoged: true });
    } else {
      this.setState({ isLoged: false });
    }
  }

  render() {
    return (
      <>
        <div>
          <h1>Login</h1>
        </div>
        <form className='access-inputs'>
          <label htmlFor='userEmail'>E-mail:</label>
          <input id='userEmail' type='email' placeholder='E-mail' name='email' onChange={this.handleOnChange} />
          
          <label htmlFor='userPassword'>Senha:</label>
          <input id='userPassword' type='password' placeholder='Senha' name='password' onChange={this.handleOnChange} />
          
          <input type='submit' onClick={this.handleOnSubmit} value='Acessar'/>
        </form>
        <div>
        </div>
        <div>
          <p>
            {this.state.isLoged === null ? '' : this.state.isLoged ? 'Acessado com sucesso!' : 'Usuário ou senha incorretos!'}
          </p>
        </div>
      </>
    );
  }
}

export default App;