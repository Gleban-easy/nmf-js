import React, { Component } from 'react'

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.boxName = props.boxName
    this.handleChange = this.handleChange.bind(this);
  }

  getValue() {
    return this.state.value
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <label>
          <p>
          {this.boxName}: &nbsp;
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </p>
        </label>
    );
  }
}

export default RequestForm