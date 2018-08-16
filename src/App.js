import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    this.fieldChange = this.fieldChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  fieldChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  formSubmit(event) {

    event.preventDefault();
    let contact = {
      name: this.state.name
    }
    this.props.createContact(contact);


    console.log(this.state.name)

  }
  render() {
    return (
      <div className="App">

        <h4>Phone Book In Redux And React</h4>
        <hr />
        <p>
          {this.props.contacts.map((contact, i) => <li key={i}>{contact.name}</li>)}
        </p>
        

        <div className="phonebook">
          <h5>Create a New Contact</h5>
          <form onSubmit={this.formSubmit}>
            <input type="text" onChange={this.fieldChange} />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
