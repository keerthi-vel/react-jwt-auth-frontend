import React, { Component } from "react";
import "./CreateThread.css";

class SignUpForm extends Component {
  render() {
    return (
      <div className='create-thread-wrap'>
        <form action="/action_page.php" id="usrform">
          <input id='thread-btn' className="btn waves-effect waves-light" type="submit" />
        </form>

        <div className='text-area-wrap'>
            <textarea className='text-area' name="comment" form="usrform">
            Enter text here...
            </textarea>
        </div>
      </div>
    );
  }
}

export default SignUpForm;

{
  /* <form className='form'>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input className='submit' value='Submit' type='submit' onClick={this.props.handleSignUp} />
        </form> */
}
