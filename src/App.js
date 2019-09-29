import React from 'react';
import './App.css';
import PostList from './components/PostList'
import Button from './components/Button'
import RequestForm from './components/RequestForm'  
import Transaction from './components/Transaction'

var senderBox = new RequestForm("sender") 
var receiverBox = new RequestForm("receiver")
var valueBox = new RequestForm("value")
var timeBox = new RequestForm("time")
var categoryBox = new RequestForm("category")

var onClick = (senderBox, receiverBox, valueBox, timeBox, categoryBox) => {
  var trans = new Transaction(senderBox.getValue(), receiverBox.getValue(), 
              valueBox.getValue(), timeBox.getValue(), categoryBox.getValue())

  console.log(JSON.stringify(trans))
}

function App() { 
  return (
    <div>
      <PostList />
      {senderBox.render()}
      {receiverBox.render()}
      {valueBox.render()}
      {timeBox.render()}
      {categoryBox.render()}
      <Button label={"Send transaction"} handleClick={onClick(senderBox, 
                                                              receiverBox, 
                                                              valueBox, 
                                                              timeBox, 
                                                              categoryBox)} />
    </div>
  );
}

export default App;
