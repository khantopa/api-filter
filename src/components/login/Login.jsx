import React, { Component } from 'react';
import User from'../../images/user-white.svg';
import Email from '../../images/email.svg';
import Key from '../../images/key.svg'
import './Login.scss';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      status: '',
      isLogedIn: false
    }
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value
    this.setState({
      [name]:value,
      status: ''
    })
  }

  login = () => {
    const email = this.state.email;
    const password = this.state.password;
    if(email === "test@test.com" && password === "12345678") {
      this.props.history.push('/contacts');
    } else {
      this.setState({ status: 'Incorrect username and password'})
    }
  }

  render() {
    return (
      <div className="login">
        <div className="login_card">
          <div className="login_icon">
            <img className="login_icon_img" src={User} alt="User-icon" />
          </div>
          <div className="login_form">
            <label>
              <input type="email" className="login_form_field" placeholder="E-mail" 
              name="email" onChange={ this.handleChange } id="email" /> 
              <img className="icon" src={ Email } alt="Email" /> 
            </label>
            <label>
              <input type="password" className="login_form_field" placeholder="Password" 
              name="password" onChange={ this.handleChange } id="password" />
              <img className="icon" src={ Key } alt="Key" />
            </label>
          </div>
          { this.state.status !== ''
            ? <div className="error" style={{'background': 'red'}}>
                <p>{ this.state.status }</p>
              </div>
            : <div className="error"></div>
          }
          <br/><br/>
          <div className="login_submit">
            <button onClick={ this.login } className="login_submit_button">Login</button>
          </div>
        </div>
      </div>
    )
  }
}
