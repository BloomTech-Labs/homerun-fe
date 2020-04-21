import React from "react";
import {Link} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';

export default class ContactUsForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="container-contact100">
      <div className="wrap-container">
      <span className="contact100-form-symbol">
           <Icon size="huge" className="mail outline"/>
      </span>
      <form
      onSubmit={this.handleSubmit}
      action="https://formspree.io/xoqnlllw"
      method="POST"
    >
    
      <div className="form-title">
                  Drop Us A Message
                  <p>We would love to hear from you!</p>
              </div>

              
      <div>
        <label> Full Name: </label>
        <input
          className="wrap-input" 
          name="name"
          placeholder= "First and Last"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div style={{ fontSize: 15, color: "red" }}>
          {this.state.nameError}
        </div>
      </div>
      <div>
        <label> Email: </label>
        <input
          type="text"
          className="wrap-input" 
          name="email"
          placeholder="email@domain.tld"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <div style={{ fontSize: 15, color: "red" }}>
          {this.state.emailError}
        </div>
      </div>
      <div>
        <label> Subject: </label>
        <input
          className="wrap-input" 
          type="subject"
          name="subject"
          placeholder="Subject"
          value={this.state.subject}
          onChange={this.handleChange}
        />
        <div style={{ fontSize: 15, color: "red" }}>
          {this.state.subjectError}
        </div>
      </div>
      <div>
        <label> Message: </label>
        <textarea
          className="wrap-input" 
          type="message"
          name="message"
          placeholder="Write Us A Message!"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <div style={{ fontSize: 15, color: "red" }}>
          {this.state.messageError}
        </div>
      </div>
      <button
          className="container-contact100-form-btn" 
          type="submit"
          value="Send Message"
        />

        <div className="container-contact100-form-btn">
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="submit "> Send </button>}
           <button 
           className="back"><Link to ={"/"}>Nevermind!</Link> </button>
        </div>
        
      
    </form>
    </div>
    </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}