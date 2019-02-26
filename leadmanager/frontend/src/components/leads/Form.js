import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads'


class Form extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  static propTypes = {
    addLead: PropTypes.func.isRequired
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead)
  };

  render() {
    const { name, email, message } = this.state
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" type="text" name="name" onChange={this.handleChange} value={name} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="text" name="email" onChange={this.handleChange} value={email} />
          </div>
          <div className="form-group">
            <label>Message</label>
            <input className="form-control" type="text" name="message" onChange={this.handleChange} value={message} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}



export default connect(null, { addLead })(Form);
