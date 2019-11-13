import React, { Component } from 'react'
import axios from 'axios'


import TransactionPie from '../../components/Diagrams/TransactionPie/TransactionPie'

class ShowTransactions extends Component {
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
	componentDidMount() {
		try{
			var self=this;
			axios.get('http://localhost:8080/transactions/filter', this.config).then(function (response) {
				const transactions = []
				
				response["data"].forEach((transaction) => {
					transactions.push(transaction)
				})

				self.setState(prevState => ({
					transactions: [...prevState.transactions, transactions]
				}))
	
			}) 
			
			
			
		} catch (e) {
			console.log(e);	
		} 
	}
	
	
	render() {
		console.log(this.state.transactions);	
		return (
			<div>
				<TransactionPie transactions={this.state.transactions} />
			</div>
		)
	}
}

export default ShowTransactions