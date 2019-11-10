import { Pie } from 'react-chartjs-2';
import React, { Component } from 'react';

class TransactionPie extends Component {
    constructor(props) {
		super(props)
        this.state = {
			selectedOption: 'receiver',
            chartData: {}
        }
       
        this.handleOptionChange = this.handleOptionChange.bind(this);

    }
    handleOptionChange(changeEvent) {
		this.setState({
          selectedOption: changeEvent.target.value,
          chartData: this.chartDataHandler(changeEvent.target.value)
        
        });
        //console.log(changeEvent.target.value)
        //console.log(this.chartDataHandler(this.state.selectedOption).labels)
        //console.log(this.chartDataHandler(this.state.selectedOption).datasets[0].data)

    }

    createMapLabels(option) {
        const mapLabels = new Map();
        this.props.transactions.forEach((object) => {

            if(option === 'receiver') {
                if(mapLabels.has(object.receiver) )
                    mapLabels.get(object.receiver).push(object);
                else(mapLabels.set(object.receiver, [object]));
            }
            if(option === 'time') {
                if(mapLabels.has(object.int) )
                    mapLabels.get(object.int).push(object);
                else(mapLabels.set(object.int, [object]));
            }
            if(option === 'category') {
                if(mapLabels.has(object.category) )
                    mapLabels.get(object.category).push(object);
                else(mapLabels.set(object.category, [object]));
            }
        });
    
        return mapLabels;
    }

    sumValueMap(data) {
        const mapLabels = new Map();
        let sum = 0;
        console.log(data);
        for (let label of data.keys()) {
            data.get(label).forEach((object) => {
                sum = sum + object.value;
            })
            mapLabels.set(label, sum);
            sum = 0;
        }
        return mapLabels;
    }

    chartDataHandler(option) {
        const chartData = {
            labels: [],
            datasets: [{
                data: [],   
                backgroundColor: ['green', 'red', 'blue', 'yellow', 'black']
            }]  
        };
        const mapLabels = this.createMapLabels(option);
        for (let key of mapLabels.keys()) {
            chartData.labels.push(key);

        }
        for (let val of this.sumValueMap(mapLabels).values()) {
            chartData.datasets[0].data.push(val);
        }
        return chartData;
    }   

    componentWillMount() {
        console.log(this.state.chartData.labels);

        this.setState({
            chartData: this.chartDataHandler('receiver')
          });
    }
    
    render() {
        return( 
            <div>
                <div className="container">
					<div className="row">
						<div className="col-sm-12">
							<form>
								<div className="radio">
								<label>
									<input 
										type="radio" 
										value="time" 
										checked={this.state.selectedOption === 'time'} 
										onChange={this.handleOptionChange}
									/>
									Time
								</label>
								</div>
								<div className="radio">
								<label>
									<input 
										type="radio" 
										value="receiver" 
										checked={this.state.selectedOption === 'receiver'}
										onChange={this.handleOptionChange}
									/>
									Receiver
								</label>
								</div>
								<div className="radio">
								<label>
									<input 
										type="radio" 
										value="category" 
										checked={this.state.selectedOption === 'category'}
										onChange={this.handleOptionChange}	
									/>  
									Category
								</label>
								</div>
							</form>
						</div>
					</div>
				</div>
                <h1>TransactionPie</h1>
                <Pie
                    data={{
                        labels: this.state.chartData.labels,
                        datasets: this.state.chartData.datasets
                    }}
                    height={50}
                />
            </div>
        
        )
    }

}

export default TransactionPie