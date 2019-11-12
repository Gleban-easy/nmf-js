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
				{"sender":"1","receiver":"a","value":421,"time":1559481217,"category":'Investing'},
				{"sender":"2","receiver":"b","value":123,"time":1559481217,"category":'Education'},
				{"sender":"3","receiver":"c","value":345,"time":1559481217,"category":'Medic'},
				{"sender":"4","receiver":"d","value":455,"time":1559481217,"category":'Purchases'},
				{"sender":"5","receiver":"e","value":426,"time":1559481217,"category":'Other'},
			]
		}
	}
	
	async componentDidMount() {
		try{
			const response = await axios.get('http://localhost:8080/transactions', this.config) //I don t find valid adress 
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
	
	render() {
		return (
			<div>
				<TransactionPie transactions={this.state.transactions} />
			</div>
		)
	}
}

export default ShowTransactions