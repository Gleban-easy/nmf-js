import React, { Component } from 'react'
import Button from './Button'
import Transaction from './Transaction'

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  sendTransaction() {
    let trans = Transaction(this.state.sender, 
                            this.state.receiver, 
                            this.state.value, 
                            this.state.time, 
                            this.state.category)
    console.log(trans.getJson())
  }

  render() {
    return (
      <form>
        <label>
          Sender: &nbsp;
          <input
            name="Sender"
            type="text"
            value={this.state.sender}
            onChange={this.handleInputChange} />
            <br />
        </label>
        <label>
          Receiver: &nbsp;
          <input
            name="Receiver"
            type="text"
            value={this.state.receiver}
            onChange={this.handleInputChange} />
            <br />
        </label>
        <label>
          Value: &nbsp;
          <input
            name="Value"
            type="number"
            value={this.state.value}
            onChange={this.handleInputChange} />
            <br />
        </label>
        <label>
          Timestamp: &nbsp;
          <input
            name="Timestamp"
            type="number"
            value={this.state.timestamp}
            onChange={this.handleInputChange} />
            <br />
        </label>
        <label>
          Category: &nbsp;
          <input
            name="Category"
            type="text"
            value={this.state.category}
            onChange={this.handleInputChange} />
            <br />
        </label>
        
      <Button label={"Send transaction"} handleClick={this.sendTransaction}/>
      </form>
    );
  }
}

export default RequestForm