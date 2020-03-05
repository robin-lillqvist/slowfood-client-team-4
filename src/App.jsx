import React, { Component } from 'react'
import LoginForm from './components/LoginForm'
import { authenticate } from './modules/auth'

class App extends Component {
  state = {
    renderLoginForm: false,
    authenticated: false,
    message: ''
  }

  onLogin = async e => {
    e.preventDefault()
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    )
    if (response.authenticated) {
      this.setState({ authenticated: true })
    } else {
      this.setState({ message: response.message, renderLoginForm: false })
    }
  }

  render () {
    let renderLogin

    const { renderLoginForm, authenticated, message } = this.state

    switch (true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />
        break
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <button
              id='login'
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </button>
            <p id="message">{message}</p>
          </>
        )
        break
      case authenticated:
        renderLogin = (
          <p id="message">Hi {JSON.parse(sessionStorage.getItem('credentials')).uid}</p>
        )
        break
    }

    return (
      <>
        <h1>Slowfood</h1>
        {renderLogin}
      </>
    )
  }
}
export default App
