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
			transactions: [
				{
					"sender": "MasterCard #1",
					"receiver": "BANK OF RUSSIA",
					"value": 10000,
					"int": "2017-06-22 19:10:25",
					"category": "Investing" 
				},
				{
					"sender": "MasterCard #1",
					"receiver": "BANK OF RUSSIA",
					"value": 10000,
					"int": "2016-06-22 19:10:25",
					"category": "Investing" 
				},
				{
					"sender": "MasterCard #1",
					"receiver": "BANK OF RUSSIA",
					"value": 10000,
					"int": "2015-06-22 19:10:25",
					"category": "Investing" 
				},
				{
					"sender": "MasterCard #1",
					"receiver": "BANK OF RUSSIA",
					"value": 10000,
					"int": "2014-06-22 19:10:25",
					"category": "Investing" 
				},
				{
					"sender": "MasterCard #1",
					"receiver": "BANK OF AMERICA",
					"value": 10000,
					"int": "2015-06-22 19:10:25",
					"category": "Investing" 
				},
				{
					"sender": "MasterCard #1",
					"receiver": "BANK OF AMERICA",
					"value": 10000,
					"int": "2014-06-22 19:10:25",
					"category": "Investing" 
				},
				{
					"sender": "MasterCard #1",
					"receiver": "BANK OF AMERICA",
					"value": 10000,
					"int": "2015-06-22 19:10:25",
					"category": "Investing" 
				},
				{
					"sender": "MasterCard #1",
					"receiver": "BANK OF AFRICA",
					"value": 10000,
					"int": "2014-06-22 19:10:25",
					"category": "Investing" 
				},
				{
					"sender": "MasterCard #1",
					"receiver": "BANK OF AFRICA",
					"value": 10000,
					"int": "2015-06-22 19:10:25",
					"category": "Investing" 
				},
				{
					"sender": "MasterCard #1",
					"receiver": "BANK OF AFRICA",
					"value": 10000,
					"int": "2014-06-22 19:10:25",
					"category": "Investing" 
				},
			]
		}
	}
	
	
	// async componentDidMount() {
	// 	try{
	// 		const response = await axios.get('http://localhost:8080/transactions', this.config)
	// 		const transactions =[]
	// 		console.log(response);
	// 		response["data"].forEach((transaction) => {
	// 			transactions.push(transaction)
	// 		})

	// 		this.setState(prevState => ({
	// 			transactions: [...prevState.transactions, transactions]
	// 		}))
		
	// 	} catch (e) {
	// 		console.log(e);	
	// 	} 
	// }
	
	

	render() {
		return (
			<div>
				<TransactionPie transactions={this.state.transactions} />
			</div>
		)
	}
}

export default ShowTransactions