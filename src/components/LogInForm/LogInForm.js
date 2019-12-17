import React, { Component } from 'react'
import axios from "axios"

import './LogInForm.css'

class LogInForm extends Component {
  render () {
    return (
      <div className='login-wrap'>
        <h2>Log In</h2>

        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input name="username" type='text' onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input value='Submit' type='submit' onClick={this.props.handleLogIn} />
        </form>
      </div>
    )
  }
}

export default LogInForm
