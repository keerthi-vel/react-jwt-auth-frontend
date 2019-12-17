import React, { Component } from "react";
import "./SignUpForm.css";

class SignUpForm extends Component {
  render() {
    return (
      <div className="signup-wrap">

        {/* INTRODCTION TO SIGN UP */}
        <section className="section container scrollspy" id="contact">
          <div className="row">
            <div className="col s12 l5">
              <h2 className="indigo-text text-darken-4 signhead">
                Let the show begin...
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.
              </p>
              <p>
                Mauris dolor augue, vulputate in pharetra ac, facilisis nec
                libero. Fusce condimentum gravida urna, vitae scelerisque erat
                ornare nec.
              </p>
            </div>



            {/* SIGN UP FORM */}
            <div className="col s12 l5 offset-l2 form-wrap">
              <form>
                <div className="input-field">
                  <i className="material-icons prefix">account_circle</i>
                  <input type="text" id="text" />
                  <label className="label" for="name">
                    Username:
                  </label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">contacts</i>
                  <input type="text" id="text" />
                  <label className="label" for="name">
                    First Name:
                  </label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">contacts</i>
                  <input type="text" id="text" />
                  <label className="label" for="name">
                    Last Name:
                  </label>
                </div>
                <div class="input-field">
                  <i class="material-icons prefix">email</i>
                  <input type="email" id="email" />
                  <label className="label" for="email">
                    Email:
                  </label>
                </div>
                <div class="input-field">
                  <i class="material-icons prefix">lock</i>
                  <input id="text" type="text"></input>
                  <label className="label" for="message">
                    Password:
                  </label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">star</i>
                  <textarea
                    id="favorites"
                    className="materialize-textarea"
                    cols="20"
                    rows="20"
                  ></textarea>
                  <label className="label" for="favorites">
                    Name some of your favorite movies and television shows?
                  </label>
                </div>


                {/* SUBMIT BUTTON */}
                <div className="btn-wrap">
                  <button
                    className="btn sign waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    Submit
                  </button>
                  <p className='login-message'>Already a member? <a href='/login'>Login</a></p>
                </div>
                
              </form>
            </div>
          </div>
        </section>
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
