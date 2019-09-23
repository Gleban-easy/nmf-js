import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
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
			console.log(response)
		})
		.catch(error => {
			console.log(error)
		})
	}

	render() {
		return ( <div> Lol </div> )
	}
}

export default PostList