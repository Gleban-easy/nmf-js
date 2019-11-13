import { Pie } from 'react-chartjs-2';
import React, { Component } from 'react';

class TransactionPie extends Component {
    constructor(props) {
		super(props)
        this.state = {
			selectedOption: 'receiver',
            chartData: this.chartDataHandler('receiver')
        }
        this.handleOptionChange = this.handleOptionChange.bind(this);

    }
    handleOptionChange(changeEvent) {
		this.setState({
          selectedOption: changeEvent.target.value,
          chartData: this.chartDataHandler(changeEvent.target.value)
        
        });
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
        for (let label of data.keys()) {
            data.get(label).forEach((object) => {
                sum = sum + object.value;
            })
            mapLabels.set(label, sum);
            sum = 0;
        }
        return mapLabels;
    }

    dynamicColor() {
        let letters = '1234567ABCDE'.split('');
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 12)];
        }
        return color;
    }

    chartDataHandler(option) {
        const chartData = {
            labels: [],
            datasets: [{
                data: [],   
                backgroundColor: []
            }]  
        };
        const mapLabels = this.createMapLabels(option);
        for (let key of mapLabels.keys()) {
            chartData.labels.push(key);        
        }
        for (let val of this.sumValueMap(mapLabels).values()) {
            let dynamicColor = this.dynamicColor();            
            chartData.datasets[0].data.push(val);    //I don t know how write, so chart accept dataset.
            if(chartData.datasets[0].backgroundColor.indexOf(dynamicColor != true)) {
                chartData.datasets[0].backgroundColor.push(dynamicColor);
            }
        }
        
        return chartData;
    }   
    componentWillMount(){
        console.log("will")

    }

    
    render() {
        console.log("render")
        console.log(this.state.chartData)

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
                <h1>TransactionPie {this.state.selectedOption}</h1>
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