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
			response["data"].forEach((transaction) => {
				transactions.push(transaction)
			})

			this.setState(prevState => ({
				transactions: [...prevState.transactions, transactions]
			}))
		
		} catch (e) {
			console.log(e);	
		} 
	}
	renderTransaction() {
		return this.state.transactions.map((transaction) => {
			return <div>{JSON.stringify(transaction)}</div>
		})
	}

	render() {
		return ( <div>{this.renderTransaction()}</div> )
	}
}

export default GetTransactions