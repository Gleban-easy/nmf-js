import { Component } from 'react'

class Transaction extends Component {
  constructor(props) {
    super(props)
    this.sender = props.sender
    this.receiver = props.receiver
    this.value = props.value
    this.time = props.time
    this.category = props.category
  }

  getJson() {
    return JSON.stringify(this)
  }
}

export default Transaction