import React, { Component } from 'react'
import axios from 'axios'

class GetTransactions extends Component {
	constructor(props) {
		super(props)
		this.config = {
	    	headers: {
	    		'Accept': 'application/json',
    			'Content-Type': 'application/json',
	    	}
		};
		this.state = {
			posts: []
		}
	}
	
	componentDidMount() {
		axios.get('http://localhost:8081/transactions', this.config)
		.then(response => {
			this.answer = JSON.parse(response)
		})
		.catch(error => {
			console.log(error)
		})
	}

	render() {
		return ( <div>  {this.answer} </div> )
	}
}

export default GetTransactions