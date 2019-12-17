import React, { Component } from "react";
import "./CreateThread.css";
import axios from "axios";
import "materialize-css/dist/css/materialize.min.css";

class CreateThread extends Component {
  state = {
    threads: [],
    newThread: {
      title: '',
      prompt: '',
      thumbnailURL:'' ,
      backdropURL: ''
      
    }
}
CreateThread = e => {
  e.preventDefault();
  axios({
  url: `${this.props.databaseUrl}/api/threads`,
    method: "post",
    data: { newThread: this.state.newThread }
  }).then(response => {
    this.setState({ thread: response.data.threads });
  });
};
// deleteThread = e => {
// axios({
//   url: `${this.props.databaseUrl}/api/threads/${e.target.id}`,
//   method: "delete"
// }).then(response => {
//   this.setState({ threads: response.data.threads });
// });
// };
  render() {
    const threadEls = this.state.threads.map(thread => {
      return (
        <div key={thread.id} id="appointmentDiv">
            <p>{thread.title}</p>
            <p>{thread.prompt}</p>
         </div>
      );
    });
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
        {threadEls}
      </div>
    );
  }
}

export default CreateThread;

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
