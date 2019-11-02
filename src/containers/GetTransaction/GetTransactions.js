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
			transactions: []
		}
	}
	
	async componentDidMount() {
		try{
			const response = await axios.get('http://localhost:8080/transactions', this.config)
			const transactions =[]
			console.log(response);
			Object.keys(response).forEach((key, index) => {
				transactions.push()
			})

			this.setState({
				transactions	 	
			})
		
		} catch (e) {
			console.log(e);	
		} 
	}
	renderTransaction() {
		return this.state.transactions.map((transaction, index) => {
			
		})
	}

	render() {
		return ( <div>{}</div> )
	}
}

export default GetTransactions