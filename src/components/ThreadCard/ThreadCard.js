import React, { Component } from 'react';
import movieImg from './rambo.jpg'
 import "./ThreadCard.css";
 import "materialize-css/dist/css/materialize.min.css";

class ThreadCard extends Component {
    state = {  }
    render() { 
        console.log(this.props.thread)
        return ( 

            <div class="row">
                <div class="col s12 m6">
                    <div class="card">
                        <div class="card-image">
                            <img src={this.props.thread.thumbnailURL} />
                            <span class="card-title">{this.props.thread.title}</span>
                            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                            <p>{this.props.thread.prompt}</p>
                        </div>
                    </div>
                </div>
            </div>
  
     

         );
    }
}
 
export default ThreadCard;