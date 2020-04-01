import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';

class Form extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    // emptying the form
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <h1>Add Lead Form</h1>
        <form onSubmit={this.onSubmit}>
          <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input
              value={name}
              onChange={this.onChange}
              name="name"
              type="text"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input
              value={email}
              onChange={this.onChange}
              name="email"
              type="email"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Message</InputLabel>
            <Input
              value={message}
              onChange={this.onChange}
              name="message"
              type="text"
            />
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);
