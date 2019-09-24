import React from 'react';
import './App.css';
import PostList from './components/PostList'
import Button from './components/Button'
import RequestForm from './components/RequestForm'  

var senderBox = <RequestForm boxName="sender"/> 
var receiverBox = <RequestForm boxName="receiver"/>
var valueBox = <RequestForm boxName="value"/>
var timeBox = <RequestForm boxName="time"/>
var categoryBox = <RequestForm boxName="category"/>
      
function App() { 
  return (
    <div>
      <PostList />
      {senderBox}
      {receiverBox}
      {valueBox}
      {timeBox}
      {categoryBox}
      <Button />
    </div>
  );
}

export default App;
