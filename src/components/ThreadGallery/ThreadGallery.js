import React, { Component } from 'react';
import './ThreadGallery.css'
import ThreadCard from '../ThreadCard/ThreadCard.js';
import axios from "axios";
import "materialize-css/dist/css/materialize.min.css";

class ThreadGallery extends Component {
    state = {  
      threads:[]
    };

  componentDidMount() {
    this.getThreads();
  }

  getThreads = () => {
    axios({
      method: "get",
      url: `${this.props.databaseUrl}/api/threads`,
    })
      .then(response => {

        this.setState({
          threads: response.data.threads
        });
      })
      .catch(err => console.log(err));
  };
    render() { 
      console.log(this.props.databaseUrl)
      const threadEls = this.state.threads.map(thread => {
       return <ThreadCard thread={thread} />;
     }); 
        return ( 
            
          <div className="thread-wrap">

        {/* INTRODCTION TO SIGN UP */}
        <section className="section container " id="contact">
          <div className="row">
          {threadEls}
            <div className="col s12 l4 thread-form-wrap">
            <form>
              <h2>Create a discussion</h2>
                <div className="input-field ">
                  <i className="material-icons prefix">account_circle</i>
                  <input type="text" id="text" />
                  <label className="label" for="name">
                    Title
                  </label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">contacts</i>
                  <input type="text" id="text" />
                  <label className="label" for="name">
                    Prompt
                  </label>
                </div>
                

                {/* SUBMIT BUTTON */}
                <div className="btn-wrap">
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    Create
                  </button>
                  
                </div>
              </form>
              
            </div>



            {/* SIGN UP FORM */}
            <div className="col s12 l12 thread-gallery ">
              <p>
                The list of thread cards will go here
              </p>
              <p>
                Mauris dolor augue, vulputate in pharetra ac, facilisis nec
                libero. Fusce condimentum gravida urna, vitae scelerisque erat
                ornare nec.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ThreadGallery;
